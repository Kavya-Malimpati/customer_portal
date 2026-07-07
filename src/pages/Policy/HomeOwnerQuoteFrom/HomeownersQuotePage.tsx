import { useNavigate } from 'react-router-dom';

import PageEngine from '../../../common/components/PageEngine/PageEngine';
import CustomerDetails from '../CommonViews/StartNewQuote';
import PremiumEstimate from './HomeOwnerPremiumEstimate';
import QuoteSummary from './HomeOwnerQuoteSummary';
import HomeownersCoverage from './HomeownersCoverage';
import HomeownersPropertyDetails from './HomeownersPropertyDetails';

const HomeownersQuotePage = () => {
  const navigate = useNavigate();

  return (
    <PageEngine
      submitButtonName='Submit Quote'
      steps={[
        {
          id: 'customer',
          title: 'Customer Details',
          component: CustomerDetails,
        },
        {
          id: 'property',
          title: 'HomeOwner Property Details',
          component: HomeownersPropertyDetails,
        },
        {
          id: 'coverage',
          title: 'Coverage Selection',
          component: HomeownersCoverage,
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

export default HomeownersQuotePage;
