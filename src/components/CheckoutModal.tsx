import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Banknote } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  subtotal,
  discount,
  shipping,
  total,
  onOrderSuccess
}) => {
  const [fullName, setFullName] = useState('Rachel Adams');
  const [email, setEmail] = useState('rachel.adams@example.com');
  const [address, setAddress] = useState('742 Evergreen Terrace');
  const [city, setCity] = useState('Springfield');
  const [zip, setZip] = useState('97477');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `SYH-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(orderId);
    setIsSuccess(true);
    onOrderSuccess();
  };

  const handleFinish = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-rose-100 shadow-2xl overflow-hidden relative animate-in zoom-in-95 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-rose-100 flex items-center justify-between bg-gradient-to-r from-rose-50/60 to-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-serif font-bold">
              S
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-slate-900 block leading-tight">
                Syhaas Secure Clinical Checkout
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                256-bit Encrypted SSL Payment & Guarantee
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close checkout modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {!isSuccess ? (
            <form onSubmit={handlePlaceOrder} className="space-y-5">
              
              {/* Shipping info */}
              <div>
                <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  1. Clinical Delivery Destination
                </h4>
                <div className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Recipient Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email for dispatch updates"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    />
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Street Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  />

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Postal Code"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment methods */}
              <div>
                <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                  2. Payment Method
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-rose-500 bg-rose-50/70 shadow-xs'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 text-slate-800" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Credit / Debit Card</div>
                      <div className="text-[10px] text-slate-500">Visa, Mastercard, Amex</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-2xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                      paymentMethod === 'cod'
                        ? 'border-rose-500 bg-rose-50/70 shadow-xs'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <Banknote className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">Cash on Delivery</div>
                      <div className="text-[10px] text-slate-500">Pay upon parcel arrival</div>
                    </div>
                  </button>
                </div>

                {paymentMethod === 'card' && (
                  <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Demo Card Number
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full text-xs p-2 bg-white border border-slate-200 rounded-lg font-mono"
                    />
                  </div>
                )}
              </div>

              {/* Order total review */}
              <div className="p-4 bg-rose-50/60 rounded-2xl border border-rose-100 space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Cart Subtotal ({cart.length} items):</span>
                  <span className="font-medium text-slate-900 tabular-nums">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-rose-700 font-medium">
                    <span>SYHAAS15 Promo (15% Off):</span>
                    <span className="tabular-nums">-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-slate-600">
                  <span>Clinical Express Delivery:</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-rose-200">
                  <span>Grand Total:</span>
                  <span className="tabular-nums font-serif text-xl">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-xl transition-colors cursor-pointer shadow-md"
                >
                  Authorize & Place Order · ${total.toFixed(2)}
                </button>
              </div>

            </form>
          ) : (
            /* Confirmation Receipt */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-slate-900">
                Order Confirmed
              </h3>

              <div className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you for your order, <strong className="text-slate-900">{fullName}</strong>. Your clinical formulations are now being temperature-controlled and packaged.
              </div>

              <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-100 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Order Reference:</span>
                  <span className="font-mono font-bold text-rose-900">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Shipping To:</span>
                  <span className="font-semibold text-slate-800">{address}, {city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Method:</span>
                  <span className="font-semibold text-slate-800">
                    {paymentMethod === 'card' ? 'Online Card Authorized' : 'Cash on Delivery (COD)'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-rose-100">
                  <span className="text-slate-500">Total Paid:</span>
                  <span className="font-bold text-slate-900">${total.toFixed(2)} USD</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                A tracking dispatch email will be sent to {email} within 24 hours.
              </p>

              <button
                type="button"
                onClick={handleFinish}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
