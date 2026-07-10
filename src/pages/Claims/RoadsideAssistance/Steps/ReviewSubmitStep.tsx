import { Card, CardContent, LabelValue, Typography } from '../../../../common/components';

import type { RoadsideRequestFormData } from '../Interface';

interface ReviewSubmitStepProps {
  data: RoadsideRequestFormData;
}

const ReviewSubmitStep = ({ data }: ReviewSubmitStepProps) => {
  return (
    <div className='roadside-review'>
      <Card variant='outlined-raised' className='roadside-review-card'>
        <CardContent>
          <div className='roadside-review-grid'>
            <LabelValue label='Current Location' value={data.requestAssistance.currentLocation} />

            <LabelValue
              label='Manual Location'
              value={data.requestAssistance.manualLocation || '-'}
            />

            <LabelValue label='Vehicle' value={data.requestAssistance.selectedVehicle} />
          </div>
        </CardContent>
      </Card>

      {/* Service */}

      <Card variant='outlined-raised' className='roadside-review-card'>
        <CardContent>
          <Typography variant='h4' color='primary'>
            Selected Service
          </Typography>

          <hr className='roadside-divider' />

          <LabelValue label='Service Type' value={data.selectService.serviceType} />
        </CardContent>
      </Card>

      {/* Details */}

      <Card variant='outlined-raised' className='roadside-review-card'>
        <CardContent>
          <Typography variant='h4' color='primary'>
            Request Details
          </Typography>

          <hr className='roadside-divider' />

          <div className='roadside-review-grid'>
            <LabelValue label='Contact Number' value={data.requestDetails.contactNumber} />

            <LabelValue label='Vehicle Condition' value={data.requestDetails.vehicleCondition} />
          </div>

          <div className='roadside-notes-review'>
            <LabelValue
              label='Additional Notes'
              value={data.requestDetails.additionalNotes || '-'}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewSubmitStep;
