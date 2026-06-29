import { Button, Card, CardContent, LabelValue, Typography } from '../../../../common/components';
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
  <Card variant='outlined'>
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
                <LabelValue
                  key={index}
                  orientation='vertical'
                  label={c.type}
                  value={c.value}
                  labelVariant='body2'
                  valueVariant='body1'
                  labelColor='secondary'
                  valueColor='primary'
                />
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
              <LabelValue
                orientation='vertical'
                label='VIN'
                value={policy.vehicle.vin}
                labelVariant='body2'
                valueVariant='body1'
                labelColor='secondary'
                valueColor='primary'
              />

              <LabelValue
                orientation='vertical'
                label='License Plate'
                value={policy.vehicle.licensePlate}
                labelVariant='body2'
                valueVariant='body1'
                labelColor='secondary'
                valueColor='primary'
              />

              <LabelValue
                orientation='vertical'
                label='Vehicle'
                value={`${policy.vehicle.year} ${policy.vehicle.make} ${policy.vehicle.model}`}
                labelVariant='body2'
                valueVariant='body1'
                labelColor='secondary'
                valueColor='primary'
              />

              <LabelValue
                orientation='vertical'
                label='Usage Type'
                value={policy.vehicle.usageType}
                labelVariant='body2'
                valueVariant='body1'
                labelColor='secondary'
                valueColor='primary'
              />
              {/* Expanded-only fields */}
              {isExpanded && (
                <>
                  <LabelValue
                    orientation='vertical'
                    label='Annual Mileage'
                    value={`${policy.vehicle.annualMileage.toLocaleString()} miles`}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    orientation='vertical'
                    label='Ownership Status'
                    value={policy.vehicle.ownershipStatus}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    orientation='vertical'
                    label='Garaging Address'
                    value={policy.vehicle.garagingAddress}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    orientation='vertical'
                    label='Prior Insurance'
                    value={policy.vehicle.priorInsurance}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />
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
