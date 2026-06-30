import { Card, CardContent, LabelValue } from '../../../../common/components';

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

    return value !== undefined && value !== null && value !== ''
      ? String(value)
      : '-';
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
            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Claim Type'
              value={getValue(formData.claimDetails?.claimType)}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Policy'
              value={getValue(formData.claimDetails?.policy)}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Loss Type'
              value={getValue(formData.claimDetails?.lossType)}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Date Of Loss'
              value={getValue(formData.incidentDetails?.dateOfLoss)}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Time Of Loss'
              value={getValue(formData.incidentDetails?.timeOfLoss)}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Location'
              value={getValue(formData.incidentDetails?.location)}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Description'
              value={getValue(formData.incidentDetails?.description)}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Injuries'
              value={getValue(formData.partiesAndDamage?.injuries)}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Police Report Number'
              value={getValue(formData.partiesAndDamage?.policeReportNumber)}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Photos Uploaded'
              value={formData.uploadEvidence?.photos?.length ?? 0}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Videos Uploaded'
              value={formData.uploadEvidence?.videos?.length ?? 0}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Reports Uploaded'
              value={formData.uploadEvidence?.reports?.length ?? 0}
              labelVariant='body2'
              valueVariant='body1'
            />

            <LabelValue
              className='summary-item'
              orientation='vertical'
              label='Estimates Uploaded'
              value={formData.uploadEvidence?.estimates?.length ?? 0}
              labelVariant='body2'
              valueVariant='body1'
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewAndSubmitView;