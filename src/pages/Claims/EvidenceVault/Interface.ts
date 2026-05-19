import type React from 'react';

export interface EvidenceFile {
  id: string;
  name: string;
  url: string;
  type: 'image' | 'video';
}

export interface EvidenceVaultViewProps {
  claimNumber: string;
  files: EvidenceFile[];
  onUploadEvidence: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteEvidence: (id: string) => void;
}