import React from 'react';
import { ArrowRight, Calendar, ShoppingCart, Lock, CreditCard, Banknote, Droplets, Leaf, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/mockData';

interface HeroProps {
  onShopClick: () => void;
  onBookClick: () => void;
  onQuizClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onBookClick }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#FFF5F6] via-[#FFF9F9] to-[#FFFDFC] pt-4 pb-14 lg:pt-6 lg:pb-16 border-b border-rose-100">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-rose-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Clean Hero Visual Banner - Pure artwork without text obstruction */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-rose-200/80 mb-6 group bg-white">
          <div className="aspect-[16/9] sm:aspect-[21/9] w-full relative overflow-hidden">
            <img
              src={HERO_IMAGE}
              alt="Syhaas Cosmetics Luxury Serum Collection - Pure Natural Radiant"
              className="w-full h-full object-cover object-center transform group-hover:scale-[1.01] transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>
        </div>

        {/* Action Row Under Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-rose-100 shadow-xs">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
            <span className="w-2 h-2 rounded-full bg-rose-700 animate-pulse" />
            <span>Official Syhaas Clinical Dispensary · 100% Authentic Guaranteed</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onShopClick}
              className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-800 to-rose-700 hover:from-rose-700 hover:to-rose-600 rounded-full shadow-md hover:shadow-rose-500/20 flex items-center gap-2 transition-all cursor-pointer group"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Shop The Collection</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onBookClick}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-rose-950 bg-rose-100/90 hover:bg-rose-200/90 border border-rose-200 rounded-full shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-700" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

        {/* 3 Core Pillars From Official Brand Graphic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          
          {/* Pillar 1: Advanced Acne & Pore Refining */}
          <div 
            onClick={onShopClick}
            className="p-5 rounded-2xl bg-white border border-rose-100/90 shadow-xs hover:shadow-md hover:border-rose-300 transition-all flex items-start gap-4 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-800 to-rose-950 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                Advanced Acne & Pore Refining
              </h3>
              <div className="text-xs text-slate-600 mt-1 font-medium">
                Fights Acne <span className="text-rose-400">|</span> Unclogs Pores <span className="text-rose-400">|</span> Controls Oil
              </div>
            </div>
          </div>

          {/* Pillar 2: Advanced Brightening Serum */}
          <div 
            onClick={onShopClick}
            className="p-5 rounded-2xl bg-white border border-rose-100/90 shadow-xs hover:shadow-md hover:border-rose-300 transition-all flex items-start gap-4 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-800 to-rose-950 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                Advanced Brightening Serum
              </h3>
              <div className="text-xs text-slate-600 mt-1 font-medium">
                Evens Out Skin Tone <span className="text-rose-400">|</span> Smooths Fine Lines <span className="text-rose-400">|</span> Deeply Hydrates
              </div>
            </div>
          </div>

          {/* Pillar 3: Anti-Melanin Pigmentation Reducing */}
          <div 
            onClick={onShopClick}
            className="p-5 rounded-2xl bg-white border border-rose-100/90 shadow-xs hover:shadow-md hover:border-rose-300 transition-all flex items-start gap-4 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-800 to-rose-950 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                Anti-Melanin Pigmentation
              </h3>
              <div className="text-xs text-slate-600 mt-1 font-medium">
                Reduces Melanin <span className="text-rose-400">|</span> Fades Dark Spots <span className="text-rose-400">|</span> Soothes Eczema
              </div>
            </div>
          </div>

        </div>

        {/* Payment Security & Trust Bar directly from Official Banner */}
        <div className="py-3.5 px-6 bg-white/90 backdrop-blur-md rounded-2xl border border-rose-100 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-600 shadow-2xs">
          <div className="flex items-center gap-2 font-medium">
            <Lock className="w-4 h-4 text-rose-700" />
            <span className="font-semibold text-slate-800">Secure Payment</span>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2 font-bold tracking-wider text-slate-800">
            <span className="text-blue-800 italic text-sm">VISA</span>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-600 inline-block -mr-2" />
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500 inline-block opacity-90" />
            <span className="font-medium text-slate-800">Mastercard</span>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2 text-emerald-800 font-semibold">
            <Banknote className="w-4 h-4 text-emerald-600" />
            <span>Cash on Delivery Available</span>
          </div>
        </div>

      </div>
    </section>
  );
};
