import { FiHome, FiShield, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, Typography, Button, LabelValue } from '../../../common/components';

import './PolicySummaryCardUi.css';

import type { PolicySummaryCardUiProps, PolicySummary } from './Interfaces';

const PolicySummaryCardView = ({ policies }: PolicySummaryCardUiProps) => {
  const navigate = useNavigate();

  const handlePolicyClick = (policy: PolicySummary) => {
    const policyType = policy.policyType === 'Personal Auto' ? 'personalAuto' : 'homeowners';
    navigate('/policy', { state: { activeTab: policyType } });
  };
  return (
    <Card variant='outlined' id = 'active-policies' className='policy-summary-card'>
      <CardContent className='policy-summary-content'>
        <div className='policy-summary-header'>
          <Typography variant='h3' color='primary'>
            Active Insurance Policies
          </Typography>

          <Button variant='text' color='primary'>
            <span className='view-all-link'>
              View all details
              <FiChevronRight size={16} />
            </span>
          </Button>
        </div>

        <div className='policy-summary-divider' />

        {policies.map((policy: PolicySummary, index) => (
          <div key={policy.id}>
            <div
              className='policy-row'
              onClick={() => handlePolicyClick(policy)}
              style={{ cursor: 'pointer' }}
            >
              <div className='policy-details'>
                <div className='policy-title-row'>
                  <div className='policy-title-left'>
                    <div className='policy-icon'>
                      {policy.policyType === 'Personal Auto' ? (
                        <FiShield size={22} />
                      ) : (
                        <FiHome size={22} />
                      )}
                    </div>

                    <Typography variant='h5' color='primary'>
                      {policy.policyType}
                    </Typography>
                  </div>

                  <span className='policy-status'>{policy.status}</span>
                </div>

                <Typography variant='body2' className='policy-subtitle'>
                  {policy.propertyOrVehicle}
                </Typography>

                <div className='policy-info'>
                  <LabelValue
                    label='POLICY NUMBER'
                    value={policy.policyNumber}
                    orientation='vertical'
                    labelVariant='body2'
                    valueVariant='body1'
                  />

                  <LabelValue
                    label='RENEWAL DATE'
                    value={policy.renewalDate}
                    orientation='vertical'
                    labelVariant='body2'
                    valueVariant='body1'
                  />
                </div>
              </div>

              <div className='policy-actions'>
                <Button variant='contained' className='policy-action-button'>
                  View Limits
                </Button>
              </div>
            </div>

            {index !== policies.length - 1 && <div className='policy-summary-divider' />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PolicySummaryCardView;
