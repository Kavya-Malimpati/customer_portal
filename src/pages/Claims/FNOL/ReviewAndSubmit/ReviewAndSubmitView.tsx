import { Card, CardContent, Typography } from '../../../../common/components';

import type { StepContentProps } from '../../../../common/components/MultiStepForm/types';

import './ReviewAndSubmit.css';
import type { ReviewFormData } from './interfaces';

const getValue = (field: unknown): string => {
  if (field === null || field === undefined) {
    return '-';
  }

  if (typeof field === 'string') {
    return field || '-';
  }

  if (typeof field === 'object' && field !== null && 'value' in field) {
    const value = (field as { value?: unknown }).value;

    return value !== undefined && value !== null && value !== '' ? String(value) : '-';
  }

  return '-';
};

const ReviewAndSubmitView = ({ data }: StepContentProps) => {
  const formData = data as ReviewFormData;

  return (
    <div className='review-container'>
      <Card>
        <CardContent>
          <div className='summary-grid'>
            <div className='summary-item'>
              <Typography variant='body2'>Claim Type</Typography>
              <Typography>{getValue(formData.claimDetails?.claimType)}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Policy</Typography>
              <Typography>{getValue(formData.claimDetails?.policy)}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Loss Type</Typography>
              <Typography>{getValue(formData.claimDetails?.lossType)}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Date Of Loss</Typography>
              <Typography>{getValue(formData.incidentDetails?.dateOfLoss)}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Time Of Loss</Typography>
              <Typography>{getValue(formData.incidentDetails?.timeOfLoss)}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Location</Typography>
              <Typography>{getValue(formData.incidentDetails?.location)}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Description</Typography>
              <Typography>{getValue(formData.incidentDetails?.description)}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Injuries</Typography>
              <Typography>{getValue(formData.partiesAndDamage?.injuries)}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Police Report Number</Typography>
              <Typography>{getValue(formData.partiesAndDamage?.policeReportNumber)}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Photos Uploaded</Typography>
              <Typography>{formData.uploadEvidence?.photos?.length ?? 0}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Videos Uploaded</Typography>
              <Typography>{formData.uploadEvidence?.videos?.length ?? 0}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Reports Uploaded</Typography>
              <Typography>{formData.uploadEvidence?.reports?.length ?? 0}</Typography>
            </div>

            <div className='summary-item'>
              <Typography variant='body2'>Estimates Uploaded</Typography>
              <Typography>{formData.uploadEvidence?.estimates?.length ?? 0}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewAndSubmitView;
