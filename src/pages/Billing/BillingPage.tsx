import './BillingPage.css';
import { Typography, Button } from '../../common/components';
import { FiDownload } from 'react-icons/fi';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PremiumPayment from './OnlinePremiumPayments/PaymentPayments';
import AutoPayCard from './Autopay';
import ClaimPayout from './ClaimPayment/ClaimPayout';
import UpcomingSchedule from './UpcomingSchedule/UpcomingSchedule';
import PaymentMethods from './PaymentMethods';
import BillingHistory from './BillingHistory';

const billingStatements = [
  {
    id: 1,
    title: 'Billing Statement – Jan 2026',
    downloadUrl: '/documents/download/auto-policy-declaration.pdf',
  },
  {
    id: 2,
    title: 'Billing Statement – Feb 2026',
    downloadUrl: '/documents/download/home-bill-april-2025.pdf',
  },
  {
    id: 3,
    title: 'Billing Statement – Mar 2026',
    downloadUrl: '/documents/download/endorsement-notice.pdf',
  },
];

const BillingPage = () => {
  const location = useLocation();
  const locationState = location.state as { target?: string } | null;

  useEffect(() => {
    const targetId = locationState?.target;

    if (!targetId) {
      return;
    }

    const timeoutId = setTimeout(() => {
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [locationState]);

  const hasStatements = billingStatements.length > 0;

  const handleDownloadAllStatements = () => {
    billingStatements.forEach(({ downloadUrl, title }) => {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${title}.pdf`;
      link.click();
    });
  };

  return (
    <>
      <div className='billing-section'>
        <div className='billing-header'>
          <div className='billing-header-content'>
            <Typography variant='h2' color='primary' className='billing-title'>
              Billing Dashboard
            </Typography>

            <Typography variant='body1' className='billing-subtitle'>
              Manage your premiums, payment methods, and claim payouts.
            </Typography>
          </div>

          <div className='billing-download-btn'>
            <Button
              variant='outlined'
              size='small'
              disabled={!hasStatements}
              onClick={handleDownloadAllStatements}
            >
              <div className='download-btn-content'>
                <FiDownload className='download-icon' />
                <span>Download All Statements</span>
              </div>
            </Button>

            {!hasStatements && (
              <Typography variant='body2' className='billing-no-statements'>
                No statements available.
              </Typography>
            )}
          </div>
        </div>
      </div>

      <div className='billing-grid'>
        <div className='grid-row'>
          <div id='premium-payment'>
            <PremiumPayment />
          </div>
          <AutoPayCard />
          <ClaimPayout />
        </div>

        <div className='grid-row'>
          <div id='payment-methods'>
            <PaymentMethods />
          </div>
          <UpcomingSchedule />
        </div>

        <div className='grid-row'>
          <div id='billing-history'>
            <BillingHistory />
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingPage;
