import React, { useState } from 'react';
import { Product } from '../types';
import { X, Sparkles, Check, ArrowRight, ArrowLeft, AlertCircle, ShoppingBag } from 'lucide-react';

interface SkinQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onAddMultipleToCart: (products: Product[]) => void;
}

export const SkinQuizModal: React.FC<SkinQuizModalProps> = ({
  isOpen,
  onClose,
  products,
  onAddMultipleToCart
}) => {
  const [step, setStep] = useState(1);
  const [skinType, setSkinType] = useState<string>('');
  const [primaryConcern, setPrimaryConcern] = useState<string>('');
  const [sunExposure, setSunExposure] = useState<string>('');
  const [skincareGoal, setSkincareGoal] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [routineAdded, setRoutineAdded] = useState(false);

  if (!isOpen) return null;

  const skinTypeOptions = [
    { id: 'dry', label: 'Dry & Tight', desc: 'Lacks natural oil, feels rough or flaky after cleansing' },
    { id: 'oily', label: 'Oily & Shiny', desc: 'Excess sebum, visible enlarged pores, midday shine' },
    { id: 'combination', label: 'Combination', desc: 'Oily T-zone (forehead, nose, chin) with dry or normal cheeks' },
    { id: 'sensitive', label: 'Sensitive & Reactive', desc: 'Easily turns red, stings with new products, micro-irritation' },
    { id: 'normal', label: 'Balanced / Normal', desc: 'Comfortable balance, neither overly dry nor oily' }
  ];

  const concernOptions = [
    { id: 'acne', label: 'Acne & Active Blemishes', desc: 'Congestion, whiteheads, blackheads, hormonal papules' },
    { id: 'pigmentation', label: 'Hyperpigmentation & Melasma', desc: 'Uneven skin tone, sun damage spots, post-acne marks' },
    { id: 'dryness', label: 'Severe Dehydration & Barrier Loss', desc: 'Tightness, irritation, compromised stratum corneum' },
    { id: 'dullness', label: 'Dullness & Lack of Radiance', desc: 'Fatigued appearance, lack of glow, uneven texture' },
    { id: 'oily', label: 'Excess Sebum & Large Pores', desc: 'Frequent pore blockages, midday facial shine' }
  ];

  const exposureOptions = [
    { id: 'low', label: 'Low Daily Sun (Indoors)', desc: 'Mostly inside with occasional ambient window light' },
    { id: 'moderate', label: 'Moderate Sun Exposure', desc: 'Commuting, errands, active lifestyle outdoors' },
    { id: 'high', label: 'High Sun & Screen Exposure', desc: 'Extensive outdoor recreation or prolonged digital blue light' }
  ];

  const goalOptions = [
    { id: 'clear', label: 'Clear, Calmed Pores', desc: 'Eradicate breakouts without damaging skin barrier' },
    { id: 'glow', label: 'Dewy Glass Skin Glow', desc: 'Luminous, lit-from-within radiance with deep hydration' },
    { id: 'repair', label: 'Strong Barrier Reconstruction', desc: 'End chronic irritation, restore resilient lipid seal' },
    { id: 'firm', label: 'Smooth Texture & Cellular Firmness', desc: 'Support natural collagen synthesis and suppleness' }
  ];

  // Select recommended products based on user profile
  const getRecommendedProducts = (): Product[] => {
    let recs: Product[] = [];

    // Cleanse step
    if (primaryConcern === 'acne' || skinType === 'oily') {
      const p = products.find((p) => p.id === 'syh-03');
      if (p) recs.push(p);
    } else {
      const p = products.find((p) => p.id === 'syh-07') || products.find((p) => p.id === 'syh-03');
      if (p) recs.push(p);
    }

    // Treat step
    if (primaryConcern === 'pigmentation') {
      const p = products.find((p) => p.id === 'syh-04');
      if (p) recs.push(p);
    } else if (primaryConcern === 'acne' || skinType === 'oily') {
      const p = products.find((p) => p.id === 'syh-08') || products.find((p) => p.id === 'syh-01');
      if (p) recs.push(p);
    } else {
      const p = products.find((p) => p.id === 'syh-01');
      if (p) recs.push(p);
    }

    // Moisturize step
    if (skinType === 'dry' || primaryConcern === 'dryness' || skincareGoal === 'repair') {
      const p = products.find((p) => p.id === 'syh-02');
      if (p) recs.push(p);
    } else {
      const p = products.find((p) => p.id === 'syh-08') || products.find((p) => p.id === 'syh-02');
      if (p) recs.push(p);
    }

    // Protect step
    const spf = products.find((p) => p.id === 'syh-05');
    if (spf && !recs.some((r) => r.id === spf.id)) {
      recs.push(spf);
    }

    return recs.slice(0, 3);
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleAddAll = () => {
    const recs = getRecommendedProducts();
    onAddMultipleToCart(recs);
    setRoutineAdded(true);
    setTimeout(() => setRoutineAdded(false), 2000);
  };

  const resetQuiz = () => {
    setStep(1);
    setSkinType('');
    setPrimaryConcern('');
    setSunExposure('');
    setSkincareGoal('');
    setIsCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full border border-rose-100 shadow-2xl overflow-hidden relative animate-in zoom-in-95 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-rose-100 flex items-center justify-between bg-gradient-to-r from-rose-50/50 to-white">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-slate-900 block leading-tight">
                Skin Diagnostic Consultation Quiz
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                {isCompleted ? 'Personalized Diagnostic Results' : `Diagnostic Step ${step} of 4`}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close quiz"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Medical Disclaimer Banner */}
        <div className="bg-amber-50/80 px-6 py-2.5 border-b border-amber-200/60 flex items-start gap-2 text-amber-900 text-xs">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-snug">
            <strong>Medical Notice:</strong> This interactive quiz provides cosmetic regimen recommendations based on cutaneous inputs and is <em>not a medical diagnosis</em>. For pathological dermatoses or prescription treatments, consult our board-certified dermatologists.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {!isCompleted ? (
            <div>
              {/* Step 1: Skin Type */}
              {step === 1 && (
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                    How does your bare skin feel mid-day?
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Identify your baseline biological sebum and hydration tendency.
                  </p>
                  <div className="space-y-3">
                    {skinTypeOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSkinType(opt.id)}
                        className={`w-full p-4 text-left rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          skinType === opt.id
                            ? 'border-rose-400 bg-rose-50/70 shadow-xs'
                            : 'border-slate-200 hover:border-rose-200 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{opt.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{opt.desc}</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          skinType === opt.id ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                        }`}>
                          {skinType === opt.id && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Primary Concern */}
              {step === 2 && (
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                    What is your most pressing skin concern?
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    This determines which clinical bio-active will form the core of your regimen.
                  </p>
                  <div className="space-y-3">
                    {concernOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPrimaryConcern(opt.id)}
                        className={`w-full p-4 text-left rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          primaryConcern === opt.id
                            ? 'border-rose-400 bg-rose-50/70 shadow-xs'
                            : 'border-slate-200 hover:border-rose-200 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{opt.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{opt.desc}</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          primaryConcern === opt.id ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                        }`}>
                          {primaryConcern === opt.id && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Sun & Reactivity */}
              {step === 3 && (
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                    What is your daily environmental exposure?
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Ultraviolet and high-energy visible light heavily influence free-radical load and hyperpigmentation relapse.
                  </p>
                  <div className="space-y-3">
                    {exposureOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSunExposure(opt.id)}
                        className={`w-full p-4 text-left rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          sunExposure === opt.id
                            ? 'border-rose-400 bg-rose-50/70 shadow-xs'
                            : 'border-slate-200 hover:border-rose-200 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{opt.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{opt.desc}</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          sunExposure === opt.id ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                        }`}>
                          {sunExposure === opt.id && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Skincare Goal */}
              {step === 4 && (
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                    What is your 60-day skin aspiration?
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    Select the ultimate outcome you want your Syhaas routine to deliver.
                  </p>
                  <div className="space-y-3">
                    {goalOptions.map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSkincareGoal(opt.id)}
                        className={`w-full p-4 text-left rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          skincareGoal === opt.id
                            ? 'border-rose-400 bg-rose-50/70 shadow-xs'
                            : 'border-slate-200 hover:border-rose-200 hover:bg-slate-50'
                        }`}
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{opt.label}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{opt.desc}</div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          skincareGoal === opt.id ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                        }`}>
                          {skincareGoal === opt.id && <Check className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div className="space-y-6">
              <div className="p-4 bg-rose-50/70 rounded-2xl border border-rose-100 flex items-start justify-between">
                <div>
                  <div className="text-xs font-semibold text-rose-800 uppercase tracking-wider mb-1">
                    Your Cutaneous Diagnostic Profile
                  </div>
                  <div className="text-sm font-semibold text-slate-900">
                    <span className="capitalize">{skinType || 'Combination'}</span> Skin with <span className="capitalize">{primaryConcern || 'Radiance'}</span> Focus
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Target: Barrier preservation + high-potency bio-compatible botanicals.
                  </div>
                </div>
                <button
                  onClick={resetQuiz}
                  className="text-xs font-medium text-rose-700 hover:text-rose-900 underline cursor-pointer"
                >
                  Retake Quiz
                </button>
              </div>

              <div>
                <h4 className="font-serif text-xl font-bold text-slate-900 mb-1">
                  Tailored 3-Step Syhaas Regimen
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Dermatologically sequenced to synergize without overloading sensitive skin receptors.
                </p>

                <div className="space-y-3">
                  {getRecommendedProducts().map((prod, idx) => (
                    <div
                      key={prod.id}
                      className="p-3.5 rounded-2xl border border-rose-100 bg-white flex items-center justify-between gap-4 shadow-xs"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold flex items-center justify-center">
                          0{idx + 1}
                        </span>
                        <div className="w-12 h-12 rounded-xl bg-rose-50 overflow-hidden shrink-0 border border-rose-100">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900 line-clamp-1">
                            {prod.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {prod.category.toUpperCase()} · ${prod.price}
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] text-rose-700 font-medium whitespace-nowrap">
                        {idx === 0 ? 'Prep & Cleanse' : idx === 1 ? 'Primary Active' : 'Hydrate & Seal'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Routine CTA */}
              <div className="pt-2">
                <button
                  onClick={handleAddAll}
                  disabled={routineAdded}
                  className={`w-full py-3.5 px-4 text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    routineAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 hover:bg-rose-600 text-white shadow-md'
                  }`}
                >
                  {routineAdded ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Routine Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add Complete 3-Step Routine to Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        {!isCompleted && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={
                (step === 1 && !skinType) ||
                (step === 2 && !primaryConcern) ||
                (step === 3 && !sunExposure) ||
                (step === 4 && !skincareGoal)
              }
              className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 disabled:opacity-40 disabled:cursor-not-allowed rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <span>{step === 4 ? 'See Diagnostic Results' : 'Continue'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
