export interface Policy {
  id: string;
  type: 'auto' | 'home';
  title: string;
  policyNumber: string;
  monthlyPremium: number;
}

export interface BundleBenefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BundleSavings {
  totalPremium: number;
  discountPercentage: number;
  discountAmount: number;
  estimatedPremium: number;
  monthlySavings: number;
  yearlySavings: number;
}

export interface BundleData {
  autoPolicy: Policy;
  homePolicy: Policy;
  benefits: BundleBenefit[];
  savings: BundleSavings;
}

export interface BundleViewProps {
  data: BundleData;
  onAutoPolicyClick: () => void;
  onHomePolicyClick: () => void;
  onGetBundleQuote: () => void;
  onBundlePolicies: () => void;
}

export interface BundleSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}