import './ServicesPage.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Typography } from '../../common/components';
import AccidentCard from './AccidentCard';
import FeedbackCard from './FeedbackCard';
import HelpCard from './HelpCard';
import Offers from './Offers';
import RecentAlerts from './RecentAlerts';
import SafetyTipsCard from './SafetyTipsCard';

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#safety-tips') {
      const target = document.getElementById('safety-tips');
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <>
      <div className='support-guidance-section'>
        <Typography variant='h1' color='primary' className='support-guidance-title'>
          Support & Guidance Hub
        </Typography>
        <Typography variant='body1' color='secondary' className='support-guidance-subtitle'>
          Your dedicated center for claim assistance, safety guidance, and personalized care.
        </Typography>
      </div>
      <div className='services-page'>
        <div className='services-grid'>
          <div className='left-section'>
            <HelpCard />
            <AccidentCard />

            <div className='bottom-left'>
              <SafetyTipsCard />
              <FeedbackCard />
            </div>
          </div>

          <div className='right-section'>
            <RecentAlerts />
            <Offers />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
