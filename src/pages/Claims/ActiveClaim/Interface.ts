export type ClaimStatus =
  | 'reported'
  | 'assessed'
  | 'in-review'
  | 'paid-out';

export interface ActiveClaim {
  claimId: string;
  title: string;
  filedDate: string;
  status: ClaimStatus;
  estimatedResolution: string;
  damageAmount: string;
}