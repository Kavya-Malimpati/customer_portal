import { Typography, Button } from '../../../common/components';
import { FiBell } from 'react-icons/fi';

import './DashboardHeaderUi.css';

const DashboardHeader = () => {
  return (
    <div className='dashboard-header'>
      <div className='dashboard-header-left'>
        <Typography variant='h3' color='primary' className='dashboard-title'>
          Good Morning, Alexander
        </Typography>

        <Typography variant='body1' color='body' className='dashboard-subtitle'>
          Welcome back. You have 2 active claims needing attention.
        </Typography>
      </div>

      <div className='dashboard-header-right'>
        <div className='notification-container'>
          <FiBell size={22} />
          <span className='notification-badge' />
        </div>

        <Button variant='outlined' className='help-center-button'>
          Help Center
        </Button>
        <div className='profile-avatar'>A</div>
      </div>
    </div>
  );
};

export default DashboardHeader;
