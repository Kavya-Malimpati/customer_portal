// auto-policy/interfaces.ts

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

  coverage: CoverageItem[];
  vehicle: VehicleInformation;
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
