import { useState } from 'react';
import type { HomeownersPolicy } from './Cards/interfaces';

import {
  HomeownersHeaderCardView,
  DigitalIdCardView,
  AwaitingSignatureCardView,
  HomeownersPolicySummaryCardView,
  ChangeRequestsCardView,
  RenewalPackageCardView,
  PremiumInvoicesCardView,
  BinderLetterCardView,
  RenewalHistoryCardView,
} from './Cards';

import '../CommonViews/AutoPolicyView.css';

interface Props {
  policy: HomeownersPolicy;
  onBack: () => void;
}

const HomeownersPolicyPageView = ({ policy }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='min-h-screen w-full bg-(--bg-section-alt) p-(--space-4)'>
      <div className='max-w-(--container-max-width) mx-auto flex flex-col gap-(--space-6)'>
        <HomeownersHeaderCardView policy={policy} />

        <div className='grid grid-cols-12 gap-(--space-6)'>
          {/* LEFT */}
          <div className='col-span-12 xl:col-span-4 flex flex-col gap-(--space-6)'>
            <DigitalIdCardView policy={policy} />
            <AwaitingSignatureCardView />
          </div>

          {/* RIGHT */}
          <div className='col-span-12 xl:col-span-8 flex flex-col gap-(--space-6)'>
            <HomeownersPolicySummaryCardView
              policy={policy}
              isExpanded={isExpanded}
              onToggleExpand={() => setIsExpanded(p => !p)}
            />
            <ChangeRequestsCardView />
          </div>

          {/* DOCUMENTS ROW */}
          <div className='col-span-12'>
            <div className='grid grid-cols-12 gap-(--space-6)'>
              <RenewalPackageCardView />
              <PremiumInvoicesCardView />
              <BinderLetterCardView />
            </div>
          </div>

          <div className='col-span-12'>
            <RenewalHistoryCardView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeownersPolicyPageView;
