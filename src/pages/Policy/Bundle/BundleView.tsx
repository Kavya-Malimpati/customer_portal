

import BundleHeader from './Components/BundleHeader';
import CurrentPolicies from './Components/CurrentPolicies';

import type { BundleViewProps } from './Interface';

import './Bundle.css';
import BundleBenefits from './Components/BundleBenefits';
import BundleSavings from './Components/BundleSavings';
import BundleFooter from './Components/BundleFooter';
import { Card, CardContent, Typography } from '../../../common/components';
// import BundleSuccessModal from './Components/BundleSuccessModal';

const BundleView = ({
  data,
  onAutoPolicyClick,
  onHomePolicyClick,
  onGetBundleQuote,
  onBundlePolicies,
}: BundleViewProps) => {
  return (
    <>
      <div className='bundle-page'>
        <BundleHeader maxSavings={data.savings.discountPercentage} />

        <CurrentPolicies
          autoPolicy={data.autoPolicy}
          homePolicy={data.homePolicy}
          onAutoPolicyClick={onAutoPolicyClick}
          onHomePolicyClick={onHomePolicyClick}
        />

        <div className='bundle-content-grid'>
          <Card variant='outlined-raised'>
            <CardContent>
              <Typography variant='h4' className='bundle-section-title'>
                Why Bundle?
              </Typography>

              <BundleBenefits />
            </CardContent>
          </Card>

          <BundleSavings savings={data.savings} />
        </div>

        <BundleFooter onGetBundleQuote={onGetBundleQuote} onBundlePolicies={onBundlePolicies} />
      </div>
    </>
  );
};

export default BundleView;
