import { Typography, Button } from '../../../common/components';
import { useNavigate } from 'react-router-dom';
import './DashboardHeaderUi.css';

const DashboardHeader = () => {
  const navigate = useNavigate();
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
        <Button
          variant='outlined'
          className='help-center-button'
          onClick={() => navigate('/services#help-and-support')}
        >
          Help Center
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
