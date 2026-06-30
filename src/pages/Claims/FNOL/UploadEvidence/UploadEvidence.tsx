import { useEffect, useState } from 'react';

import type { StepContentProps } from '../../../../common/components/MultiStepForm/types';

import UploadEvidenceView from './UploadEvidenceView';

import type {
  ClaimDetailsData,
  UploadEvidenceData,
} from './interfaces';

export const MAX_FILE_SIZE = 10 * 1024 * 1024;

const IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
];

const VIDEO_TYPES = [
  'video/mp4',
  'video/quicktime',
];

const DOCUMENT_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/jpg',
  'image/png',
];

const STEP_KEY = 'uploadEvidence';

const validateFiles = (
  files: File[],
  allowedTypes: string[],
) => {
  const validFiles: File[] = [];
  let error = '';

  files.forEach(file => {
    if (!allowedTypes.includes(file.type)) {
      error = `${file.name} is not a supported file type`;
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      error = `${file.name} exceeds 10 MB limit`;
      return;
    }

    validFiles.push(file);
  });

  return {
    validFiles,
    error,
  };
};

const UploadEvidence = ({
  data,
  onDataChange,
}: StepContentProps) => {
  const claimDetails =
    (data?.claimDetails as ClaimDetailsData) || {};

  const claimType =
    claimDetails.claimType || 'auto';

  const existingData =
    (data?.[
      STEP_KEY
    ] as UploadEvidenceData) || {};

  const [photos, setPhotos] = useState<File[]>(
    existingData.photos || [],
  );

  const [videos, setVideos] = useState<File[]>(
    existingData.videos || [],
  );

  const [reports, setReports] = useState<File[]>(
    existingData.reports || [],
  );

  const [estimates, setEstimates] = useState<File[]>(
    existingData.estimates || [],
  );

  const [errorMessage, setErrorMessage] =
    useState('');

  useEffect(() => {
    onDataChange({
      photos,
      videos,
      reports,
      estimates,
    });
  }, [
    photos,
    videos,
    reports,
    estimates,
    onDataChange,
  ]);

  const handlePhotoUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(
      e.target.files || [],
    );

    const { validFiles, error } =
      validateFiles(files, IMAGE_TYPES);

    setErrorMessage(error);

    if (validFiles.length > 0) {
      setPhotos(prev => [...prev, ...validFiles]);
    }

    e.target.value = '';
  };

  const handleVideoUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(
      e.target.files || [],
    );

    const { validFiles, error } =
      validateFiles(files, VIDEO_TYPES);

    setErrorMessage(error);

    if (validFiles.length > 0) {
      setVideos(prev => [...prev, ...validFiles]);
    }

    e.target.value = '';
  };

  const handleReportUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(
      e.target.files || [],
    );

    const { validFiles, error } =
      validateFiles(files, DOCUMENT_TYPES);

    setErrorMessage(error);

    if (validFiles.length > 0) {
      setReports(prev => [...prev, ...validFiles]);
    }

    e.target.value = '';
  };

  const handleEstimateUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const files = Array.from(
      e.target.files || [],
    );

    const { validFiles, error } =
      validateFiles(files, DOCUMENT_TYPES);

    setErrorMessage(error);

    if (validFiles.length > 0) {
      setEstimates(prev => [
        ...prev,
        ...validFiles,
      ]);
    }

    e.target.value = '';
  };

  const removePhoto = (index: number) => {
    setPhotos(prev =>
      prev.filter((_, i) => i !== index),
    );
  };

  const removeVideo = (index: number) => {
    setVideos(prev =>
      prev.filter((_, i) => i !== index),
    );
  };

  const removeReport = (index: number) => {
    setReports(prev =>
      prev.filter((_, i) => i !== index),
    );
  };

  const removeEstimate = (index: number) => {
    setEstimates(prev =>
      prev.filter((_, i) => i !== index),
    );
  };

  return (
    <UploadEvidenceView
      claimType={claimType}
      photos={photos}
      videos={videos}
      reports={reports}
      estimates={estimates}
      errorMessage={errorMessage}
      handlePhotoUpload={handlePhotoUpload}
      handleVideoUpload={handleVideoUpload}
      handleReportUpload={handleReportUpload}
      handleEstimateUpload={
        handleEstimateUpload
      }
      removePhoto={removePhoto}
      removeVideo={removeVideo}
      removeReport={removeReport}
      removeEstimate={removeEstimate}
    />
  );
};

export default UploadEvidence;