import React, { useState } from 'react';
import { ShoppingBag, Search, User, Menu, X, Calendar, Heart } from 'lucide-react';
import { SyhaasLogo } from './SyhaasLogo';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onOpenQuiz: () => void;
  onOpenBooking: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenAccount,
  onOpenQuiz,
  onOpenBooking,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      {!announcementDismissed && (
        <aside 
          aria-label="Promotional Announcement"
          className="bg-gradient-to-r from-rose-100 via-rose-50 to-pink-100 text-rose-900 text-xs py-2 px-4 border-b border-rose-200/60 transition-all flex items-center justify-between"
        >
          <div className="mx-auto flex items-center gap-2 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
            <span>Free Express Clinical Delivery over $50</span>
            <span aria-hidden="true" className="text-rose-400">·</span>
            <span>15% off first order with code <strong className="font-semibold underline decoration-rose-400">SYHAAS15</strong></span>
          </div>
          <button 
            onClick={() => setAnnouncementDismissed(true)} 
            className="text-rose-500 hover:text-rose-800 p-1 text-xs ml-2 cursor-pointer transition-colors"
            title="Dismiss announcement"
            aria-label="Dismiss announcement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </aside>
      )}

      {/* Main Sticky Header - Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 transition-all shadow-[0_2px_15px_-3px_rgba(244,114,182,0.05)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Zone 1: Syhaas Official Brand Logo */}
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
              className="group flex items-center cursor-pointer transition-transform hover:opacity-95"
              aria-label="Syhaas Cosmetics Home"
            >
              <SyhaasLogo size="md" />
            </a>
          </div>

          {/* Zone 2: 4–6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <button 
              onClick={() => scrollTo('hero')} 
              className={`hover:text-rose-600 transition-colors cursor-pointer py-1 relative ${activeSection === 'hero' ? 'text-rose-600 font-semibold' : ''}`}
            >
              Home
              {activeSection === 'hero' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500 rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('shop')} 
              className={`hover:text-rose-600 transition-colors cursor-pointer py-1 relative ${activeSection === 'shop' ? 'text-rose-600 font-semibold' : ''}`}
            >
              Shop
              {activeSection === 'shop' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500 rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('concerns')} 
              className={`hover:text-rose-600 transition-colors cursor-pointer py-1 relative ${activeSection === 'concerns' ? 'text-rose-600 font-semibold' : ''}`}
            >
              Skin Concerns
              {activeSection === 'concerns' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500 rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('dermatologists')} 
              className={`hover:text-rose-600 transition-colors cursor-pointer py-1 relative ${activeSection === 'dermatologists' ? 'text-rose-600 font-semibold' : ''}`}
            >
              Dermatologists
              {activeSection === 'dermatologists' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose-500 rounded-full" />}
            </button>
            <button 
              onClick={() => scrollTo('reviews')} 
              className={`hover:text-rose-600 transition-colors cursor-pointer py-1 relative ${activeSection === 'reviews' ? 'text-rose-600 font-semibold' : ''}`}
            >
              Reviews
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className={`hover:text-rose-600 transition-colors cursor-pointer py-1 relative ${activeSection === 'about' ? 'text-rose-600 font-semibold' : ''}`}
            >
              About
            </button>
          </nav>

          {/* Zone 3: 1–2 primary actions + functional controls */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              onClick={onOpenSearch} 
              aria-label="Search skincare products"
              className="p-2 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            <button 
              onClick={onOpenAccount} 
              aria-label="User Account"
              className="p-2 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors cursor-pointer"
            >
              <User className="w-5 h-5" />
            </button>

            <button 
              onClick={onOpenCart} 
              aria-label="View Shopping Bag"
              className="relative p-2 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-full transition-colors cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in-50">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => scrollTo('dermatologists')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-rose-700 hover:bg-slate-900 rounded-full transition-all shadow-sm hover:shadow hover:shadow-rose-400/30 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Consultation
            </button>

            {/* Mobile Hamburger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 text-slate-700 hover:text-rose-600 rounded-md cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-rose-100 bg-white/95 backdrop-blur-md px-6 py-5 shadow-lg animate-in slide-in-from-top-4">
            <div className="flex flex-col gap-4 text-base font-medium text-slate-700">
              <button 
                onClick={() => scrollTo('hero')} 
                className="text-left py-2 hover:text-rose-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollTo('shop')} 
                className="text-left py-2 hover:text-rose-600 transition-colors"
              >
                Shop Skincare Collection
              </button>
              <button 
                onClick={() => scrollTo('concerns')} 
                className="text-left py-2 hover:text-rose-600 transition-colors"
              >
                Skin Concerns & Solutions
              </button>
              <button 
                onClick={() => scrollTo('dermatologists')} 
                className="text-left py-2 hover:text-rose-600 transition-colors"
              >
                Meet Board Dermatologists
              </button>
              <button 
                onClick={() => scrollTo('reviews')} 
                className="text-left py-2 hover:text-rose-600 transition-colors"
              >
                Patient & Customer Reviews
              </button>
              <button 
                onClick={() => scrollTo('about')} 
                className="text-left py-2 hover:text-rose-600 transition-colors"
              >
                About Our Clinical Standards
              </button>

              <div className="pt-4 border-t border-rose-100 flex flex-col gap-3">
                <button
                  onClick={() => { setMobileMenuOpen(false); scrollTo('dermatologists'); }}
                  className="w-full py-3 text-center text-sm font-semibold text-white bg-rose-700 hover:bg-slate-900 rounded-xl shadow-md transition-colors"
                >
                  Book Dermatologist Consultation
                </button>
                <button
                  onClick={() => { setMobileMenuOpen(false); scrollTo('shop'); }}
                  className="w-full py-2.5 text-center text-sm font-semibold text-slate-800 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

