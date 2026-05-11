import './BillingPage.css';
import { Typography, Button } from '../../common/components';
import { FiDownload } from 'react-icons/fi';
import PremiumPayment from './OnlinePremiumPayments/PaymentPayments';
import AutoPayCard from './Autopay';
import ClaimPayout from './ClaimPayment/ClaimPayout';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import PaymentMethods from './PaymentMethods';
import BillingHistory from './BillingHistory';

const BillingPage = () => {
  return (
    <>
      <div className="billing-section">
        <div className="billing-header">
          <div className="billing-header-content">
            <Typography variant="h2" color="primary" className="billing-title">
              Billing Dashboard
            </Typography>

            <Typography variant="body1" className="billing-subtitle">
              Manage your premiums, payment methods, and claim payouts.
            </Typography>
          </div>

          <div className="billing-download-btn">
            <Button variant="outlined" size="small">
              <div className="download-btn-content">
                <FiDownload className="download-icon" />
                <span>Download All Statements</span>
              </div>
            </Button>
          </div>
        </div>
      </div>

      <div className="billing-grid">
        <div className="grid-row">
          <PremiumPayment />
          <AutoPayCard />
          <ClaimPayout />
        </div>

        <div className="grid-row">
          <PaymentMethods />
          <UpcomingSchedule />
        </div>

        <div className="grid-row">
          <BillingHistory />
        </div>
      </div>
    </>
  );
};

export default BillingPage;