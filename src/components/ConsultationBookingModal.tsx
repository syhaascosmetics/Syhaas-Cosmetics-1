import React, { useState } from 'react';
import { Dermatologist } from '../types';
import { X, Calendar, Clock, Video, Building2, CheckCircle2, ShieldCheck, User } from 'lucide-react';

interface ConsultationBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  dermatologists: Dermatologist[];
  initialDoctorId?: string | null;
}

export const ConsultationBookingModal: React.FC<ConsultationBookingModalProps> = ({
  isOpen,
  onClose,
  dermatologists,
  initialDoctorId
}) => {
  const [selectedDoctorId, setSelectedDoctorId] = useState<string>(
    initialDoctorId || (dermatologists[0]?.id || '')
  );
  const [consultMode, setConsultMode] = useState<'online' | 'clinic'>('online');
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [concern, setConcern] = useState('Acne & Active Breakouts');
  const [preferredDate, setPreferredDate] = useState('2026-10-05');
  const [preferredTime, setPreferredTime] = useState('10:30 AM');
  const [clinicalNotes, setClinicalNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const currentDoctor = dermatologists.find((d) => d.id === selectedDoctorId) || dermatologists[0];
  const fee = consultMode === 'online' ? currentDoctor?.feeOnline : currentDoctor?.feeClinic;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim() || !email.trim() || !phone.trim()) return;

    const ref = `SYH-CLINIC-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-rose-100 shadow-2xl overflow-hidden relative animate-in zoom-in-95 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-rose-100 flex items-center justify-between bg-gradient-to-r from-rose-50/60 to-white">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-slate-900 block leading-tight">
                Dermatology Consultation Appointment
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                Licensed Board-Certified Dermatology Clinical Services
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Consultation Mode Selection */}
              <div>
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2">
                  Select Consultation Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setConsultMode('online')}
                    className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                      consultMode === 'online'
                        ? 'border-rose-500 bg-rose-50/70 shadow-xs ring-1 ring-rose-400'
                        : 'border-slate-200 hover:border-rose-200 bg-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">Virtual Tele-Derm</div>
                      <div className="text-[11px] text-slate-500">25-min HD Video · ${currentDoctor?.feeOnline}</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setConsultMode('clinic')}
                    className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                      consultMode === 'clinic'
                        ? 'border-rose-500 bg-rose-50/70 shadow-xs ring-1 ring-rose-400'
                        : 'border-slate-200 hover:border-rose-200 bg-white'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">In-Clinic Session</div>
                      <div className="text-[11px] text-slate-500">Physical Exam · ${currentDoctor?.feeClinic}</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Doctor Selector */}
              <div>
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-1">
                  Choose Board-Certified Specialist
                </label>
                <select
                  value={selectedDoctorId}
                  onChange={(e) => setSelectedDoctorId(e.target.value)}
                  className="w-full text-xs p-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                >
                  {dermatologists.map((doc) => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} — {doc.title} ({doc.availableDays})
                    </option>
                  ))}
                </select>
              </div>

              {/* Patient Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Adams"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rachel@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Phone Number (SMS confirmation) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 321-7890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Primary Skin Concern *
                  </label>
                  <select
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  >
                    <option value="Acne & Active Breakouts">Acne & Active Breakouts</option>
                    <option value="Melasma & Hyperpigmentation">Melasma & Hyperpigmentation</option>
                    <option value="Severe Barrier Damage / Redness">Severe Barrier Damage / Redness</option>
                    <option value="Anti-Aging & Cellular Tightness">Anti-Aging & Cellular Tightness</option>
                    <option value="Eczema / Chronic Dermatitis">Eczema / Chronic Dermatitis</option>
                    <option value="General Cosmetic Regimen Design">General Cosmetic Regimen Design</option>
                  </select>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Preferred Slot
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  >
                    <option value="09:30 AM">09:30 AM EST</option>
                    <option value="11:00 AM">11:00 AM EST</option>
                    <option value="02:00 PM">02:00 PM EST</option>
                    <option value="04:30 PM">04:30 PM EST</option>
                    <option value="06:00 PM">06:00 PM EST</option>
                  </select>
                </div>
              </div>

              {/* Clinical Notes */}
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Brief Medical / Cosmetic History (Optional)
                </label>
                <textarea
                  rows={2}
                  value={clinicalNotes}
                  onChange={(e) => setClinicalNotes(e.target.value)}
                  placeholder="Mention previous allergies, active prescriptions (e.g. Tretinoin), or prior clinic procedures..."
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none resize-none"
                />
              </div>

              {/* Fee and Submit */}
              <div className="pt-3 border-t border-rose-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block">
                    Consultation Fee
                  </span>
                  <span className="font-serif text-2xl font-bold text-slate-900 tabular-nums">
                    ${fee}
                  </span>
                  <span className="text-[11px] text-emerald-600 block font-medium">
                    Credit applied to product purchase
                  </span>
                </div>

                <button
                  type="submit"
                  className="py-3 px-6 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-xl transition-colors cursor-pointer shadow-md"
                >
                  Confirm & Reserve Appointment
                </button>
              </div>

            </form>
          ) : (
            /* Success State */
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-serif text-3xl font-bold text-slate-900">
                Consultation Reserved
              </h3>

              <div className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{patientName}</strong>. Your clinical appointment with{' '}
                <strong className="text-slate-900">{currentDoctor?.name}</strong> has been scheduled.
              </div>

              {/* Receipt Summary Card */}
              <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-100 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-mono font-bold text-rose-900">{referenceId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Format:</span>
                  <span className="font-semibold text-slate-800">
                    {consultMode === 'online' ? 'Telehealth Video Conference' : 'In-Clinic Physical Visit'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-semibold text-slate-800">{preferredDate} at {preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient Email:</span>
                  <span className="font-semibold text-slate-800">{email}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-rose-100">
                  <span className="text-slate-500">Consultation Fee:</span>
                  <span className="font-bold text-slate-900">${fee} USD</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
                A calendar invite and pre-consultation skin diary link have been dispatched to your email.
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Close & Return to Store
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
