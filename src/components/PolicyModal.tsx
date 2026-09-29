import React from 'react';
import { X, ShieldCheck, RefreshCw, FileText, Mail, Phone, MapPin } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'refund' | 'terms' | 'contact' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-rose-100 shadow-2xl overflow-hidden relative animate-in zoom-in-95 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-rose-100 flex items-center justify-between bg-[#FFFDFC]">
          <div className="flex items-center gap-2">
            {type === 'privacy' && <ShieldCheck className="w-5 h-5 text-rose-600" />}
            {type === 'refund' && <RefreshCw className="w-5 h-5 text-rose-600" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-rose-600" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-rose-600" />}
            <h3 className="font-serif text-xl font-bold text-slate-900">
              {type === 'privacy' && 'Syhaas Privacy & Medical Confidentiality Policy'}
              {type === 'refund' && '30-Day Clinical Satisfaction & Refund Guarantee'}
              {type === 'terms' && 'Syhaas Cosmetics Terms of Service'}
              {type === 'contact' && 'Contact Syhaas Clinical Headquarters'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-xs text-slate-600 leading-relaxed space-y-4">
          {type === 'refund' && (
            <>
              <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-2xl text-emerald-950 font-medium">
                We believe in the clinical efficacy of our formulations. If you are not thoroughly satisfied with your skin's transformation after 30 days of consistent use, we provide a full refund of your purchase price.
              </div>
              <h4 className="font-bold text-slate-900 text-sm">1. 30-Day Money-Back Guarantee</h4>
              <p>
                Our 30-day guarantee applies to all full-sized Syhaas Cosmetics bottles. You may return the container (even if empty or used) within 30 days of delivery.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Free Return Shipping</h4>
              <p>
                To initiate a return, contact our concierge at <strong className="text-slate-800">syhaascosmetics@gmail.com</strong> with your order number. We will issue a pre-paid printable clinical shipping label.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Consultation Cancellation & Rescheduling</h4>
              <p>
                Tele-dermatology and clinic appointments can be rescheduled or cancelled with full refund up to 24 hours prior to the scheduled consultation window.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                Syhaas Cosmetics is committed to the highest data protection and medical confidentiality standards under HIPAA and GDPR privacy frameworks.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Health Information & Skin Imagery</h4>
              <p>
                Any diagnostic quiz responses, skin photographs, or consultation history uploaded to our portal are encrypted with AES-256 standard and accessible strictly by your designated licensed dermatologist.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Zero Data Selling</h4>
              <p>
                We never monetize, rent, or sell your health data or customer contact records to third-party ad networks or brokers.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <h4 className="font-bold text-slate-900 text-sm">1. Cosmetic Product Use</h4>
              <p>
                All Syhaas Cosmetics products are intended for external topical use. Patch test new active compounds (such as retinoids and BHA acids) before full facial application.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Telehealth & Medical Disclaimer</h4>
              <p>
                Online consultations connect users with licensed dermatologists. The general educational content and automated Skin Quiz on this platform are for cosmetic informational purposes only and do not replace formal clinical emergency diagnosis.
              </p>
            </>
          )}

          {type === 'contact' && (
            <div className="space-y-4">
              <p>
                Our clinical support team and licensed cosmetic specialists are available Monday through Saturday to answer questions regarding your skincare regimen.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-rose-600" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Customer & Patient Email:</span>
                    <strong className="text-slate-800 font-semibold">syhaascosmetics@gmail.com</strong>
                  </div>
                </div>

                <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-rose-600" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Toll-Free Patient Concierge:</span>
                    <strong className="text-slate-800 font-semibold">+1 (800) 555-SYHAAS (7942)</strong>
                  </div>
                </div>

                <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Clinical Formulation Lab:</span>
                    <strong className="text-slate-800 font-semibold">Syhaas Clinical Aesthetics, 450 Rodeo Drive, Beverly Hills, CA 90210</strong>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
