// auto-policy/api/autoPolicyApi.ts
import type { AutoPolicy } from '../Cards/interfaces';

export const getAutoPolicyDetailsApi = async (): Promise<AutoPolicy> => {
  return Promise.resolve({
    policyType: 'Personal Auto Policy',
    policyHolder: 'John Smith',
    policyNumber: 'APA-8829103-02',
    status: 'Active',
    startDate: 'Dec 31, 2025',
    endDate: 'Dec 31, 2026',

    coverage: [
      { type: 'Bodily Injury Liability', value: '$250,000 / $500,000' },
      { type: 'Property Damage Liability', value: '$100,000' },
      { type: 'Collision Deductible', value: '$500' },
      { type: 'Comprehensive Deductible', value: '$250' },
      { type: 'Uninsured Motorist', value: '$250,000 / $500,000' },
    ],

    vehicle: {
      vin: '1HGCM82633A004352',
      licensePlate: 'NJ-ABC1234',
      registrationState: 'NJ',
      year: 2022,
      make: 'Toyota',
      model: 'Camry',
      trim: 'XLE',
      bodyType: 'Sedan',
      fuelType: 'Gasoline',
      usageType: 'Personal',
      annualMileage: 12000,
      ownershipStatus: 'Owned',
      garagingAddress: '123 Main St, Piscataway, NJ 08854',
      priorInsurance: 'Geico - Policy expired 2023',
    },
  });
};
