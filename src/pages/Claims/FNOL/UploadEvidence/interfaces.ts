export interface UploadEvidenceData {
  photos?: File[];
  videos?: File[];
  reports?: File[];
  estimates?: File[];
}

export interface ClaimDetailsData {
  claimType?: string;
}

export interface UploadEvidenceViewProps {
  claimType: string;
  photos: File[];
  videos: File[];
  reports: File[];
  estimates: File[];
  errorMessage: string;

  handlePhotoUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;

  handleVideoUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;

  handleReportUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;

  handleEstimateUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;

  removePhoto: (index: number) => void;
  removeVideo: (index: number) => void;
  removeReport: (index: number) => void;
  removeEstimate: (index: number) => void;
}