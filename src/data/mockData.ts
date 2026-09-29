import { Product, SkinConcernItem, Dermatologist, CustomerReview, FAQ } from '../types';

export const HERO_IMAGE = '/src/assets/images/syhaas_official_hero_banner_1790676266978.jpg';
export const SERUM_IMAGE = '/src/assets/images/product_rose_glow_serum_1790675276233.jpg';
export const BARRIER_CREAM_IMAGE = '/src/assets/images/product_barrier_cream_1790675291512.jpg';
export const DERM_IMAGE = '/src/assets/images/dermatologist_consultation_1790675306160.jpg';

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: 'syh-01',
    name: 'Advanced Brightening Serum',
    subtitle: 'Evens Out Skin Tone · Smooths Fine Lines · Deeply Hydrates',
    category: 'serums',
    price: 48,
    originalPrice: 58,
    rating: 4.95,
    reviewCount: 384,
    image: HERO_IMAGE,
    concern: 'dullness',
    badge: 'Hero Product',
    keyIngredients: ['Damask Rose Distillate', 'Copper Tripeptide-1', 'Niacinamide 5%', 'Hyaluronic Acid'],
    volume: '30 ml / 1.0 fl oz',
    description: 'The signature Syhaas Advanced Brightening Serum. Pure, Natural, and Radiant — clinical strength botanicals that even out uneven skin tone, smooth fine expression lines, and replenish moisture reserves.',
    benefits: [
      'Evens out skin tone and cellular luminosity',
      'Smooths micro-texture and softens fine lines',
      'Provides deep 24-hour non-comedogenic hydration'
    ],
    howToUse: 'Dispense 3–4 drops onto fingertips every morning and evening. Gently press into face, neck, and décolletage.',
    clinicalResults: '98% of subjects reported visibly brighter and smoother skin tone in 14 days.',
    inStock: true
  },
  {
    id: 'syh-02',
    name: 'Advanced Acne & Pore Refining Serum',
    subtitle: 'Fights Acne · Unclogs Pores · Controls Oil',
    category: 'treatments',
    price: 45,
    originalPrice: 54,
    rating: 4.9,
    reviewCount: 295,
    image: SERUM_IMAGE,
    concern: 'acne',
    badge: 'Clinical Favorite',
    keyIngredients: ['Salicylic Acid 2% BHA', 'Zinc PCA 1%', 'Niacinamide 4%', 'Centella Asiatica'],
    volume: '30 ml / 1.0 fl oz',
    description: 'Targeted botanical acne fighter. Gently dislodges sebum plugs deep inside congested pore canals, halts inflammatory blemishes, and normalizes midday oil flow without dryness.',
    benefits: [
      'Eliminates active breakouts and blackheads',
      'Deeply clears congested pore linings',
      'Regulates excess surface sebum all day long'
    ],
    howToUse: 'Apply 3 drops across clean, dry skin focusing on the T-zone and breakout-prone areas. Use AM and PM.',
    clinicalResults: '91% observed reduced inflammatory lesions and unclogged pores within 14 days.',
    inStock: true
  },
  {
    id: 'syh-03',
    name: 'Anti-Melanin Pigmentation Reducing Serum',
    subtitle: 'Reduces Melanin · Fades Dark Spots · Soothes Eczema & Sensitive Skin',
    category: 'treatments',
    price: 52,
    originalPrice: 62,
    rating: 4.92,
    reviewCount: 341,
    image: HERO_IMAGE,
    concern: 'dark-spots',
    badge: 'Best Seller',
    keyIngredients: ['Tranexamic Acid 3%', 'Azelaic Acid 10%', 'Alpha Arbutin', 'Allantoin'],
    volume: '30 ml / 1.0 fl oz',
    description: 'High-efficacy pigmentation corrector. Intercepts melanin overproduction pathways to fade stubborn melasma and sun spots, while delivering calming relief to eczema and reactive skin.',
    benefits: [
      'Significantly suppresses cutaneous melanin production',
      'Fades dark spots, sun damage, and post-acne marks',
      'Soothes sensitive, eczema-prone skin barriers'
    ],
    howToUse: 'Smooth 2–3 drops onto affected pigmentation zones every morning and night under moisturizer and SPF 50.',
    clinicalResults: '78% reduction in melanin concentration verified via clinical dermatological grading at week 6.',
    inStock: true
  },
  {
    id: 'syh-04',
    name: 'Clinical Brightening Tranexamic & Azelaic Fluid',
    subtitle: '3% Tranexamic Acid + 10% Azelaic Acid + Alpha Arbutin',
    category: 'treatments',
    price: 56,
    originalPrice: 65,
    rating: 4.88,
    reviewCount: 189,
    image: SERUM_IMAGE,
    concern: 'dark-spots',
    badge: 'High Efficacy',
    keyIngredients: ['Tranexamic Acid 3%', 'Azelaic Acid 10%', 'Alpha Arbutin 2%', 'Licorice Root Extract'],
    volume: '30 ml / 1.0 fl oz',
    description: 'Targeted spot corrector that intercepts melanin synthesis pathways, fading post-acne erythema, stubborn sun spots, and melasma patches.',
    benefits: [
      'Significantly fades stubborn hyperpigmentation marks',
      'Calms vascular redness and evening tone discrepancies',
      'Gentle enough for daily preventative maintenance'
    ],
    howToUse: 'Apply 2 pumps evenly over affected areas or the full face in the evening. Always follow with broad spectrum SPF 50 during daytime.',
    clinicalResults: '74% reduction in melanin pigment intensity recorded via spectrophotometry after 6 weeks.',
    inStock: true
  },
  {
    id: 'syh-05',
    name: 'Rose Veil Invisible Mineral SPF 50+ PA++++',
    subtitle: '18% Non-Nano Zinc Oxide + Rose Hip Oil + Ectoin',
    category: 'sunscreen',
    price: 42,
    rating: 4.92,
    reviewCount: 310,
    image: BARRIER_CREAM_IMAGE,
    concern: 'all',
    badge: 'Daily Essential',
    keyIngredients: ['Non-Nano Zinc Oxide 18%', 'Ectoin 1%', 'Rosehip Seed Oil', 'Vitamin E'],
    volume: '50 ml / 1.7 fl oz',
    description: 'A sheer, 100% mineral daily photoprotector that melts seamlessly into all skin tones with zero white cast, delivering satin dewy protection.',
    benefits: [
      'Full broad-spectrum UVA/UVB and HEV blue-light shielding',
      'Zero white cast, non-sticky and silky under makeup',
      'Infused with antioxidant Ectoin to protect from pollution'
    ],
    howToUse: 'Apply two finger-lengths generously to face, ears, and neck 15 minutes before sun exposure. Reapply every 2 hours or after towel drying.',
    clinicalResults: '100% agreed it leaves no chalky residue and layers seamlessly under cosmetic makeup.',
    inStock: true
  },
  {
    id: 'syh-06',
    name: 'Overnight Cellular Retinoid Complex 0.5%',
    subtitle: 'Encapsulated Retinaldehyde + Rose Petal Lipids',
    category: 'treatments',
    price: 64,
    originalPrice: 75,
    rating: 4.87,
    reviewCount: 167,
    image: SERUM_IMAGE,
    concern: 'pigmentation',
    badge: 'Advanced Active',
    keyIngredients: ['Encapsulated Retinal 0.5%', 'Bisabolol', 'Rose Stem Cell Extract', 'Ceramide complex'],
    volume: '30 ml / 1.0 fl oz',
    description: 'Micro-encapsulated next-generation retinoid designed for optimal collagen turnover with minimal epidermal irritation and zero flaking.',
    benefits: [
      'Accelerates skin cell regeneration up to 11x faster than retinol',
      'Softens expression lines and improves structural elasticity',
      'Timed-release capsule technology protects barrier tolerance'
    ],
    howToUse: 'Start 2 evenings per week on clean, dry skin. Increase to nightly as skin acclimates. Always pair with SPF 50 the following morning.',
    clinicalResults: '91% noticed refined texture and diminished fine lines after 8 weeks of clinical evaluation.',
    inStock: true
  },
  {
    id: 'syh-07',
    name: 'Gentle Rose Petal Hydrating Essence',
    subtitle: 'Fermented Galactomyces + Rosa Damascena Hydrosol',
    category: 'cleansers',
    price: 38,
    rating: 4.79,
    reviewCount: 142,
    image: BARRIER_CREAM_IMAGE,
    concern: 'dryness',
    badge: 'Microbiome Friendly',
    keyIngredients: ['Organic Rose Water 65%', 'Galactomyces Ferment', 'Panthenol 3%', 'Betaine'],
    volume: '120 ml / 4.0 fl oz',
    description: 'A prep-treatment liquid toner that floods thirsty skin with bio-available electrolytes and fermented botanicals, priming it for maximum serum uptake.',
    benefits: [
      'Restores moisture reservoir instantly post-cleansing',
      'Soothes micro-inflammation and redness immediately',
      'Balances healthy cutaneous microbiome flora'
    ],
    howToUse: 'Pour a small pool into palms and pat gently across face until fully absorbed. Layer 2–3 times for maximum glass skin dewiness.',
    clinicalResults: 'Immediate 142% surge in skin hydration measured 5 minutes post-application.',
    inStock: true
  },
  {
    id: 'syh-08',
    name: 'Balancing Niacinamide & Zinc Matte Emulsion',
    subtitle: '10% Niacinamide + 1% Zinc PCA + Hyaluronic Acid',
    category: 'moisturizers',
    price: 44,
    originalPrice: 50,
    rating: 4.84,
    reviewCount: 226,
    image: SERUM_IMAGE,
    concern: 'oily',
    badge: 'Oil Control',
    keyIngredients: ['Niacinamide 10%', 'Zinc PCA 1%', 'Sodium Hyaluronate', 'Witch Hazel Water'],
    volume: '50 ml / 1.7 fl oz',
    description: 'A featherlight gel-cream moisturizer specifically engineered for combination to oily skin that craves hydration without unwanted mid-day shine.',
    benefits: [
      'Controls excess sebum secretion for up to 12 hours',
      'Visibly tightens enlarged pore margins',
      'Provides weightless, breathable hydration'
    ],
    howToUse: 'Smooth 1–2 pumps over face after cleansing and treatments. Perfect as an ultra-smooth primer before makeup or SPF.',
    clinicalResults: '84% of subjects noted reduced mid-day forehead and nose oiliness after 2 weeks.',
    inStock: true
  }
];

export const SKIN_CONCERNS: SkinConcernItem[] = [
  {
    id: 'acne',
    title: 'Acne & Blemishes',
    tagline: 'Congestion, Papules & Breakouts',
    description: 'Disrupt bacterial overgrowth and unclog congested sebum channels with gentle, non-stripping keratolytics.',
    dermatologistInsight: 'Over-cleansing compromises the lipid barrier, triggering rebound oil production. Focus on lipid-friendly salicylic acid and anti-inflammatory zinc.',
    keyActives: ['Salicylic Acid (BHA)', 'Zinc PCA', 'Niacinamide', 'Centella'],
    productCategory: 'cleansers',
    recommendedProductIds: ['syh-03', 'syh-08'],
    iconName: 'Sparkles'
  },
  {
    id: 'pigmentation',
    title: 'Hyperpigmentation',
    tagline: 'Uneven Melanin & Sun Damage',
    description: 'Target excessive tyrosinase enzyme activity to diminish accumulated UV pigment and encourage even tone distribution.',
    dermatologistInsight: 'Melanocytes respond aggressively to inflammation. Treating pigmentation requires gentle tyrosinase inhibition alongside rigorous daily UV/HEV photoprotection.',
    keyActives: ['Tranexamic Acid', 'Alpha Arbutin', 'Retinoids', 'Vitamin C'],
    productCategory: 'treatments',
    recommendedProductIds: ['syh-04', 'syh-06'],
    iconName: 'Sun'
  },
  {
    id: 'dark-spots',
    title: 'Dark Spots & Melasma',
    tagline: 'Post-Inflammatory Marks & Hormonal Spots',
    description: 'Clinical grade multi-pathway brightening serums that visibly fade deep stubborn discoloration without chemical bleaches.',
    dermatologistInsight: 'Post-inflammatory hyperpigmentation (PIH) requires dual anti-inflammatory and pigment dispersing compounds like Azelaic Acid.',
    keyActives: ['Azelaic Acid 10%', 'Tranexamic Acid', 'Niacinamide', 'Licorice Root'],
    productCategory: 'treatments',
    recommendedProductIds: ['syh-04', 'syh-01'],
    iconName: 'Flame'
  },
  {
    id: 'dryness',
    title: 'Dryness & Dehydration',
    tagline: 'Compromised Barrier & Tightness',
    description: 'Replenish structural ceramides, fatty acids, and hygroscopic humectants to restore bounce and suppleness.',
    dermatologistInsight: 'Dehydrated skin lacks water; dry skin lacks lipids. Our bio-identical 3:1:1 lipid ratio mimics physiological stratum corneum matrices.',
    keyActives: ['Ceramides NP/AP/EOP', 'Hyaluronic Acid Multi-Weight', 'Squalane', 'Panthenol'],
    productCategory: 'moisturizers',
    recommendedProductIds: ['syh-02', 'syh-07'],
    iconName: 'Droplets'
  },
  {
    id: 'oily',
    title: 'Oily Skin & Enlarged Pores',
    tagline: 'Excess Sebum & Dilated Texture',
    description: 'Normalize sebum viscosity and minimize the appearance of enlarged pore walls while preserving hydration.',
    dermatologistInsight: 'Stripping oily skin with harsh alcohol-based astringents damages the microbiome. Balance with gentle niacinamide and Zinc PCA instead.',
    keyActives: ['Zinc PCA', 'Niacinamide 10%', 'Salicylic Acid', 'Green Tea'],
    productCategory: 'moisturizers',
    recommendedProductIds: ['syh-08', 'syh-03'],
    iconName: 'Shield'
  },
  {
    id: 'dullness',
    title: 'Dullness & Uneven Glow',
    tagline: 'Cellular Sluggishness & Lack of Radiance',
    description: 'Reawaken skin vitality with high-potency damask rose polyphenols and cell-communicating peptides.',
    dermatologistInsight: 'Dullness is primarily light scattering caused by dead cell buildup and micro-dehydration. Pairing gentle exfoliation with bio-peptides yields glass radiance.',
    keyActives: ['Copper Peptides', 'Damask Rose Water', 'Vitamin C', 'Galactomyces'],
    productCategory: 'serums',
    recommendedProductIds: ['syh-01', 'syh-05'],
    iconName: 'Heart'
  }
];

export const DERMATOLOGISTS: Dermatologist[] = [
  {
    id: 'dr-sarah',
    name: 'Dr. Sarah Vance, MD, FAAD',
    title: 'Senior Board-Certified Dermatologist',
    qualifications: 'MD (Stanford University School of Medicine), Fellow of the American Academy of Dermatology',
    clinicHospital: 'Syhaas Clinical Aesthetics Center, Beverly Hills & Tele-Derm',
    experienceYears: 14,
    rating: 4.98,
    reviewCount: 420,
    feeOnline: 45,
    feeClinic: 85,
    specialities: ['Acne Vulgaris & Scars', 'Hormonal Melasma', 'Barrier Reconstruction', 'Clinical Anti-Aging'],
    avatar: DERM_IMAGE,
    availableDays: 'Mon, Tue, Thu, Sat',
    languages: ['English', 'Spanish'],
    bio: 'Dr. Vance specializes in evidence-based cosmetic dermatology and personalized active regimens. She has treated over 6,000 patients with a philosophy of barrier preservation before aggressive intervention.'
  },
  {
    id: 'dr-priya',
    name: 'Dr. Priya Sharma, MBBS, MD (Derm)',
    title: 'Consultant Dermatologist & Pigmentation Specialist',
    qualifications: 'MBBS, MD - Dermatology, Venereology & Leprosy (AIIMS), Dip. Aesthetic Dermatology',
    clinicHospital: 'Syhaas Institute of Skin Science & Telehealth',
    experienceYears: 11,
    rating: 4.95,
    reviewCount: 312,
    feeOnline: 40,
    feeClinic: 75,
    specialities: ['Hyperpigmentation', 'Sensitive & Rosacea Skin', 'Post-Inflammatory Erythema', 'Pregnancy-Safe Skincare'],
    avatar: DERM_IMAGE,
    availableDays: 'Tue, Wed, Fri, Sun',
    languages: ['English', 'Hindi'],
    bio: 'Renowned for her tailored approach to recalcitrant pigmentation and sensitive barriers, Dr. Sharma combines pharmacology with soothing botanical synergies.'
  },
  {
    id: 'dr-marcus',
    name: 'Dr. Marcus Chen, MD, PhD',
    title: 'Dermatologist & Cutaneous Biologist',
    qualifications: 'MD, PhD in Cutaneous Biology (Johns Hopkins), Board-Certified Dermatologist',
    clinicHospital: 'Metropolitan Skin Health Center & Syhaas Virtual Clinic',
    experienceYears: 16,
    rating: 4.97,
    reviewCount: 388,
    feeOnline: 50,
    feeClinic: 95,
    specialities: ['Adult Cystic Acne', 'Cutaneous Microbiome', 'Eczema & Atopic Dermatitis', 'Retinoid Acclimation'],
    avatar: DERM_IMAGE,
    availableDays: 'Mon, Wed, Fri',
    languages: ['English', 'Mandarin'],
    bio: 'Dr. Chen leads research into stratum corneum lipid balance and photobiology. He provides thorough diagnostic tele-consultations with custom prescription and cosmetic regimens.'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-01',
    author: 'Elena R.',
    age: 31,
    location: 'New York, NY',
    rating: 5,
    date: 'March 14, 2026',
    productName: 'Rose Glow Radiance Peptide Serum',
    concernTreated: 'Dullness & Dehydration',
    comment: 'I consulted Dr. Vance online, and she recommended combining the Rose Glow Serum with the Ceramide Cream. Within 3 weeks, my skin went from tight and lackluster to plump, dewy, and noticeably smoother. The rose aroma is subtle and luxurious.',
    verifiedPurchase: true,
    timeUsed: 'Used for 6 weeks'
  },
  {
    id: 'rev-02',
    author: 'Michael T.',
    age: 28,
    location: 'Austin, TX',
    rating: 5,
    date: 'March 02, 2026',
    productName: 'Clarifying BHA Pore Refining Cleanser',
    concernTreated: 'Acne & Congested Pores',
    comment: 'Most salicylic cleansers stripped my face until it peeled. The Syhaas formula keeps my skin completely calm while clearing the stubborn blackheads around my nose. Truly a game-changer.',
    verifiedPurchase: true,
    timeUsed: 'Used for 2 months'
  },
  {
    id: 'rev-03',
    author: 'Sophia K.',
    age: 42,
    location: 'Chicago, IL',
    rating: 5,
    date: 'February 24, 2026',
    productName: 'Clinical Brightening Tranexamic & Azelaic Fluid',
    concernTreated: 'Post-Inflammatory Hyperpigmentation',
    comment: 'Years of sun damage and stubborn brown marks on my cheekbones started fading visibly after month one. No irritation or peeling. Having dermatologist access directly on the site gave me immense confidence in purchasing.',
    verifiedPurchase: true,
    timeUsed: 'Used for 8 weeks'
  },
  {
    id: 'rev-04',
    author: 'Amara N.',
    age: 25,
    location: 'Seattle, WA',
    rating: 5,
    date: 'February 10, 2026',
    productName: 'Rose Veil Invisible Mineral SPF 50+',
    concernTreated: 'Sensitive Skin Sun Protection',
    comment: 'Finding a 100% mineral sunscreen with zero chalky cast on medium-deep skin tone felt impossible until this. It leaves a delicate rose glow and feels like a silky primer. Never breaks me out.',
    verifiedPurchase: true,
    timeUsed: 'Used for 3 weeks'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How do the dermatologist consultations work?',
    answer: 'You can choose between a 25-minute Secure Video Tele-Consultation or an In-Clinic appointment at our partner centers. After selecting your preferred board-certified dermatologist and booking a slot, you will receive a diagnostic questionnaire. During the session, your doctor will evaluate your skin history and provide a custom treatment roadmap.',
    category: 'consultations'
  },
  {
    id: 'faq-2',
    question: 'Are Syhaas Cosmetics products suitable for sensitive skin?',
    answer: 'Yes! Every Syhaas formulation is dermatologist-formulated, hypoallergenic, and clinically tested on sensitive cohorts. We formulate without parabens, synthetic fragrances, harsh drying alcohols, or phthalates. Our signature Bulgarian Rose Damascena hydrosol is anti-inflammatory and soothing.',
    category: 'products'
  },
  {
    id: 'faq-3',
    question: 'How does the interactive Skin Quiz work?',
    answer: 'Our 4-step skin quiz was designed in collaboration with board-certified dermatologists. It assesses your biological skin type, moisture retention, sebum rate, and primary concerns to generate a balanced AM/PM routine tailored to your skin goals. Please note: the quiz is for cosmetic guidance and does not replace medical diagnosis for cutaneous pathology.',
    category: 'products'
  },
  {
    id: 'faq-4',
    question: 'What is your shipping and return policy?',
    answer: 'We offer Free Express Clinical Delivery on all orders over $50 within the United States (delivered within 2-4 business days). We stand behind our clinical efficacy with a 30-Day Money-Back Guarantee: if you do not love your results, return the bottle within 30 days for a full refund.',
    category: 'orders'
  },
  {
    id: 'faq-5',
    question: 'Can I combine multiple active ingredients like Retinal and Azelaic Acid?',
    answer: 'Yes, but pacing is essential. We recommend using Azelaic Acid and Vitamin C in your morning routine under SPF 50, and reserving Encapsulated Retinal for your evening routine 2-3 times per week, buffered by our Ceramide Barrier Cream.',
    category: 'ingredients'
  }
];

export const ROUTINE_STEPS = {
  AM: [
    {
      step: '01',
      title: 'Gentle Clarifying Cleanse',
      description: 'Remove overnight cellular debris and sebum without disturbing the delicate acid mantle.',
      productId: 'syh-03',
      productName: 'Clarifying BHA Cleanser',
      tip: 'Wash with tepid water for 60 seconds.'
    },
    {
      step: '02',
      title: 'Active Antioxidant Infusion',
      description: 'Neutralize daytime free radicals, boost elasticity, and awaken radiant cellular glow.',
      productId: 'syh-01',
      productName: 'Rose Glow Radiance Peptide Serum',
      tip: 'Press into slightly damp skin for amplified absorption.'
    },
    {
      step: '03',
      title: 'Lightweight Lipid Lock',
      description: 'Seal in hydration and balance sebum flow with non-pore-clogging nutrients.',
      productId: 'syh-08',
      productName: 'Niacinamide Matte Emulsion',
      tip: 'Focus on cheeks and drier perimeter zones.'
    },
    {
      step: '04',
      title: 'Broad Spectrum Photoprotection',
      description: 'Shield against UVA, UVB, and artificial HEV blue light to prevent photo-aging.',
      productId: 'syh-05',
      productName: 'Rose Veil Invisible Mineral SPF 50+',
      tip: 'Apply two full finger-lengths every single morning.'
    }
  ],
  PM: [
    {
      step: '01',
      title: 'Purifying Barrier Cleanse',
      description: 'Melt away mineral sunscreen, ambient pollution, and makeup thoroughly.',
      productId: 'syh-03',
      productName: 'Clarifying BHA Cleanser',
      tip: 'Take time to gently massage jawline and hairline.'
    },
    {
      step: '02',
      title: 'Hydrating Microbiome Prep',
      description: 'Rebalance skin pH and flood epidermal layers with bio-fermented rose hydrosols.',
      productId: 'syh-07',
      productName: 'Rose Petal Hydrating Essence',
      tip: 'Pat onto face with bare palms rather than cotton pads.'
    },
    {
      step: '03',
      title: 'Clinical Correction Treatment',
      description: 'Target hyperpigmentation and stimulate nocturnal collagen synthesis with retinal or azelaic acid.',
      productId: 'syh-04',
      productName: 'Tranexamic & Azelaic Fluid',
      tip: 'Allow 2 minutes to absorb before applying cream.'
    },
    {
      step: '04',
      title: 'Nocturnal Barrier Reconstruction',
      description: 'Cocoon skin in 5 bio-identical ceramides and phytosphingosine for deep overnight repair.',
      productId: 'syh-02',
      productName: 'Ceramide Barrier Recovery Cream',
      tip: 'Warm pea-sized amount between fingertips before smoothing.'
    }
  ]
};
