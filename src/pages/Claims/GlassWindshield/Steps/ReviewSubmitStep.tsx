import { Card, CardContent, Typography, LabelValue } from '../../../../common/components';

import type { GlassClaimFormData } from '../Interface';

interface ReviewSubmitStepProps {
  data: GlassClaimFormData;
}

const ReviewSubmitStep = ({ data }: ReviewSubmitStepProps) => {
  return (
    <div className='glass-review'>
      {/* Policy Details */}

      <Card variant='outlined'>
        <CardContent>
          <Typography variant='h3' color='primary'>
            Policy Details
          </Typography>

          <div className='glass-review-grid'>
            <LabelValue label='Policy Number' value={data.verifyPolicy.policyNumber} />

            <LabelValue label='Vehicle' value={data.verifyPolicy.vehicle} />

            <LabelValue label='Coverage' value={data.verifyPolicy.coverageEligibility} />

            <LabelValue label='Deductible' value={data.verifyPolicy.deductible} />
          </div>
        </CardContent>
      </Card>

      <Card variant='outlined' className='glass-review-card'>
        <CardContent>
          <Typography variant='h3' color='primary'>
            Damage Details
          </Typography>

          <div className='glass-review-grid'>
            <LabelValue label='Glass Type' value={data.damageDetails.glassType} />

            <LabelValue label='Damage Type' value={data.damageDetails.damageType} />

            <LabelValue label='Damage Date' value={data.damageDetails.damageDate} />

            <LabelValue label='Location' value={data.damageDetails.incidentLocation} />
          </div>

          <LabelValue label='Description' value={data.damageDetails.description} />
        </CardContent>
      </Card>

      <Card variant='outlined' className='glass-review-card'>
        <CardContent>
          <Typography variant='h3' color='primary'>
            Uploaded Evidence
          </Typography>

          <div className='glass-review-grid'>
            <LabelValue label='Photos' value={`${data.uploadEvidence.photos.length} Uploaded`} />

            <LabelValue label='Videos' value={`${data.uploadEvidence.videos.length} Uploaded`} />
          </div>
        </CardContent>
      </Card>

      <Card variant='outlined' className='glass-review-card'>
        <CardContent>
          <Typography variant='h3' color='primary'>
            Repair Shop
          </Typography>

          <div className='glass-review-grid'>
            <LabelValue label='Repair Shop' value={data.repairShop.selectedShop} />

            <LabelValue label='Appointment' value={data.repairShop.appointmentDate} />

            <LabelValue label='Mobile Repair' value={data.repairShop.mobileRepair ? 'Yes' : 'No'} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewSubmitStep;
