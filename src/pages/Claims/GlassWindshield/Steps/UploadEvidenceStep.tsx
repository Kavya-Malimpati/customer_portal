import React from 'react';

import { FileUpload } from '../../../../common/components';

import type { UploadEvidenceData } from '../Interface';

interface UploadEvidenceStepProps {
  data: UploadEvidenceData;
  onChange: (value: UploadEvidenceData) => void;
}

const UploadEvidenceStep = ({ data, onChange }: UploadEvidenceStepProps) => {
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...data,
      photos: Array.from(e.target.files ?? []),
    });
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...data,
      videos: Array.from(e.target.files ?? []),
    });
  };

  return (
    <div className='glass-step'>
      <div className='glass-upload-section'>
        <FileUpload
          id='glass-photos'
          label='Upload Photos'
          helperText='PNG, JPG, JPEG'
          accept='.png,.jpg,.jpeg'
          multiple
          value={data.photos}
          onChange={handlePhotoUpload}
        />
      </div>

      <div className='glass-upload-section'>
        <FileUpload
          id='glass-videos'
          label='Upload Videos'
          helperText='MP4, MOV'
          accept='.mp4,.mov,.avi'
          multiple
          value={data.videos}
          onChange={handleVideoUpload}
        />
      </div>
    </div>
  );
};

export default UploadEvidenceStep;
