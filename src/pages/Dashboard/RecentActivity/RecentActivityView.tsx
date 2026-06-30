import { FiCreditCard, FiFileText, FiTool } from 'react-icons/fi';

import { Card, CardContent, Typography } from '../../../common/components';

import './RecentActivityUi.css';

import type { RecentActivityUiProps } from './Interfaces';

const iconMap = {
  payment: <FiCreditCard size={18} />,
  policy: <FiFileText size={18} />,
  roadside: <FiTool size={18} />,
};

const RecentActivityView = ({ activities }: RecentActivityUiProps) => {
  return (
    <div className='recent-activity-wrapper'>
      <Card className='recent-activity-card'>
        <CardContent className='recent-activity-content'>
          <Typography variant='h3' className='recent-activity-heading'>
            Recent Activity
          </Typography>

          {activities.map((activity, index) => (
            <div key={activity.id}>
              <div className='activity-row'>
                <div className={`activity-icon activity-${activity.icon}`}>
                  {iconMap[activity.icon as keyof typeof iconMap]}
                </div>

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
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentActivityView;
