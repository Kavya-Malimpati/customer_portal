export interface ClaimInfo {
  claimNumber: string;
  vehicle: string;
}

export interface FNOLStep {
  id: number;
  title: string;
}

export interface RegisterFNOLViewProps {
  customerName: string;
  activeClaimsCount: number;
  steps: FNOLStep[];
  currentStep: number;
  onStartReporting: () => void;
}