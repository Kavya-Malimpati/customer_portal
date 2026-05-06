import './ServicesPage.css';

import { Typography } from '../../common/components';
import AccidentCard from './AccidentCard';
import FeedbackCard from './FeedbackCard';
import HelpCard from './HelpCard';
import Offers from './Offers';
import RecentAlerts from './RecentAlerts';
import SafetyTipsCard from './SafetyTipsCard';

const ServicesPage = () => {
  return (
    <>
      {/* Support & Guidance Hub Section */}
      <div className='support-guidance-section'>
        <Typography variant='h2' color='primary' className='support-guidance-title'>
          Support & Guidance Hub
        </Typography>
        <Typography variant='body1' color='secondary' className='support-guidance-subtitle'>
          Your dedicated center for claim assistance, safety guidance, and personalized care.
        </Typography>
      </div>
      <div className='services-page'>
        <div className='services-grid'>
          {/* LEFT SIDE */}
          <div className='left-section'>
            <HelpCard />
            <AccidentCard />

            <div className='bottom-left'>
              <SafetyTipsCard />
              <FeedbackCard />
            </div>
          </div>

          {/* RIGHT SIDE */}
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
