export interface ClaimInfo {
  claimNumber: string;
  vehicle: string;
}

export interface FNOLStep {
  id: number;
  title: string;
}

export interface RepairCardInfo {
  title: string;
  badge: string;
  description: string;
  benefit: string;
}

export interface RegisterFNOLViewProps {
  customerName: string;
  activeClaimsCount: number;
  selectedClaim: ClaimInfo;
  steps: FNOLStep[];
  currentStep: number;
  repairInfo: RepairCardInfo;
  onChangeClaim: () => void;
  onStartReporting: () => void;
  onRequestRepair: () => void;
}