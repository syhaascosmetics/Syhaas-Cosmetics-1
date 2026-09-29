import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: (subtotal: number, discount: number, shipping: number, total: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [promoInput, setPromoInput] = useState('SYHAAS15');
  const [appliedPromo, setAppliedPromo] = useState<string | null>('SYHAAS15');
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const FREE_SHIPPING_THRESHOLD = 50;
  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  // 15% discount if SYHAAS15 is applied
  const discountRate = appliedPromo === 'SYHAAS15' ? 0.15 : 0;
  const discountAmount = subtotal * discountRate;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : 5.95;
  const total = Math.max(0, subtotal - discountAmount + (subtotal > 0 ? shipping : 0));

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'SYHAAS15') {
      setAppliedPromo('SYHAAS15');
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try SYHAAS15 for 15% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/40 backdrop-blur-xs animate-in fade-in">
      <div 
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-rose-100">
          
          {/* Header */}
          <div className="p-6 border-b border-rose-100 flex items-center justify-between bg-gradient-to-r from-rose-50/50 to-white">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-rose-600" />
              <h2 className="font-serif text-xl font-bold text-slate-900">
                Your Shopping Bag
              </h2>
              <span className="text-xs text-slate-400 font-medium tabular-nums">
                ({cart.reduce((totalQty, item) => totalQty + item.quantity, 0)})
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-rose-50/60 px-6 py-3 border-b border-rose-100 text-xs">
            {remainingForFreeShipping > 0 ? (
              <div>
                <span className="text-slate-600">
                  Add <strong className="text-rose-900 font-semibold tabular-nums">${remainingForFreeShipping.toFixed(2)}</strong> more for <strong>Free Express Clinical Delivery</strong>!
                </span>
                <div className="w-full bg-rose-200/60 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div
                    className="bg-rose-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>You unlocked <strong>Free Express Clinical Shipping</strong>!</span>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="p-6 overflow-y-auto flex-1 space-y-4">
            {cart.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-400 mx-auto flex items-center justify-center mb-3">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-slate-500 mb-5 max-w-xs mx-auto">
                  Explore our dermatologist-formulated collection or take our 2-minute diagnostic skin quiz.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-xl transition-colors cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="p-3.5 rounded-2xl border border-rose-100 bg-[#FFFDFC] flex gap-3 relative group"
                >
                  <div className="w-20 h-20 rounded-xl bg-rose-50 overflow-hidden shrink-0 border border-rose-100 flex items-center justify-center">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-slate-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-slate-300 hover:text-rose-600 p-1 cursor-pointer transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {item.product.volume}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                          className="p-1 hover:bg-slate-200 text-slate-600 cursor-pointer"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-slate-800 tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-slate-200 text-slate-600 cursor-pointer"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Line Item Total */}
                      <span className="font-serif text-sm font-bold text-slate-900 tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-rose-100 bg-[#FFFDFC] space-y-4">
              
              {/* Promo input */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value)}
                    placeholder="Discount code (e.g. SYHAAS15)"
                    className="w-full pl-8 pr-3 py-2 text-xs border border-rose-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-rose-400 uppercase font-mono"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-slate-800 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors cursor-pointer border border-rose-200"
                >
                  Apply
                </button>
              </form>
              {promoError && <p className="text-[11px] text-rose-600">{promoError}</p>}
              {appliedPromo && (
                <div className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Promo {appliedPromo} applied (15% off regular price)</span>
                </div>
              )}

              {/* Price rows */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900 tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-rose-700 font-medium">
                    <span>Discount (15%)</span>
                    <span className="tabular-nums">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Express Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-rose-100">
                  <span>Total</span>
                  <span className="font-serif text-xl tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Proceed to Checkout CTA */}
              <button
                onClick={() => onProceedToCheckout(subtotal, discountAmount, shipping, total)}
                className="w-full py-3.5 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Checkout Securely</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-slate-400 text-center">
                30-Day Dermatological Satisfaction Guarantee · Free Returns
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
