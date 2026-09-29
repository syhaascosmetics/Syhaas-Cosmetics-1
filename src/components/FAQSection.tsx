import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ 'faq-1': true });

  const toggle = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#FFFDFC] border-t border-rose-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-semibold text-rose-600 tracking-wider uppercase mb-2">
            Frequently Asked Clinical Questions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
            Answers From Our Medical Team
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-lg mx-auto">
            Everything you need to know regarding our formulations, telehealth appointments, and clinical return policy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = !!openIds[faq.id];

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-rose-100 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-rose-50/40 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-rose-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-rose-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-rose-50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
