import React from 'react';
import { ShieldCheck, Heart, Sparkles, Leaf, Award } from 'lucide-react';
import { BARRIER_CREAM_IMAGE } from '../data/mockData';

export const BrandStorySection: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gradient-to-b from-[#FFFDFC] to-[#FFF8F9] border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image with glass badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-rose-200/80 aspect-[4/5] bg-rose-50">
              <img
                src={BARRIER_CREAM_IMAGE}
                alt="Syhaas Cosmetics botanical and clinical laboratory"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-rose-100 shadow-lg text-slate-900">
                <div className="flex items-center gap-2 text-rose-600 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Clinical Standards</span>
                </div>
                <div className="text-xs text-slate-700">
                  Formulated at physiological pH (5.2 - 5.5) using certified organic Damask Rose hydrosol and biomimetic skin lipids.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="text-xs font-semibold text-rose-600 tracking-wider uppercase mb-2">
              The Syhaas Philosophy
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6 [text-wrap:balance]">
              Where Dermatological Rigor Meets Pure Cosmetic Pleasure
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
              Syhaas Cosmetics was born from a singular clinical observation: patients often abandoned harsh dermatological prescriptions because they stripped the skin barrier, smelled medicinal, and felt unpleasant to wear.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-8 font-normal">
              We united board-certified dermatologists and Parisian cosmetic formulators to craft evidence-based treatments that respect the skin’s biological ecosystem. By infusing therapeutic actives like Tranexamic Acid, Copper Peptides, and Encapsulated Retinal into a nourishing base of fresh Bulgarian Damask Rose water and 5 bio-identical ceramides, we deliver medical efficacy without compromise.
            </p>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-rose-200/60">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Physician Formulated</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Tested and validated by practicing dermatologists.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Bio-Compatible Actives</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Zero synthetic fragrance, parabens, or drying alcohols.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Barrier First</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Strengthens the stratum corneum before exfoliation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Cruelty-Free & Clean</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Sustainable frosted glass with ethical botanical harvesting.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
