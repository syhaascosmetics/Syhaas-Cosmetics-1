export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'serums' | 'moisturizers' | 'cleansers' | 'sunscreen' | 'treatments';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  concern: 'acne' | 'pigmentation' | 'dark-spots' | 'dryness' | 'oily' | 'dullness' | 'all';
  badge?: string;
  keyIngredients: string[];
  volume: string;
  description: string;
  benefits: string[];
  howToUse: string;
  clinicalResults: string;
  inStock: boolean;
}

export interface SkinConcernItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  dermatologistInsight: string;
  keyActives: string[];
  productCategory: string;
  recommendedProductIds: string[];
  iconName: string;
}

export interface Dermatologist {
  id: string;
  name: string;
  title: string;
  qualifications: string;
  clinicHospital: string;
  experienceYears: number;
  rating: number;
  reviewCount: number;
  feeOnline: number;
  feeClinic: number;
  specialities: string[];
  avatar: string;
  availableDays: string;
  languages: string[];
  bio: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface QuizAnswer {
  skinType?: string;
  primaryConcern?: string;
  sensitivity?: string;
  goal?: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  age: number;
  location: string;
  rating: number;
  date: string;
  productName: string;
  concernTreated: string;
  comment: string;
  verifiedPurchase: boolean;
  timeUsed: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'products' | 'consultations' | 'orders' | 'ingredients';
}

export interface ConsultationBooking {
  id: string;
  patientName: string;
  email: string;
  phone: string;
  doctorId: string;
  mode: 'online' | 'clinic';
  concern: string;
  date: string;
  timeSlot: string;
  notes?: string;
  createdAt: string;
}
