export interface PolicyLossTypeData {
  claimType: 'auto' | 'home';
  policy: string;
  lossType: string;
}

export interface FNOLFormData {
  claimDetails?: PolicyLossTypeData;
  incidentDetails?: Record<string, unknown>;
  parties?: Record<string, unknown>;
  documents?: Record<string, unknown>;
}