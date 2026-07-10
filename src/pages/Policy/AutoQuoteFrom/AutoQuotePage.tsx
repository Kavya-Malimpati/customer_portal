import { useLocation, useNavigate } from 'react-router-dom';

import PageEngine from '../../../common/components/PageEngine/PageEngine';
import CustomerDetails from '../CommonViews/StartNewQuote';
import AutoCoverage from './AutoCoverageSelection';
import PremiumEstimate from './AutoPremiumEstimate';
import QuoteSummary from './AutoQuoteSummary/QuoteSummary';
import VehicleDetails from './VehicleDriverDetails';

const AutoQuotePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const initialData = (state as { initialData?: Record<string, unknown> })?.initialData ?? {};

  return (
    <PageEngine
      submitButtonName='Submit Quote'
      initialData={initialData}
      steps={[
        {
          id: 'customer',
          title: 'Customer Details',
          component: CustomerDetails,
        },
        {
          id: 'vehicle',
          title: 'Vehicle Details',
          component: VehicleDetails,
        },
        {
          id: 'coverage',
          title: 'Coverage Selection',
          component: AutoCoverage,
        },
        {
          id: 'premium',
          title: 'Premium Estimate',
          component: PremiumEstimate,
        },
        {
          id: 'review',
          title: 'Review Quote',
          component: QuoteSummary,
        },
      ]}
      onSubmit={data => {
        navigate('/policy', {
          state: data,
        });
      }}
      onFirstStepBack={() => navigate(-1)}
    />
  );
};

export default AutoQuotePage;
