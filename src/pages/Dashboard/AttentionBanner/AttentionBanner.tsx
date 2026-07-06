import { Typography, Button } from '../../../common/components';
import { useEffect } from 'react';

import { FiAlertTriangle } from 'react-icons/fi';
import './AttentionBanner.css';
import { useNavigate ,useLocation } from 'react-router-dom';

import {  } from 'react-router-dom';
const AttentionBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return (
    <div className='attention-banner'>
      <div className='attention-banner-left'>
        <div className='attention-icon'>
          <FiAlertTriangle size={22} />
        </div>

        <div className='attention-content'>
          <Typography variant='body1' className='attention-label'>
            ATTENTION REQUIRED
          </Typography>

          <Typography variant='body1' className='attention-message'>
            Evidence requested for Claim #PC-9902 (Rear-End Collision)
          </Typography>
        </div>
      </div>

      <Button
        variant='contained'
        className='resolve-button'
        onClick={() => navigate('/claims#active-claim')}
      >
        Resolve Now
      </Button>
    </div>
  );
};

export default AttentionBanner;
