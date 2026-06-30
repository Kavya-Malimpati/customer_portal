import {
  useEffect,
} from 'react';

import PremiumEstimateView from './PremiumEstimateView';

import {
  calculatePremium,
} from './premiumCalculationService';

import type {
  PremiumEstimateProps,
} from './Interfaces';

const PremiumEstimate = ({
  data,
  onDataChange,
}: PremiumEstimateProps) => {
  const premium = calculatePremium(
    data || {},
  );

  useEffect(() => {
    onDataChange?.(premium);
  }, [
    premium,
    onDataChange,
  ]);

  return (
    <PremiumEstimateView
      formData={premium}
    />
  );
};

export default PremiumEstimate;