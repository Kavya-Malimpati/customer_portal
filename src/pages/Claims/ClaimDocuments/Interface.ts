import type React from 'react';

export interface ClaimDocument {
  id: string;
  name: string;
  size: string;
  uploadedDate: string;
  url: string;
}

export interface ClaimDocumentsViewProps {
  claimNumber: string;
  documents: ClaimDocument[];
  onUploadDocument: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDownloadDocument: (document: ClaimDocument) => void;
  onDeleteDocument: (id: string) => void;
}