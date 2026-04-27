export interface HomeCoverageItem {
  type: string;
  value: string;
}

export interface HomePropertyDetails {
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  propertyType: string;
  yearBuilt: number;
  constructionType: string;
  roof: {
    type: string;
    age: number;
  };
  squareFootage: number;
  numberOfStories: number;
  rooms: {
    bedrooms: number;
    bathrooms: number;
  };
  occupancyType: string;
  ownershipStatus: string;
  estimatedPropertyValue: string;
  replacementCost: string;
  safetyFeatures: string[];
  priorClaimsHistory: string;
  mortgageLender: string;
}

export interface HomeownersPolicy {
  policyType: string;
  policyHolder: string;
  policyNumber: string;
  status: 'Active' | 'Expired' | 'Pending';
  startDate: string;
  endDate: string;

  coverage: HomeCoverageItem[];
  property: HomePropertyDetails;
}

export type ChangeRequestStatus = 'PENDING' | 'IN_REVIEW' | 'COMPLETED';

export interface ChangeRequestRow extends Record<string, unknown> {
  requestDate: string;
  type: string;
  status: ChangeRequestStatus;
  estimatedCompletion?: string;
}

export type RenewalStatus = 'ACTIVE' | 'EXPIRED';

export interface RenewalHistoryRow extends Record<string, unknown> {
  termPeriod: string;
  policyType: string;
  premium: string;
  claims: string;
  status: RenewalStatus;
}
