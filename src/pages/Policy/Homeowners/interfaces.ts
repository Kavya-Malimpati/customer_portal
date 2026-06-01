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
  lastUpdated: string;

  coverage: HomeCoverageItem[];
  property: HomePropertyDetails;
}
