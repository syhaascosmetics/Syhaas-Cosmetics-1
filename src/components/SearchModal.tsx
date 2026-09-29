import React, { useState } from 'react';
import { Product } from '../types';
import { Search, X, Star, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const results = products.filter((p) => {
    if (!searchTerm.trim()) return false;
    const term = searchTerm.toLowerCase();
    return (
      p.name.toLowerCase().includes(term) ||
      p.subtitle.toLowerCase().includes(term) ||
      p.concern.toLowerCase().includes(term) ||
      p.keyIngredients.some((i) => i.toLowerCase().includes(term))
    );
  });

  const popularQueries = ['Niacinamide', 'Ceramide', 'Rose Damascena', 'Salicylic Acid', 'SPF 50', 'Acne'];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-950/50 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-rose-100 shadow-2xl overflow-hidden relative animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-rose-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-rose-500 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search formulations by name, active ingredient, or concern..."
            className="w-full text-sm sm:text-base bg-transparent border-none focus:outline-none text-slate-800 placeholder-slate-400"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Tags */}
        <div className="px-6 py-3 bg-[#FFF9F9] border-b border-rose-100/70 flex items-center gap-2 overflow-x-auto text-xs text-slate-500">
          <span className="font-semibold text-rose-700 uppercase tracking-wider text-[10px] whitespace-nowrap">
            Popular Actives:
          </span>
          {popularQueries.map((query) => (
            <button
              key={query}
              onClick={() => setSearchTerm(query)}
              className="px-2.5 py-1 bg-white hover:bg-rose-100/60 text-slate-700 rounded-md border border-rose-200 transition-colors whitespace-nowrap cursor-pointer shadow-2xs"
            >
              {query}
            </button>
          ))}
        </div>

        {/* Results Area */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {searchTerm.trim() ? (
            results.length > 0 ? (
              <div className="space-y-3">
                <span className="text-xs text-slate-400 block mb-2">
                  Found {results.length} formulation{results.length > 1 ? 's' : ''}
                </span>
                {results.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => {
                      onSelectProduct(prod);
                      onClose();
                    }}
                    className="p-3 rounded-2xl border border-rose-100 bg-white hover:bg-rose-50/40 flex items-center justify-between gap-4 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-rose-50 overflow-hidden shrink-0 border border-rose-100">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors">
                          {prod.name}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {prod.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-serif text-sm font-bold text-slate-900 tabular-nums">
                        ${prod.price}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-rose-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-xs text-slate-500">
                No formulations matched "{searchTerm}". Try searching for 'ceramide', 'serum', or 'bha'.
              </div>
            )
          ) : (
            <div className="py-10 text-center text-xs text-slate-400">
              Type to instantly search our clinical skincare catalogue.
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
