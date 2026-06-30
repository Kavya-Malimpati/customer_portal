export interface PremiumResult {
  monthlyPremium: number;
  annualPremium: number;
  liabilityPremium: number;
  collisionPremium: number;
  optionalPremium: number;
  validUntil: string;
}

export const calculatePremium = (
  data: Record<string, unknown>,
): PremiumResult => {
  const coverage =
    data.coverage as Record<
      string,
      string
    >;

  const vehicle =
    data.vehicle as Record<
      string,
      any
    >;

  let liabilityPremium = 0;
  let collisionPremium = 0;
  let optionalPremium = 0;

  switch (
    coverage?.liabilityLimit
  ) {
    case '25/50/25':
      liabilityPremium = 400;
      break;

    case '50/100/50':
      liabilityPremium = 650;
      break;

    case '100/300/100':
      liabilityPremium = 900;
      break;

    case '250/500/250':
      liabilityPremium = 1400;
      break;
  }

  switch (
    coverage?.collisionDeductible
  ) {
    case '$250':
      collisionPremium = 500;
      break;

    case '$500':
      collisionPremium = 350;
      break;

    case '$1000':
      collisionPremium = 200;
      break;
  }

  if (
    coverage?.roadsideAssistance ===
    'Yes'
  ) {
    optionalPremium += 75;
  }

  if (
    vehicle?.priorClaims?.value
  ) {
    optionalPremium += 250;
  }

  if (
    vehicle?.priorViolations?.value
  ) {
    optionalPremium += 300;
  }

  const annualPremium =
    liabilityPremium +
    collisionPremium +
    optionalPremium;

  return {
    annualPremium,
    monthlyPremium: Math.round(
      annualPremium / 12,
    ),
    liabilityPremium,
    collisionPremium,
    optionalPremium,
    validUntil: '30 Days',
  };
};