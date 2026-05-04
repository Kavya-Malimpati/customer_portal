
import './ServicesPage.css';

import AccidentCard from './AccidentCard';
import FeedbackCard from './FeedbackCard/FeedbackCard';
import HelpCard from './HelpCard';
import Offers from './Offers';
import SafetyTipsCard from './SafetyTipsCard';
import RecentAlerts from './RecentAlerts/RecentAlerts';
const ServicesPage = () => {
  return (
    <div className="services-page">

      <div className="services-grid">

        {/* LEFT SIDE */}
        <div className="left-section">
          <HelpCard />
          <AccidentCard />

          <div className="bottom-left">
            <SafetyTipsCard />
            <FeedbackCard />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-section">
          <RecentAlerts />
          <Offers />
        </div>

      </div>

    </div>
  );
};

export default ServicesPage;