import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenQuiz: () => void;
  onOpenPolicy: (type: 'privacy' | 'refund' | 'terms' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuiz,
  onOpenPolicy
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      // keep it subscribed
    }, 1000);
  };

  return (
    <footer className="bg-[#1C1618] text-rose-50/80 pt-16 pb-12 border-t border-rose-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="pb-12 mb-12 border-b border-rose-900/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 block mb-2">
              The Syhaas Dermatology Journal & Club
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Unlock 15% Off Your First Clinical Regimen
            </h3>
            <p className="text-xs sm:text-sm text-rose-200/70 mt-1 max-w-md">
              Receive physician-curated skin protocols, ingredient breakdowns, and private access to new limited-run batches.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-4 bg-rose-950/60 border border-rose-800 rounded-2xl flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-rose-400 shrink-0" />
                <div className="text-xs text-white">
                  <strong>Welcome to Syhaas!</strong> Use code <span className="font-mono font-bold text-rose-300 underline">SYHAAS15</span> at checkout for 15% off.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 px-4 py-3 text-xs bg-rose-950/40 border border-rose-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 text-white placeholder-rose-300/40"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-xs font-semibold text-slate-900 bg-rose-200 hover:bg-white rounded-xl transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <span className="text-[10px] text-rose-300/50 block mt-2">
              We respect your privacy. Zero spam. Unsubscribe at any time.
            </span>
          </div>
        </div>

        {/* 4-Column Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-rose-900/40">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-500 to-pink-300 flex items-center justify-center text-slate-950 font-serif font-bold text-base">
                S
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Syhaas Cosmetics
              </span>
            </div>

            <p className="text-xs text-rose-200/70 leading-relaxed max-w-sm">
              Luxury skincare and clinical dermatology unified. Formulated at physiological pH using bio-compatible Damask Rose hydrosol, lipid ceramides, and targeted actives.
            </p>

            <div className="text-xs text-rose-300/80 space-y-1">
              <div>Customer Support: <strong className="text-white">syhaascosmetics@gmail.com</strong></div>
              <div>Direct Phone: <strong className="text-white">+1 (800) 555-7942</strong></div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              Store & Formulations
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('shop')} className="hover:text-white transition-colors cursor-pointer">
                  All Skincare Products
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('concerns')} className="hover:text-white transition-colors cursor-pointer">
                  Shop by Skin Concern
                </button>
              </li>
              <li>
                <button onClick={onOpenQuiz} className="hover:text-white transition-colors cursor-pointer text-rose-300 font-semibold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Skin Diagnostic Quiz</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('reviews')} className="hover:text-white transition-colors cursor-pointer">
                  Patient Reviews & Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Dermatology Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              Clinical Telehealth
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('dermatologists')} className="hover:text-white transition-colors cursor-pointer">
                  Meet Board Dermatologists
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dermatologists')} className="hover:text-white transition-colors cursor-pointer">
                  Virtual HD Tele-Derm ($40-$50)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dermatologists')} className="hover:text-white transition-colors cursor-pointer">
                  In-Clinic Appointments
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  Our Formulation Standards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Care */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400">
              Patient Care
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenPolicy('refund')} className="hover:text-white transition-colors cursor-pointer">
                  Refund & Guarantee Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('privacy')} className="hover:text-white transition-colors cursor-pointer">
                  Privacy & Data Security
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('terms')} className="hover:text-white transition-colors cursor-pointer">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Regulatory Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-rose-300/50 space-y-3">
          <p className="leading-relaxed text-[11px]">
            <strong>Clinical Disclaimer:</strong> Formulations and descriptions on syhaas.com are intended for cosmetic beautification, skin hydration, and aesthetic cutaneous support. Automated quiz results provide customized cosmetic product sequencing and do not replace personalized in-person medical evaluation by a licensed physician.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-[11px] border-t border-rose-950">
            <div>
              © {new Date().getFullYear()} Syhaas Cosmetics LLC. All rights reserved. Designed for luxury retail & WordPress/Elementor compatibility.
            </div>
            <div className="flex items-center gap-4 text-rose-400">
              <span>Cruelty-Free International</span>
              <span>·</span>
              <span>Hypoallergenic Tested</span>
              <span>·</span>
              <span>Made with Recyclable Glass</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
