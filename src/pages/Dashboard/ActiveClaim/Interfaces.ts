export interface ActiveClaimData {
  claimNumber: string;
  claimType: string;
  status: string;
  progress: number;
  towTruckEta: string;
  trackingId: string;
}

export interface ActiveClaimUiProps {
  claim: ActiveClaimData;
}