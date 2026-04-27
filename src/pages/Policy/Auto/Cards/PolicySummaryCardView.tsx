import { Button, Card, CardContent, Typography } from '../../../../common/components';
import type { AutoPolicy } from './interfaces';

interface Props {
  policy: AutoPolicy;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const PolicySummaryCardView = ({ policy, isExpanded, onToggleExpand }: Props) => (
  <Card>
    <CardContent className='flex flex-col gap-(--space-4)'>
      <div className='policy-card-header'>
        <Typography variant='h3' color='secondary'>
          Policy Summary
        </Typography>
      </div>
      {/* COVERAGE + VEHICLE SIDE BY SIDE */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-(--space-6)'>
        {/* COVERAGE DETAILS */}
        <div>
          <Typography variant='h4' color='primary' className='mb-(--space-3)'>
            Coverage Details
          </Typography>

          <div className='grid grid-cols-1 gap-(--space-4)'>
            {(isExpanded ? policy.coverage : policy.coverage.slice(0, 2)).map((c, index) => (
              <div key={index}>
                <Typography variant='body2' color='secondary'>
                  {c.type}
                </Typography>
                <Typography variant='body1' color='primary'>
                  {c.value}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        {/* VEHICLE INFORMATION */}
        <div>
          <Typography variant='h4' color='primary' className='mb-(--space-3)'>
            Vehicle Information
          </Typography>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-(--space-4)'>
            <div>
              <Typography variant='body2' color='secondary'>
                VIN
              </Typography>
              <Typography variant='body1' color='primary'>
                {policy.vehicle.vin}
              </Typography>
            </div>

            <div>
              <Typography variant='body2' color='secondary'>
                License Plate
              </Typography>
              <Typography variant='body1' color='primary'>
                {policy.vehicle.licensePlate}
              </Typography>
            </div>

            <div>
              <Typography variant='body2' color='secondary'>
                Vehicle
              </Typography>
              <Typography variant='body1' color='primary'>
                {policy.vehicle.year} {policy.vehicle.make} {policy.vehicle.model}
              </Typography>
            </div>

            <div>
              <Typography variant='body2' color='secondary'>
                Usage Type
              </Typography>
              <Typography variant='body1' color='primary'>
                {policy.vehicle.usageType}
              </Typography>
            </div>

            {/* Expanded-only fields */}
            {isExpanded && (
              <>
                <div>
                  <Typography variant='body2' color='secondary'>
                    Annual Mileage
                  </Typography>
                  <Typography variant='body1' color='primary'>
                    {policy.vehicle.annualMileage.toLocaleString()} miles
                  </Typography>
                </div>

                <div>
                  <Typography variant='body2' color='secondary'>
                    Ownership Status
                  </Typography>
                  <Typography variant='body1' color='primary'>
                    {policy.vehicle.ownershipStatus}
                  </Typography>
                </div>

                <div className='md:col-span-2'>
                  <Typography variant='body2' color='secondary'>
                    Garaging Address
                  </Typography>
                  <Typography variant='body1' color='primary'>
                    {policy.vehicle.garagingAddress}
                  </Typography>
                </div>

                {policy.vehicle.priorInsurance && (
                  <div className='md:col-span-2'>
                    <Typography variant='body2' color='secondary'>
                      Prior Insurance
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.vehicle.priorInsurance}
                    </Typography>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* EXPAND / COLLAPSE CTA */}

      <Button variant='text' className='self-end' onClick={onToggleExpand}>
        {isExpanded ? 'Hide details' : 'Show full details'}
      </Button>
    </CardContent>
  </Card>
);

export default PolicySummaryCardView;
