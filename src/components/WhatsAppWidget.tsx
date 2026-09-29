import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const encoded = encodeURIComponent(
      message.trim() || 'Hello Syhaas Cosmetics! I would like advice on finding the right skincare routine.'
    );
    window.open(`https://wa.me/18005557942?text=${encoded}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white rounded-2xl border border-rose-100 shadow-2xl p-4 animate-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-rose-50 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">
                S
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Syhaas Skin Concierge</div>
                <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Licensed Specialist Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-2.5 bg-rose-50/60 rounded-xl text-xs text-slate-700 mb-3 leading-relaxed">
            👋 Have questions about our active formulations, pregnant-safe routines, or booking a dermatologist? Chat with us instantly on WhatsApp!
          </div>

          <form onSubmit={handleSend} className="space-y-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your skin question..."
              className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Consultation</span>
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp support chat"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center cursor-pointer relative"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center text-[9px] font-bold">
          1
        </span>
      </button>

    </div>
  );
};
