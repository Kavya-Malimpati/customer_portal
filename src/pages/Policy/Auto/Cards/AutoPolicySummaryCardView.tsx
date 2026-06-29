import { Button, Card, CardContent, Typography } from '../../../../common/components';
import type { AutoPolicy } from '../interfaces';
import '../../styles/PolicySummaryCardView.css';
import { BsPerson } from 'react-icons/bs';
import { PiCar } from 'react-icons/pi';
import { IoIosInformationCircleOutline } from 'react-icons/io';

interface Props {
  policy: AutoPolicy;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const PolicySummaryCardView = ({ policy, isExpanded, onToggleExpand }: Props) => (
  <Card>
    <CardContent className='policy-summary-card-content'>
      <div className='policy-summary-header'>
        <Typography variant='h3' color='secondary'>
          Policy Summary
        </Typography>
      </div>
      <div className='policy-summary-body-wrapper'>
        {/* COVERAGE + VEHICLE SIDE BY SIDE */}
        <div className='policy-summary-grid'>
          {/* COVERAGE DETAILS */}
          <div>
            <div className='policy-coverage-summary-section-header'>
              <BsPerson size={20} className='policy-summary-section-icon' />
              <Typography variant='h4' color='primary'>
                Coverage Details
              </Typography>
            </div>
            <div className='policy-summary-coverage-list'>
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
            <div className='policy-coverage-summary-section-header'>
              <PiCar size={20} className='policy-summary-section-icon' />
              <Typography variant='h4' color='primary'>
                Vehicle Information
              </Typography>
            </div>

            <div className='policy-summary-lob-grid'>
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
                    <div className='policy-summary-span-2'>
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
      </div>
      {/* EXPAND / COLLAPSE CTA */}

      <div className='policy-summary-footer'>
        <div className='policy-summary-update'>
          {<IoIosInformationCircleOutline />}
          <Typography>Coverage last updated {policy.lastUpdated}</Typography>
        </div>
        <Button variant='text' className='policy-summary-toggle' onClick={onToggleExpand}>
          {isExpanded ? 'Hide Policy Terms' : 'Show Full Policy Terms'}
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default PolicySummaryCardView;
