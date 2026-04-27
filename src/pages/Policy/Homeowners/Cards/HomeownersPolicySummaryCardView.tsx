import { Button, Card, CardContent, Typography } from '../../../../common/components';
import type { HomeownersPolicy } from './interfaces';

interface Props {
  policy: HomeownersPolicy;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

const HomeownersPolicySummaryCardView = ({ policy, isExpanded, onToggleExpand }: Props) => (
  <Card>
    <CardContent className='flex flex-col gap-(--space-4)'>
      {/* HEADER */}
      <div className='policy-card-header'>
        <Typography variant='h3' color='secondary'>
          Policy Summary
        </Typography>
      </div>

      {/* COVERAGE + PROPERTY SIDE BY SIDE */}
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

        {/* PROPERTY INFORMATION */}
        <div>
          <Typography variant='h4' color='primary' className='mb-(--space-3)'>
            Property Information
          </Typography>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-(--space-4)'>
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

                <div className='md:col-span-2'>
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

      {/* EXPAND / COLLAPSE CTA */}
      <Button variant='text' className='self-end' onClick={onToggleExpand}>
        {isExpanded ? 'Hide details' : 'Show full details'}
      </Button>
    </CardContent>
  </Card>
);

export default HomeownersPolicySummaryCardView;
