import { FiCreditCard, FiFileText, FiTool } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, Typography } from '../../../common/components';

import './RecentActivityUi.css';

import type { RecentActivityUiProps } from './Interfaces';

const RecentActivityView = ({ activities }: RecentActivityUiProps) => {
  const navigate = useNavigate();

  return (
    <div className='recent-activity-wrapper'>
      <Card className='recent-activity-card'>
        <CardContent className='recent-activity-content'>
          <Typography variant='h3' className='recent-activity-heading'>
            Recent Activity
          </Typography>

          {activities.map((activity, index) => {
            let icon;

            if (activity.icon === 'payment') {
              icon = <FiCreditCard size={18} />;
            } else if (activity.icon === 'policy') {
              icon = <FiFileText size={18} />;
            } else {
              icon = <FiTool size={18} />;
            }

            return (
              <div key={activity.id}>
                <div
                  className='activity-row'
                  style={{ cursor: 'pointer' }}
                  onClick={() => {
                    if (activity.icon === 'payment') {
                      navigate('/billing', {
                        state: { target: 'billing-history-footer' },
                      });
                    } else if (activity.icon === 'policy') {
                      navigate('/policy');
                    } else {
                      navigate('/services');
                    }
                  }}
                >
                  <div className={`activity-icon activity-${activity.icon}`}>{icon}</div>

                  <div className='activity-details'>
                    <Typography variant='body1' className='activity-title'>
                      {activity.title}
                    </Typography>

                    <Typography variant='body2' className='activity-description'>
                      {activity.description}
                    </Typography>
                  </div>
                </div>

                {index !== activities.length - 1 && <div className='activity-divider' />}
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentActivityView;
