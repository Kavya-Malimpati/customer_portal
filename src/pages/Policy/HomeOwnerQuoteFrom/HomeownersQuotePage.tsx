import PageEngine from '../../../common/PageEngine';
import { useNavigate } from 'react-router-dom';
import CustomerDetails from '../CommonViews/StartNewQuote';
import HomeownersCoverage from './HomeownersCoverage';
import HomeownersPropertyDetails from './HomeownersPropertyDetails';
import PremiumEstimate from './HomeOwnerPremiumEstimate';
import QuoteSummary from './HomeOwnerQuoteSummary';

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
    />
  );
};

export default HomeownersQuotePage;