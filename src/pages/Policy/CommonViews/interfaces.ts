export interface PolicyDocument {
  id: string;
  title: string;
  description: string;
  fileMeta: string;
  downloadUrl: string;
}

export interface PolicyHeaderData {
  policyType: string;
  policyNumber: string;
  status: string;
  endDate: string;
}
export interface AwaitingSignatureDocument {
  id: string;
  documentName: string;
  signUrl: string;
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
