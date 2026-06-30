export interface VehicleField {
  value: string;
}

export interface VehicleData {
  vin: VehicleField;
  year: VehicleField;
  make: VehicleField;
  model: VehicleField;
  usageType: VehicleField;
  annualMileage: VehicleField;
  driverFirstName: VehicleField;
  driverLastName: VehicleField;
  licenseNumber: VehicleField;
  yearsLicensed: VehicleField;
  maritalStatus: VehicleField;
}

export interface CoverageData {
  liabilityLimit: string;
  collisionDeductible: string;
  comprehensiveDeductible: string;
  uninsuredMotorist: string;
  medicalCoverage: string;
  roadsideAssistance: string;
}

export interface PremiumData {
  monthlyPremium: number;
  annualPremium: number;
  liabilityPremium: number;
  collisionPremium: number;
  optionalPremium: number;
  validUntil: string;
}

export interface QuoteSummaryData {
  vehicle: VehicleData;
  coverage: CoverageData;
  premium: PremiumData;
}

export interface QuoteSummaryProps {
  data?: QuoteSummaryData;
}

export interface QuoteSummaryViewProps {
  data: QuoteSummaryData;
}