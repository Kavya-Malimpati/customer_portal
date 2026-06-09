import { Typography } from '../../../common/components';
import { FiCalendar } from 'react-icons/fi';
import './UpcomingScheduleUi.css';

import type { UpcomingScheduleUiProps } from './Interfaces';

const UpcomingScheduleView = ({ installments }: UpcomingScheduleUiProps) => {
  return (
    <div className='schedule-wrapper'>
      <div className='schedule-card'>
        <div className='schedule-header'>
          <Typography variant='h3' color='primary'>
            Upcoming Schedule
          </Typography>
        </div>
        <div className='schedule-divider'></div>

        {installments.map((item, idx) => (
          <div key={idx}>
            <div className='schedule-row'>
              <div className='schedule-left'>
                <FiCalendar size={18} />
                <div className='schedule-text'>
                  <Typography variant='body1' className='schedule-name'>
                    {item.name}
                  </Typography>
                  <Typography variant='body2' className='schedule-policy'>
                    {item.policyNumber}
                  </Typography>
                </div>
              </div>

              <div className='schedule-right'>
                <Typography variant='body1' className='schedule-amount'>
                  {item.amount}
                </Typography>
                <div className='schedule-status'>{item.status.toUpperCase()}</div>
              </div>
            </div>

            {idx < installments.length - 1 && <div className='schedule-divider'></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingScheduleView;
