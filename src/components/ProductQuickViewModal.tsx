import React, { useState } from 'react';
import { Product } from '../types';
import { X, Star, Check, ShoppingBag, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full border border-rose-100 shadow-2xl overflow-hidden relative animate-in zoom-in-95 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-slate-500 hover:text-slate-800 rounded-full shadow-sm cursor-pointer transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image & Badges */}
        <div className="md:w-1/2 bg-[#FFF8F9] p-8 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-rose-100">
          {product.badge && (
            <span className="absolute top-4 left-4 text-[11px] font-semibold tracking-wider uppercase text-rose-700 bg-white/90 px-2.5 py-1 rounded-md border border-rose-200 shadow-xs">
              {product.badge}
            </span>
          )}
          <div className="w-64 h-64 relative rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="mt-4 text-xs text-slate-500 font-medium">
            {product.volume} · Hypoallergenic Formulation
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-rose-600 font-semibold mb-1">
              {product.category}
            </div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mb-1">
              {product.name}
            </h2>
            <p className="text-xs text-slate-500 mb-3 font-medium">
              {product.subtitle}
            </p>

            {/* Rating & Price */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-rose-100">
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <div className="flex items-center text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="font-semibold text-slate-800">{product.rating}</span>
                <span>({product.reviewCount} reviews)</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-bold text-slate-900 tabular-nums">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Key Clinical Ingredients */}
            <div className="mb-4">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                Bio-Actives
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.keyIngredients.map((item) => (
                  <span key={item} className="text-xs bg-rose-50 text-rose-800 px-2 py-0.5 rounded border border-rose-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Clinical Evidence Quote */}
            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs text-emerald-900 mb-4 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{product.clinicalResults}</span>
            </div>

            {/* How to use */}
            <div className="text-xs text-slate-600 mb-6">
              <strong className="text-slate-800 font-semibold block mb-0.5">Directions:</strong>
              {product.howToUse}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="pt-4 border-t border-rose-100 flex items-center gap-3">
            <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer text-sm font-semibold"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-3 text-xs font-semibold text-slate-800 tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer text-sm font-semibold"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={addedAnimation}
              className={`flex-1 py-3 px-4 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                addedAnimation
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-900 hover:bg-rose-600 text-white shadow-md'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Shopping Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag · ${(product.price * quantity).toFixed(2)}</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
