import { Button, Card, CardContent, LabelValue, Typography } from '../../../../common/components';
import type { HomeownersPolicy } from '../interfaces';
import '../../styles/PolicySummaryCardView.css';
import { BsPerson } from 'react-icons/bs';
import { TbHomePlus } from 'react-icons/tb';
import { IoIosInformationCircleOutline } from 'react-icons/io';

interface Props {
  policy: HomeownersPolicy;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const HomeownersPolicySummaryCardView = ({ policy, isExpanded, onToggleExpand }: Props) => (
  <Card variant='outlined'>
    <CardContent className='policy-summary-card-content'>
      {/* HEADER */}
      <div className='policy-summary-header'>
        <Typography variant='h3' color='secondary'>
          Policy Summary
        </Typography>
      </div>

      <div className='policy-summary-body-wrapper'>
        {/* COVERAGE + PROPERTY SIDE BY SIDE */}
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

          {/* PROPERTY INFORMATION */}
          <div>
            <div className='policy-coverage-summary-section-header'>
              <TbHomePlus size={20} className='policy-summary-section-icon' />
              <Typography variant='h4' color='primary'>
                Property Information
              </Typography>
            </div>

            <div className='policy-summary-lob-grid'>
              <LabelValue
                orientation='vertical'
                label='Property Address'
                value={`${policy.property.address.street}, ${policy.property.address.city}, 
                ${policy.property.address.state} ${policy.property.address.zipCode}`}
                labelVariant='body2'
                valueVariant='body1'
                labelColor='secondary'
                valueColor='primary'
              />

              <LabelValue
                orientation='vertical'
                label='Property Type'
                value={policy.property.propertyType}
                labelVariant='body2'
                valueVariant='body1'
                labelColor='secondary'
                valueColor='primary'
              />

              <LabelValue
                orientation='vertical'
                label='Year Built'
                value={policy.property.yearBuilt}
                labelVariant='body2'
                valueVariant='body1'
                labelColor='secondary'
                valueColor='primary'
              />

              <LabelValue
                orientation='vertical'
                label='Square Footage'
                value={`${policy.property.squareFootage.toLocaleString()} sq ft`}
                labelVariant='body2'
                valueVariant='body1'
                labelColor='secondary'
                valueColor='primary'
              />

              {/* EXPANDED FIELDS */}
              {isExpanded && (
                <>
                  <LabelValue
                    orientation='vertical'
                    label='Construction Type'
                    value={policy.property.constructionType}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    orientation='vertical'
                    label='Roof'
                    value={`${policy.property.roof.type} (${policy.property.roof.age} yrs)`}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    orientation='vertical'
                    label='Ownership Status'
                    value={policy.property.ownershipStatus}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    orientation='vertical'
                    label='Occupancy Type'
                    value={policy.property.occupancyType}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    orientation='vertical'
                    label='Estimated Property Value'
                    value={policy.property.estimatedPropertyValue}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    orientation='vertical'
                    label='Replacement Cost'
                    value={policy.property.replacementCost}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    className='md:col-span-2'
                    orientation='vertical'
                    label='Safety Features'
                    value={policy.property.safetyFeatures.join(', ')}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    className='md:col-span-2'
                    orientation='vertical'
                    label='Prior Claims History'
                    value={policy.property.priorClaimsHistory}
                    labelVariant='body2'
                    valueVariant='body1'
                    labelColor='secondary'
                    valueColor='primary'
                  />

                  <LabelValue
                    className='policy-summary-span-2'
                    orientation='vertical'
                    label='Mortgage / Lender'
                    value={policy.property.mortgageLender}
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

export default HomeownersPolicySummaryCardView;
