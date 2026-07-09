import type React from 'react';
import type { Claim } from '../../../types';

export interface Props {
  claim: Claim;
}

export interface ClaimDocument {
  id: string;
  name: string;
  size: string;
  uploadedDate: string;
  url: string;
}

export interface UseClaimDocumentsReturn {
  documents: ClaimDocument[];
  handleUploadDocument: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleDownloadDocument: (
    document: ClaimDocument
  ) => void;
  handleDeleteDocument: (
    id: string
  ) => void;
}