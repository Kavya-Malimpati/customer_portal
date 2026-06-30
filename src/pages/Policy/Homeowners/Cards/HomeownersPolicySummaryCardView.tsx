import { Button, Card, CardContent, Typography } from '../../../../common/components';
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
  <Card>
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

          {/* PROPERTY INFORMATION */}
          <div>
            <div className='policy-coverage-summary-section-header'>
              <TbHomePlus size={20} className='policy-summary-section-icon' />
              <Typography variant='h4' color='primary'>
                Property Information
              </Typography>
            </div>

            <div className='policy-summary-lob-grid'>
              <div>
                <Typography variant='body2' color='secondary'>
                  Property Address
                </Typography>
                <Typography variant='body1' color='primary'>
                  {policy.property.address.street}, {policy.property.address.city},{' '}
                  {policy.property.address.state} {policy.property.address.zipCode}
                </Typography>
              </div>

              <div>
                <Typography variant='body2' color='secondary'>
                  Property Type
                </Typography>
                <Typography variant='body1' color='primary'>
                  {policy.property.propertyType}
                </Typography>
              </div>

              <div>
                <Typography variant='body2' color='secondary'>
                  Year Built
                </Typography>
                <Typography variant='body1' color='primary'>
                  {policy.property.yearBuilt}
                </Typography>
              </div>

              <div>
                <Typography variant='body2' color='secondary'>
                  Square Footage
                </Typography>
                <Typography variant='body1' color='primary'>
                  {policy.property.squareFootage.toLocaleString()} sq ft
                </Typography>
              </div>

              {/* EXPANDED FIELDS */}
              {isExpanded && (
                <>
                  <div>
                    <Typography variant='body2' color='secondary'>
                      Construction Type
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.property.constructionType}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant='body2' color='secondary'>
                      Roof
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.property.roof.type} ({policy.property.roof.age} yrs)
                    </Typography>
                  </div>

                  <div>
                    <Typography variant='body2' color='secondary'>
                      Ownership Status
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.property.ownershipStatus}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant='body2' color='secondary'>
                      Occupancy Type
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.property.occupancyType}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant='body2' color='secondary'>
                      Estimated Property Value
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.property.estimatedPropertyValue}
                    </Typography>
                  </div>

                  <div>
                    <Typography variant='body2' color='secondary'>
                      Replacement Cost
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.property.replacementCost}
                    </Typography>
                  </div>

                  <div className='md:col-span-2'>
                    <Typography variant='body2' color='secondary'>
                      Safety Features
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.property.safetyFeatures.join(', ')}
                    </Typography>
                  </div>

                  <div className='md:col-span-2'>
                    <Typography variant='body2' color='secondary'>
                      Prior Claims History
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.property.priorClaimsHistory}
                    </Typography>
                  </div>

                  <div className='policy-summary-span-2'>
                    <Typography variant='body2' color='secondary'>
                      Mortgage / Lender
                    </Typography>
                    <Typography variant='body1' color='primary'>
                      {policy.property.mortgageLender}
                    </Typography>
                  </div>
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
