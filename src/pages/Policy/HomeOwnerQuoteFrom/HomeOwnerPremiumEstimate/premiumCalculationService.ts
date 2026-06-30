import type {
  PremiumEstimateData,
} from './Interfaces';

export const calculatePremium = (
  data: Record<string, unknown>,
): PremiumEstimateData => {
  const coverage =
    data.coverage as Record<
      string,
      string
    >;

  let dwellingPremium = 0;
  let liabilityPremium = 0;
  let optionalPremium = 0;

  switch (
    coverage?.dwellingCoverage
  ) {
    case '$100,000':
      dwellingPremium = 500;
      break;

    case '$250,000':
      dwellingPremium = 900;
      break;

    case '$500,000':
      dwellingPremium = 1400;
      break;

    case '$1,000,000':
      dwellingPremium = 2200;
      break;
  }

  switch (
    coverage?.personalLiabilityCoverage
  ) {
    case '$100,000':
      liabilityPremium = 100;
      break;

    case '$300,000':
      liabilityPremium = 250;
      break;

    case '$500,000':
      liabilityPremium = 450;
      break;

    case '$1,000,000':
      liabilityPremium = 700;
      break;
  }

  if (
    coverage?.floodCoverage ===
    'Yes'
  ) {
    optionalPremium += 200;
  }

  if (
    coverage?.earthquakeCoverage ===
    'Yes'
  ) {
    optionalPremium += 250;
  }

  if (
    coverage?.theftProtection ===
    'Yes'
  ) {
    optionalPremium += 100;
  }

  const annualPremium =
    dwellingPremium +
    liabilityPremium +
    optionalPremium;

  return {
    annualPremium,
    monthlyPremium: Math.round(
      annualPremium / 12,
    ),
    dwellingPremium,
    liabilityPremium,
    optionalPremium,
    validUntil: '30 Days',
  };
};