export type ClaimStatus = 'approved' | 'processing' | 'paid';

export interface ClaimPayoutData {
  claimId: string;
  status: ClaimStatus;
  expectedArrival: string;
  method: string;
}

export interface ClaimPayoutUiProps extends ClaimPayoutData {
  onChangeClick: () => void;
}
