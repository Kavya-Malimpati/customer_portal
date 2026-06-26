import {
  FiCreditCard,
  FiFileText,
  FiTool,
} from 'react-icons/fi';

import {
  Card,
  CardContent,
  Typography,
} from '../../../common/components';

import './RecentActivityUi.css';

import type { RecentActivityUiProps } from './Interfaces';

const RecentActivityView = ({ activities }: RecentActivityUiProps) => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'payment':
        return (
          <div className='activity-icon activity-payment'>
            <FiCreditCard size={18} />
          </div>
        );

      case 'policy':
        return (
          <div className='activity-icon activity-policy'>
            <FiFileText size={18} />
          </div>
        );

      default:
        return (
          <div className='activity-icon activity-roadside'>
            <FiTool size={18} />
          </div>
        );
    }
  };

  return (
    <div className='recent-activity-wrapper'>
      <Card className='recent-activity-card'>
        <CardContent className='recent-activity-content'>
          <Typography
            variant='h3'
            className='recent-activity-heading'
          >
            Recent Activity
          </Typography>

          {activities.map((activity, index) => (
            <div key={activity.id}>
              <div className='activity-row'>
                {getIcon(activity.icon)}

                <div className='activity-details'>
                  <Typography
                    variant='body1'
                    className='activity-title'
                  >
                    {activity.title}
                  </Typography>

                  <Typography
                    variant='body2'
                    className='activity-description'
                  >
                    {activity.description}
                  </Typography>
                </div>
              </div>

              {index !== activities.length - 1 && (
                <div className='activity-divider' />
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentActivityView;