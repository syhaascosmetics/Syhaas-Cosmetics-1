import React, { useState } from 'react';
import { DERMATOLOGISTS } from '../data/mockData';
import { Dermatologist } from '../types';
import { Star, Video, Building2, Calendar, ShieldCheck, MessageCircle, Send, Clock, CheckCircle2 } from 'lucide-react';
import { ConsultationBookingModal } from './ConsultationBookingModal';

interface DermatologistsSectionProps {
  onOpenBookingWithDoctor?: (doctorId: string) => void;
}

export const DermatologistsSection: React.FC<DermatologistsSectionProps> = () => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookDoctor = (doctorId: string) => {
    setSelectedDoctorId(doctorId);
    setIsBookingModalOpen(true);
  };

  const handleWhatsAppConsult = (doctorName?: string) => {
    const text = doctorName
      ? `Hello Syhaas Cosmetics! I would like to consult with ${doctorName} regarding my skin concern and recommended regimen.`
      : `Hello Syhaas Cosmetics! I would like a direct dermatologist consultation on WhatsApp.`;
    window.open(`https://wa.me/18005557942?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="dermatologists" className="py-16 lg:py-24 bg-[#FFFDFC] border-t border-rose-100/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-rose-100">
          <div>
            <div className="text-xs font-semibold text-rose-600 tracking-wider uppercase mb-2">
              Board-Certified Clinical Faculty
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              Consult With Our Dermatologists
            </h2>
          </div>
          
          {/* Header WhatsApp Instant Trigger */}
          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleWhatsAppConsult()}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow-md hover:shadow-emerald-500/20 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Derm Chat</span>
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            </button>
          </div>
        </div>

        {/* WhatsApp Fast Support Notice Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50/40 to-rose-50/50 border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                <span>Instant Dermatology Advice on WhatsApp</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                  Avg. Reply: 5 Mins
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-0.5">
                Have questions about acne, pigment marks, or which serum to start with? Text our licensed clinical team now.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleWhatsAppConsult()}
            className="px-4 py-2.5 text-xs font-semibold text-emerald-950 bg-white hover:bg-emerald-100/60 border border-emerald-300 rounded-xl transition-colors shrink-0 flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
          >
            <Send className="w-3.5 h-3.5 text-emerald-600" />
            <span>Open WhatsApp Chat</span>
          </button>
        </div>

        {/* Dermatologists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DERMATOLOGISTS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl border border-rose-100/80 luxury-card p-6 flex flex-col justify-between group hover:border-rose-300 transition-all"
            >
              <div>
                {/* Doctor Portrait Header */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-rose-50 mb-5 border border-rose-100/80">
                  <img
                    src={doc.avatar}
                    alt={doc.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-800 border border-rose-100 shadow-xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Board Certified</span>
                  </div>

                  {/* Online on WhatsApp badge */}
                  <div className="absolute top-3 right-3 bg-emerald-600 text-white px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>WhatsApp Available</span>
                  </div>
                </div>

                {/* Rating & Experience */}
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <div className="flex items-center text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  </div>
                  <span className="font-semibold text-slate-800">{doc.rating}</span>
                  <span aria-hidden="true" className="text-rose-300">·</span>
                  <span>{doc.experienceYears} Years Practice</span>
                  <span aria-hidden="true" className="text-rose-300">·</span>
                  <span>{doc.reviewCount}+ Consults</span>
                </div>

                {/* Doctor Name & Title */}
                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-rose-600 transition-colors mb-1">
                  {doc.name}
                </h3>
                <div className="text-xs text-rose-700 font-medium mb-3">
                  {doc.title}
                </div>

                {/* Academic Credentials (Unboxed) */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {doc.qualifications}
                </p>

                {/* Clinic / Hospital */}
                <div className="text-[11px] text-slate-400 mb-4 flex items-start gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{doc.clinicHospital}</span>
                </div>

                {/* Focus Specialities (Clean unboxed tags) */}
                <div className="pt-3 border-t border-rose-50 mb-5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Clinical Focus:
                  </span>
                  <div className="text-xs text-slate-700 flex flex-wrap gap-1 font-medium">
                    {doc.specialities.map((spec, idx) => (
                      <React.Fragment key={spec}>
                        <span>{spec}</span>
                        {idx < doc.specialities.length - 1 && (
                          <span aria-hidden="true" className="text-rose-300">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Fees row */}
                <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100 mb-5 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Virtual Video:</span>
                    <strong className="text-slate-900 font-bold tabular-nums">${doc.feeOnline}</strong>
                  </div>
                  <div className="h-6 w-px bg-rose-200" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">In-Clinic:</span>
                    <strong className="text-slate-900 font-bold tabular-nums">${doc.feeClinic}</strong>
                  </div>
                  <div className="h-6 w-px bg-rose-200" />
                  <div>
                    <span className="text-slate-500 block text-[11px]">Available:</span>
                    <span className="text-slate-800 font-semibold">{doc.availableDays.split(',')[0]}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Booking + WhatsApp Button */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => handleWhatsAppConsult(doc.name)}
                  className="w-full py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat With {doc.name.split(' ')[1]} on WhatsApp</span>
                </button>

                <button
                  onClick={() => handleBookDoctor(doc.id)}
                  className="w-full py-2.5 text-xs font-semibold text-slate-800 hover:text-white bg-rose-50 hover:bg-slate-900 border border-rose-200 hover:border-slate-900 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Video / In-Clinic Visit</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Booking Modal */}
      <ConsultationBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        dermatologists={DERMATOLOGISTS}
        initialDoctorId={selectedDoctorId}
      />
    </section>
  );
};
