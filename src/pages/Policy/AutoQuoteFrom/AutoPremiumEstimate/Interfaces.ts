export interface PremiumEstimateData {
  monthlyPremium: number;
  annualPremium: number;
  liabilityPremium: number;
  collisionPremium: number;
  optionalPremium: number;
  validUntil: string;
}

export interface PremiumEstimateProps {
  data?: Record<string, unknown>;
  onDataChange?: (
    data: PremiumEstimateData,
  ) => void;
}

export interface PremiumEstimateViewProps {
  formData: PremiumEstimateData;
}