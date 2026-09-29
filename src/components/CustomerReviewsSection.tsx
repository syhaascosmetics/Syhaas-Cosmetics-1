import React, { useState } from 'react';
import { CUSTOMER_REVIEWS } from '../data/mockData';
import { CustomerReview } from '../types';
import { Star, ShieldCheck, CheckCircle2, MessageSquarePlus, X } from 'lucide-react';

export const CustomerReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // New review form state
  const [authorName, setAuthorName] = useState('');
  const [location, setLocation] = useState('');
  const [productName, setProductName] = useState('Rose Glow Radiance Peptide Serum');
  const [concernTreated, setConcernTreated] = useState('Dullness & Dehydration');
  const [userComment, setUserComment] = useState('');
  const [userRating, setUserRating] = useState(5);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !userComment.trim()) return;

    const newRev: CustomerReview = {
      id: `rev-${Date.now()}`,
      author: authorName.trim(),
      age: 29,
      location: location.trim() || 'Verified Customer',
      rating: userRating,
      date: 'Just now',
      productName,
      concernTreated,
      comment: userComment.trim(),
      verifiedPurchase: true,
      timeUsed: 'Used for 4 weeks'
    };

    setReviews([newRev, ...reviews]);
    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setIsModalOpen(false);
      setAuthorName('');
      setUserComment('');
    }, 1800);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-[#FFFDFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-rose-100">
          <div>
            <div className="text-xs font-semibold text-rose-600 tracking-wider uppercase mb-2">
              Clinical Feedback & Patient Experiences
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              Verified Patient & Customer Reviews
            </h2>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <div className="flex items-center gap-2 bg-rose-50 px-3.5 py-2 rounded-xl border border-rose-100 text-xs">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.92 / 5.0</span>
              <span className="text-slate-500">· 2,400+ reviews</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <MessageSquarePlus className="w-3.5 h-3.5" />
              <span>Share Experience</span>
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-rose-100/90 luxury-card flex flex-col justify-between"
            >
              <div>
                {/* Stars and Verified tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {rev.verifiedPurchase && (
                    <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified Patient</span>
                    </span>
                  )}
                </div>

                {/* Review Comment */}
                <p className="text-xs text-slate-700 leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>

                {/* Concern & Product link */}
                <div className="p-2.5 bg-rose-50/50 rounded-xl border border-rose-100 mb-4 text-[11px] text-slate-600">
                  <div className="font-medium text-slate-800 line-clamp-1">{rev.productName}</div>
                  <div className="text-rose-700 font-semibold">{rev.concernTreated}</div>
                </div>
              </div>

              {/* Author & Time used */}
              <div className="pt-3 border-t border-rose-50 flex items-center justify-between text-[11px] text-slate-500">
                <div>
                  <strong className="text-slate-800 font-semibold block">{rev.author}</strong>
                  <span>{rev.location}</span>
                </div>
                <span className="text-slate-400 font-medium">{rev.timeUsed}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/50 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 border border-rose-100 shadow-2xl relative animate-in zoom-in-95">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">
              Submit Your Clinical Review
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Help patients and customers choose evidence-backed formulations.
            </p>

            {submittedFeedback ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <div className="text-sm font-bold text-slate-900">Thank you for your feedback!</div>
                <div className="text-xs text-slate-500">Your verified testimonial has been added to the registry.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Your Name or Initial
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica M."
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      City, State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Boston, MA"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Rating (1 - 5 Stars)
                    </label>
                    <select
                      value={userRating}
                      onChange={(e) => setUserRating(Number(e.target.value))}
                      className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                    >
                      <option value={5}>5 Stars - Outstanding</option>
                      <option value={4}>4 Stars - Very Good</option>
                      <option value={3}>3 Stars - Satisfactory</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Product Used
                  </label>
                  <select
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none"
                  >
                    <option value="Rose Glow Radiance Peptide Serum">Rose Glow Radiance Peptide Serum</option>
                    <option value="Ceramide Barrier Recovery Velvet Cream">Ceramide Barrier Recovery Velvet Cream</option>
                    <option value="Clarifying BHA Pore Refining Cleanser">Clarifying BHA Pore Refining Cleanser</option>
                    <option value="Clinical Brightening Tranexamic Fluid">Clinical Brightening Tranexamic Fluid</option>
                    <option value="Rose Veil Invisible Mineral SPF 50+">Rose Veil Invisible Mineral SPF 50+</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Your Honest Experience
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    placeholder="Describe changes in skin texture, irritation relief, and duration of use..."
                    className="w-full text-xs p-2.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-400 focus:outline-none resize-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-xl transition-colors cursor-pointer"
                  >
                    Publish Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
