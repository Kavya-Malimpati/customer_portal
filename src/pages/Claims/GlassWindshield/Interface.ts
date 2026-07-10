export interface GlassClaimStep {
  id: number;
  title: string;
}

export interface VerifyPolicyData {
  policyNumber: string;
  vehicle: string;
  coverageEligibility: string;
  deductible: string;
}

export interface DamageDetailsData {
  glassType: string;
  damageType: string;
  damageDate: string;
  incidentLocation: string;
  description: string;
}

export interface UploadEvidenceData {
  photos: File[];
  videos: File[];
}

export interface RepairShopData {
  searchLocation: string;
  selectedShop: string;
  appointmentDate: string;
  mobileRepair: boolean;
}

export interface GlassClaimFormData {
  verifyPolicy: VerifyPolicyData;
  damageDetails: DamageDetailsData;
  uploadEvidence: UploadEvidenceData;
  repairShop: RepairShopData;
}

export interface RepairCardInfo {
  title: string;
  badge: string;
  description: string;
  benefit: string;
}

export interface GlassWindshieldProps {
  repairInfo: RepairCardInfo;
  onRequestRepair: () => void;
}