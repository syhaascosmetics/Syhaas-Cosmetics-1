import React, { useState } from 'react';
import { X, User, Calendar, Package, LogOut, CheckCircle2, ShieldCheck } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'appointments'>('profile');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full border border-rose-100 shadow-2xl overflow-hidden relative animate-in zoom-in-95 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="px-6 py-4 border-b border-rose-100 flex items-center justify-between bg-gradient-to-r from-rose-50/60 to-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-slate-900 block leading-tight">
                {isLoggedIn ? 'Patient Account Portal' : 'Sign In to Syhaas'}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {isLoggedIn ? 'syhaascosmetics@gmail.com' : 'Access orders & dermatology records'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isLoggedIn ? (
          <div>
            {/* Nav Tabs */}
            <div className="flex border-b border-rose-100 bg-[#FFFDFC] px-6 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('profile')}
                className={`py-3 mr-6 border-b-2 cursor-pointer transition-colors ${
                  activeTab === 'profile'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Profile & Skin Type
              </button>
              <button
                onClick={() => setActiveTab('orders')}
                className={`py-3 mr-6 border-b-2 cursor-pointer transition-colors ${
                  activeTab === 'orders'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Orders (1)
              </button>
              <button
                onClick={() => setActiveTab('appointments')}
                className={`py-3 border-b-2 cursor-pointer transition-colors ${
                  activeTab === 'appointments'
                    ? 'border-rose-600 text-rose-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Consultations (1)
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-xs">
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <div className="p-4 bg-rose-50/50 rounded-2xl border border-rose-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-rose-200 text-rose-800 font-serif font-bold text-lg flex items-center justify-center">
                        SC
                      </div>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Syhaas Member</div>
                        <div className="text-slate-500 text-[11px]">syhaascosmetics@gmail.com</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-slate-400 font-semibold uppercase tracking-wider text-[10px] block">
                      Cutaneous Profile
                    </span>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                      <span className="text-slate-600">Assessed Skin Type:</span>
                      <strong className="text-slate-800 font-semibold">Combination / Reactive</strong>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                      <span className="text-slate-600">Primary Goal:</span>
                      <strong className="text-slate-800 font-semibold">Barrier Repair & Glass Glow</strong>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 flex justify-between items-center">
                      <span className="text-slate-600">Assigned Dermatologist:</span>
                      <strong className="text-slate-800 font-semibold">Dr. Sarah Vance, MD</strong>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsLoggedIn(false)}
                      className="text-rose-600 hover:text-rose-800 flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-2xl border border-rose-100 shadow-2xs space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-slate-900">Order #SYH-948102</div>
                        <div className="text-[11px] text-slate-400">Placed March 28, 2026</div>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        In Transit
                      </span>
                    </div>
                    <p className="text-slate-600">
                      1x Rose Glow Radiance Peptide Serum, 1x Ceramide Barrier Velvet Cream
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex justify-between font-semibold">
                      <span className="text-slate-500">Total:</span>
                      <span className="text-slate-900 tabular-nums">$100.00 USD</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appointments' && (
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-2xl border border-rose-100 shadow-2xs space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-slate-900">Virtual Tele-Derm Session</div>
                        <div className="text-[11px] text-slate-500">With Dr. Sarah Vance, MD, FAAD</div>
                      </div>
                      <span className="text-[10px] font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                        Confirmed
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700">
                      <Calendar className="w-3.5 h-3.5 text-rose-500" />
                      <span>Monday, Oct 05, 2026 at 10:30 AM EST</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      HD Video link dispatched to patient email.
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onClose();
                      onBookConsultation();
                    }}
                    className="w-full py-2.5 text-center font-semibold text-slate-800 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors cursor-pointer"
                  >
                    Schedule Another Consultation
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Sign In Form */
          <div className="p-6 space-y-4">
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="syhaascosmetics@gmail.com"
                className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">
                Password
              </label>
              <input
                type="password"
                defaultValue="••••••••••••"
                className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
              />
            </div>
            <button
              onClick={() => setIsLoggedIn(true)}
              className="w-full py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-xl transition-colors cursor-pointer"
            >
              Sign In to Patient Portal
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
