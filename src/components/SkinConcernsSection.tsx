import React, { useState } from 'react';
import { SKIN_CONCERNS } from '../data/mockData';
import { SkinConcernItem } from '../types';
import { ArrowRight, Sparkles, Sun, Flame, Droplets, Shield, Heart, Info, X } from 'lucide-react';

interface SkinConcernsSectionProps {
  onSelectConcern: (concernId: string) => void;
}

const getConcernIcon = (iconName: string) => {
  switch (iconName) {
    case 'Sparkles':
      return <Sparkles className="w-5 h-5 text-rose-500" />;
    case 'Sun':
      return <Sun className="w-5 h-5 text-amber-500" />;
    case 'Flame':
      return <Flame className="w-5 h-5 text-rose-600" />;
    case 'Droplets':
      return <Droplets className="w-5 h-5 text-sky-500" />;
    case 'Shield':
      return <Shield className="w-5 h-5 text-emerald-600" />;
    case 'Heart':
      return <Heart className="w-5 h-5 text-pink-500" />;
    default:
      return <Sparkles className="w-5 h-5 text-rose-500" />;
  }
};

export const SkinConcernsSection: React.FC<SkinConcernsSectionProps> = ({ onSelectConcern }) => {
  const [activeEducationModal, setActiveEducationModal] = useState<SkinConcernItem | null>(null);

  return (
    <section id="concerns" className="py-16 lg:py-24 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-rose-100">
          <div>
            <div className="text-xs font-semibold text-rose-600 tracking-wider uppercase mb-2">
              Targeted Dermatological Solutions
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              Shop by Cutaneous Skin Concern
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-slate-600 max-w-md">
            Every skin concern has distinct biological triggers. Select your primary condition to explore clinically aligned actives and tailored formulations.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKIN_CONCERNS.map((concern) => (
            <div
              key={concern.id}
              className="bg-white rounded-2xl p-6 border border-rose-100/80 luxury-card flex flex-col justify-between group hover:border-rose-300 transition-all relative overflow-hidden"
            >
              {/* Subtle card backdrop highlight on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose-50/70 to-transparent rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100 opacity-60" />

              <div>
                {/* Header row: Icon & Tagline */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center border border-rose-100">
                    {getConcernIcon(concern.iconName)}
                  </div>
                  <button
                    onClick={() => setActiveEducationModal(concern)}
                    className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 font-medium cursor-pointer transition-colors"
                    title="Read clinical guide"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Derm Guide</span>
                  </button>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors mb-1">
                  {concern.title}
                </h3>
                <div className="text-xs text-rose-700 font-medium mb-3">
                  {concern.tagline}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {concern.description}
                </p>

                {/* Zero-Pill Key Actives */}
                <div className="pt-3 border-t border-rose-50">
                  <span className="text-[11px] text-slate-400 font-medium uppercase tracking-wider block mb-1">
                    Key Clinical Actives:
                  </span>
                  <div className="text-xs text-slate-700 flex flex-wrap items-center gap-1 font-medium">
                    {concern.keyActives.map((active, idx) => (
                      <React.Fragment key={active}>
                        <span>{active}</span>
                        {idx < concern.keyActives.length - 1 && (
                          <span aria-hidden="true" className="text-rose-300">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action: Filter Products */}
              <div className="mt-6 pt-4 border-t border-rose-100/60 flex items-center justify-between">
                <button
                  onClick={() => onSelectConcern(concern.id)}
                  className="text-xs font-semibold text-slate-900 group-hover:text-rose-600 flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>Explore Formulations</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
                <span className="text-[11px] text-slate-400">
                  {concern.recommendedProductIds.length} Targeted Regimens
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Educational Clinical Modal */}
      {activeEducationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-rose-100 shadow-2xl relative animate-in zoom-in-95">
            <button
              onClick={() => setActiveEducationModal(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1 rounded-full cursor-pointer"
              aria-label="Close educational guide"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center border border-rose-100">
                {getConcernIcon(activeEducationModal.iconName)}
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  {activeEducationModal.title}
                </h3>
                <span className="text-xs text-rose-600 font-medium">Dermatologist Clinical Brief</span>
              </div>
            </div>

            <div className="space-y-4 my-6">
              <div className="p-4 bg-rose-50/60 rounded-2xl border border-rose-100">
                <div className="text-xs font-semibold text-rose-900 mb-1 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                  <span>Dermatologist Insight</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{activeEducationModal.dermatologistInsight}"
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Cutaneous Pathophysiology
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeEducationModal.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Recommended First-Line Actives
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeEducationModal.keyActives.map((act) => (
                    <span key={act} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md font-medium">
                      {act}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  const id = activeEducationModal.id;
                  setActiveEducationModal(null);
                  onSelectConcern(id);
                }}
                className="flex-1 py-3 text-center text-sm font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-xl transition-colors cursor-pointer"
              >
                View Recommended Products
              </button>
              <button
                onClick={() => setActiveEducationModal(null)}
                className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
