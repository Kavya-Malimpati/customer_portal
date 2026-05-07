export interface CoverageItem {
  type: string;
  value: string;
}

export interface VehicleInformation {
  vin: string;
  licensePlate: string;
  registrationState: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  bodyType: string;
  fuelType: string;
  usageType: string;
  annualMileage: number;
  ownershipStatus: string;
  garagingAddress: string;
  priorInsurance?: string;
}

export interface AutoPolicy {
  policyType: string;
  policyHolder: string;
  policyNumber: string;
  status: 'Active' | 'Expired' | 'Pending';
  startDate: string;
  endDate: string;
  lastUpdated: string;

  coverage: CoverageItem[];
  vehicle: VehicleInformation;
}
