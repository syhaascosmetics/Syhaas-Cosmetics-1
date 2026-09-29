import React, { useState, useEffect } from 'react';
import { SAMPLE_PRODUCTS, DERMATOLOGISTS } from './data/mockData';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SkinConcernsSection } from './components/SkinConcernsSection';
import { ShopSection } from './components/ShopSection';
import { SkinQuizModal } from './components/SkinQuizModal';
import { DermatologistsSection } from './components/DermatologistsSection';
import { ConsultationBookingModal } from './components/ConsultationBookingModal';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { BrandStorySection } from './components/BrandStorySection';
import { FAQSection } from './components/FAQSection';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { PolicyModal } from './components/PolicyModal';
import { Footer } from './components/Footer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';

export default function App() {
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS);
  const [cart, setCart] = useState<CartItem[]>(() => {
    // Initial sample cart item for immediate tactile feedback
    return [{ product: SAMPLE_PRODUCTS[0], quantity: 1 }];
  });

  // Navigation & Scroll
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedConcernFilter, setSelectedConcernFilter] = useState<string | null>(null);

  // Modals state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDoctorForBooking, setSelectedDoctorForBooking] = useState<string | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [policyType, setPolicyType] = useState<'privacy' | 'refund' | 'terms' | 'contact' | null>(null);

  // Checkout modal state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutData, setCheckoutData] = useState({ subtotal: 0, discount: 0, shipping: 0, total: 0 });

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'shop', 'concerns', 'dermatologists', 'reviews', 'about', 'faq'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart operations
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleAddMultipleToCart = (prods: Product[]) => {
    setCart((prev) => {
      let updated = [...prev];
      for (const p of prods) {
        const existing = updated.find((item) => item.product.id === p.id);
        if (existing) {
          updated = updated.map((item) =>
            item.product.id === p.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          updated.push({ product: p, quantity: 1 });
        }
      }
      return updated;
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleProceedToCheckout = (subtotal: number, discount: number, shipping: number, total: number) => {
    setCheckoutData({ subtotal, discount, shipping, total });
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  // When clicking on a skin concern card, filter shop & scroll down smoothly
  const handleSelectConcern = (concernId: string) => {
    setSelectedConcernFilter(concernId);
    scrollToSection('shop');
  };

  // Add new product into list dynamically
  const handleAddNewProduct = (newProd: Product) => {
    setProducts((prev) => [newProd, ...prev]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-slate-800 flex flex-col font-sans">
      
      {/* Sticky Top Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenBooking={() => scrollToSection('dermatologists')}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onShopClick={() => scrollToSection('shop')}
          onBookClick={() => scrollToSection('dermatologists')}
          onQuizClick={() => setIsQuizOpen(true)}
        />

        {/* Skin Concerns Section */}
        <SkinConcernsSection onSelectConcern={handleSelectConcern} />

        {/* Dynamic Shop Section */}
        <ShopSection
          products={products}
          selectedConcernFilter={selectedConcernFilter}
          onClearConcernFilter={() => setSelectedConcernFilter(null)}
          onAddToCart={handleAddToCart}
          onAddNewProduct={handleAddNewProduct}
        />

        {/* Board-Certified Dermatologists Section with WhatsApp Support */}
        <DermatologistsSection />

        {/* Verified Customer Reviews */}
        <CustomerReviewsSection />

        {/* Brand Philosophy & Story */}
        <BrandStorySection />

        {/* Clinical FAQs */}
        <FAQSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onOpenPolicy={(type) => setPolicyType(type)}
      />

      {/* Modals & Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        subtotal={checkoutData.subtotal}
        discount={checkoutData.discount}
        shipping={checkoutData.shipping}
        total={checkoutData.total}
        onOrderSuccess={handleOrderSuccess}
      />

      <SkinQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        products={products}
        onAddMultipleToCart={handleAddMultipleToCart}
      />

      <ConsultationBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        dermatologists={DERMATOLOGISTS}
        initialDoctorId={selectedDoctorForBooking}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onSelectProduct={(prod) => setQuickViewProduct(prod)}
      />

      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        onBookConsultation={() => {
          setSelectedDoctorForBooking(null);
          setIsBookingOpen(true);
        }}
      />

      {quickViewProduct && (
        <ProductQuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={(prod, qty) => handleAddToCart(prod, qty)}
        />
      )}

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />

      {/* Floating WhatsApp Support Widget */}
      <WhatsAppWidget />

    </div>
  );
}
