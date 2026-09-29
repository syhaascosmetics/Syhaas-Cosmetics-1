import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { Star, ShoppingBag, Eye, Plus, Search, Filter, Check, Sparkles } from 'lucide-react';
import { ProductQuickViewModal } from './ProductQuickViewModal';

interface ShopSectionProps {
  products: Product[];
  selectedConcernFilter: string | null;
  onClearConcernFilter: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  onAddNewProduct: (newProd: Product) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  products,
  selectedConcernFilter,
  onClearConcernFilter,
  onAddToCart,
  onAddNewProduct
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);

  // New demo product state for store customization
  const [newTitle, setNewTitle] = useState('');
  const [newPrice, setNewPrice] = useState(38);
  const [newCategory, setNewCategory] = useState<'serums' | 'moisturizers' | 'cleansers' | 'sunscreen' | 'treatments'>('serums');
  const [newConcern, setNewConcern] = useState<'acne' | 'pigmentation' | 'dark-spots' | 'dryness' | 'oily' | 'dullness' | 'all'>('dullness');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'serums', label: 'Serums' },
    { id: 'moisturizers', label: 'Moisturizers' },
    { id: 'cleansers', label: 'Cleansers' },
    { id: 'sunscreen', label: 'Sunscreen' },
    { id: 'treatments', label: 'Treatments' }
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }
      // Concern filter
      if (selectedConcernFilter && selectedConcernFilter !== 'all' && p.concern !== selectedConcernFilter && p.concern !== 'all') {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesSubtitle = p.subtitle.toLowerCase().includes(query);
        const matchesIngredient = p.keyIngredients.some((ing) => ing.toLowerCase().includes(query));
        if (!matchesName && !matchesSubtitle && !matchesIngredient) {
          return false;
        }
      }
      return true;
    });
  }, [products, selectedCategory, selectedConcernFilter, searchQuery]);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product, 1);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newProd: Product = {
      id: `syh-custom-${Date.now()}`,
      name: newTitle.trim(),
      subtitle: 'Clinical Botanical Formulation',
      category: newCategory,
      price: Number(newPrice) || 45,
      rating: 5.0,
      reviewCount: 1,
      image: products[0].image,
      concern: newConcern,
      badge: 'New Release',
      keyIngredients: ['Damask Rose Water', 'Hyaluronic Acid', 'Niacinamide'],
      volume: '50 ml / 1.7 fl oz',
      description: 'Custom dermatologist formulated skincare solution created directly in the catalog.',
      benefits: ['Promotes balanced cellular radiance', 'Dermatologist tested'],
      howToUse: 'Apply twice daily onto clean skin.',
      clinicalResults: '100% skin compatibility reported in dermatological patch test.',
      inStock: true
    };

    onAddNewProduct(newProd);
    setIsAddProductModalOpen(false);
    setNewTitle('');
  };

  return (
    <section id="shop" className="py-16 lg:py-24 bg-[#FFF9F9]/50 border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-rose-200/60">
          <div>
            <div className="text-xs font-semibold text-rose-600 tracking-wider uppercase mb-2">
              Clinical Cosmetic Dispensary
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              Dermatologist-Formulated Skincare
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <button
              onClick={() => setIsAddProductModalOpen(true)}
              className="text-xs font-semibold text-rose-700 bg-white hover:bg-rose-50 border border-rose-200 px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-xs cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Product</span>
            </button>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredProducts.length} formulations
            </span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          
          {/* Functional Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-white/80 border border-rose-100 rounded-xl shadow-xs scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-rose-50/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input & Concern Filter Badge */}
          <div className="flex items-center gap-3">
            {selectedConcernFilter && (
              <div className="flex items-center gap-1.5 bg-rose-100/70 text-rose-900 text-xs px-3 py-2 rounded-lg border border-rose-200">
                <span className="text-slate-500">Concern:</span>
                <span className="font-semibold capitalize">{selectedConcernFilter}</span>
                <button
                  onClick={onClearConcernFilter}
                  className="text-rose-700 hover:text-rose-950 font-bold ml-1 cursor-pointer"
                  title="Clear concern filter"
                >
                  ×
                </button>
              </div>
            )}

            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search active or name..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 text-slate-800 placeholder-slate-400 shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-rose-100 p-8">
            <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-500 mx-auto flex items-center justify-center mb-3">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-slate-900 mb-1">
              No matching formulations found
            </h3>
            <p className="text-xs text-slate-500 mb-4 max-w-sm mx-auto">
              Try adjusting your category filter, clearing your concern filter, or searching for other bio-actives.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                onClearConcernFilter();
                setSearchQuery('');
              }}
              className="text-xs font-semibold text-rose-700 underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => {
              const isAdded = addedIds[product.id];

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-rose-100/80 luxury-card flex flex-col justify-between overflow-hidden group hover:border-rose-300 relative transition-all"
                >
                  {/* Image Container - 65-75% visual dominance */}
                  <div className="relative aspect-[4/3] bg-[#FCF8F9] overflow-hidden flex items-center justify-center p-6 border-b border-rose-50">
                    
                    {/* Subtle text badge */}
                    {product.badge && (
                      <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-wider uppercase text-rose-800 bg-white/95 px-2 py-0.5 rounded shadow-xs border border-rose-200/60 z-10">
                        {product.badge}
                      </span>
                    )}

                    {/* Quick View Button on Hover */}
                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="absolute bottom-3 right-3 bg-white/95 hover:bg-white text-slate-700 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer"
                      title="Quick View"
                      aria-label="Quick View"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 rounded-lg"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>

                  {/* Product Metadata & Actions */}
                  <div className="p-5 flex flex-col flex-1 justify-between">
                    <div>
                      {/* Quiet Category & Volume */}
                      <div className="flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                        <span>{product.category}</span>
                        <span>{product.volume}</span>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-1 mb-1">
                        {product.name}
                      </h3>

                      {/* Subtitle / Key active */}
                      <p className="text-xs text-slate-500 line-clamp-1 mb-3">
                        {product.subtitle}
                      </p>

                      {/* Rating & Star */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-4">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-slate-800">{product.rating}</span>
                        <span className="text-slate-400">({product.reviewCount})</span>
                      </div>
                    </div>

                    {/* Price & Add to Cart row */}
                    <div className="pt-3 border-t border-rose-50 flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="font-serif text-xl font-bold text-slate-900 tabular-nums">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-slate-400 line-through tabular-nums">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={isAdded}
                        className={`px-3.5 py-2 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-all cursor-pointer ${
                          isAdded
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-900 hover:bg-rose-600 text-white shadow-xs'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added</span>
                          </>
                        ) : (
                          <>
                            <ShoppingBag className="w-3.5 h-3.5" />
                            <span>Add</span>
                          </>
                        )}
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <ProductQuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
          onAddToCart={(prod, qty) => onAddToCart(prod, qty)}
        />
      )}

      {/* Add Product Demo Modal */}
      {isAddProductModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-rose-100 shadow-2xl relative animate-in zoom-in-95">
            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
              Add New Skincare Product
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Easily expand the Syhaas catalog. Works seamlessly with WordPress & Elementor custom post types.
            </p>

            <form onSubmit={handleCreateProduct} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Copper Peptide Firming Serum"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Price ($ USD)
                  </label>
                  <input
                    type="number"
                    min="10"
                    max="500"
                    value={newPrice}
                    onChange={(e) => setNewPrice(Number(e.target.value))}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e: any) => setNewCategory(e.target.value)}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none bg-white"
                  >
                    <option value="serums">Serums</option>
                    <option value="moisturizers">Moisturizers</option>
                    <option value="cleansers">Cleansers</option>
                    <option value="sunscreen">Sunscreen</option>
                    <option value="treatments">Treatments</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Target Skin Concern
                </label>
                <select
                  value={newConcern}
                  onChange={(e: any) => setNewConcern(e.target.value)}
                  className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none bg-white"
                >
                  <option value="dullness">Dullness & Radiance</option>
                  <option value="acne">Acne & Congestion</option>
                  <option value="pigmentation">Hyperpigmentation</option>
                  <option value="dark-spots">Dark Spots & Melasma</option>
                  <option value="dryness">Dryness & Barrier</option>
                  <option value="oily">Oily & Enlarged Pores</option>
                </select>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-xl transition-colors cursor-pointer"
                >
                  Save Product to Catalog
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddProductModalOpen(false)}
                  className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
