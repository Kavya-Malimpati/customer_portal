import { FiShield, FiHome, FiUser, FiMapPin, FiChevronRight } from 'react-icons/fi';

import { Card, CardContent, Typography, Button, LabelValue } from '../../../common/components';

import './PolicySummaryCardUi.css';

import type { PolicySummaryCardUiProps } from './Interfaces';

const PolicySummaryCardView = ({ policies }: PolicySummaryCardUiProps) => {
  return (
    <div className='policy-summary-grid'>
      {policies.map(policy => (
        <Card key={policy.policyNumber} className='policy-summary-card'>
          <CardContent className='policy-summary-content'>
            <div className='policy-header'>
              <div className='policy-header-left'>
                <div className='policy-icon'>
                  {policy.policyType === 'Homeowners' ? (
                    <FiHome size={22} />
                  ) : (
                    <FiShield size={22} />
                  )}
                </div>

                <div className='policy-text-container'>
                  <Typography variant='h3' color='primary' className='policy-title'>
                    {policy.policyType}
                  </Typography>

                  <Typography variant='body2' className='policy-subtitle'>
                    {policy.propertyOrVehicle}
                  </Typography>
                </div>
              </div>

              <div className='policy-status'>{policy.status}</div>
            </div>

            <div className='policy-divider' />

            <div className='policy-details'>
              <LabelValue
                label='POLICY NUMBER'
                value={policy.policyNumber}
                orientation='vertical'
                labelVariant='body2'
                valueVariant='body1'
                className='policy-label-value'
              />

              <LabelValue
                label='RENEWAL DATE'
                value={policy.renewalDate}
                orientation='vertical'
                labelVariant='body2'
                valueVariant='body1'
                className='policy-label-value'
              />
            </div>

            <div className='policy-divider' />

            <div className='policy-footer'>
              <div className='policy-footer-icons'>
                <div className='footer-icon'>
                  <FiUser size={14} />
                </div>

                <div className='footer-icon'>
                  <FiMapPin size={14} />
                </div>
              </div>

              <Button variant='text' color='primary'>
                <span className='manage-link'>
                  Manage Coverage
                  <FiChevronRight />
                </span>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PolicySummaryCardView;
