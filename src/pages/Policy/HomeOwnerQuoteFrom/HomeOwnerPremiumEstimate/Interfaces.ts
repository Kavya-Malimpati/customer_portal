import React from 'react';

export interface PremiumEstimateData {
  monthlyPremium: number;
  annualPremium: number;
  dwellingPremium: number;
  liabilityPremium: number;
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