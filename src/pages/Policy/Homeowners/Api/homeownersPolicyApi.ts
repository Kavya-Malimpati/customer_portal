// homeowners-policy/api/homeownersPolicyApi.ts
import type { HomeownersPolicy } from '../Cards/interfaces';

export const getHomeownersPolicyDetailsApi = async (): Promise<HomeownersPolicy> => {
  return Promise.resolve({
    policyType: 'Homeowners Insurance Policy',
    policyHolder: 'John Smith',
    policyNumber: 'HPA-7749201-01',
    status: 'Active',
    startDate: 'Jan 01, 2025',
    endDate: 'Jan 01, 2026',

    coverage: [
      { type: 'Dwelling Coverage', value: '$450,000' },
      { type: 'Other Structures', value: '$45,000' },
      { type: 'Personal Property', value: '$225,000' },
      { type: 'Loss of Use', value: '$90,000' },
      { type: 'Personal Liability', value: '$300,000' },
      { type: 'Medical Payments to Others', value: '$5,000' },
    ],

    property: {
      address: {
        street: '456 Oak Avenue',
        city: 'Piscataway',
        state: 'NJ',
        zipCode: '08854',
      },
      propertyType: 'Single-Family Home',
      yearBuilt: 2010,
      constructionType: 'Wood Frame',
      roof: {
        type: 'Asphalt Shingle',
        age: 8,
      },
      squareFootage: 2400,
      numberOfStories: 2,
      rooms: {
        bedrooms: 4,
        bathrooms: 3,
      },
      occupancyType: 'Primary Residence',
      ownershipStatus: 'Owned',
      estimatedPropertyValue: '$525,000',
      replacementCost: '$470,000',
      safetyFeatures: ['Smoke Detectors', 'Fire Alarms', 'Security System'],
      priorClaimsHistory: 'No prior claims reported',
      mortgageLender: 'Wells Fargo Home Mortgage',
    },
  });
};
