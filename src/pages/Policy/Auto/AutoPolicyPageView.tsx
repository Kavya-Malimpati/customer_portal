import { useState } from 'react';
import type { AutoPolicy } from './Cards/interfaces';

import {
  AutoPolicyHeaderCardView,
  DigitalIdCardView,
  AwaitingSignatureCardView,
  PolicySummaryCardView,
  ChangeRequestsCardView,
  RenewalPackageCardView,
  PremiumInvoicesCardView,
  BinderLetterCardView,
  RenewalHistoryCardView,
} from './Cards';

import '../CommonViews/AutoPolicyView.css';

interface Props {
  policy: AutoPolicy;
  onBack: () => void;
}

const AutoPolicyPageView = ({ policy }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='min-h-screen w-full bg-(--bg-section-alt) p-(--space-4)'>
      <div className='max-w-(--container-max-width) mx-auto flex flex-col gap-(--space-6)'>
        <AutoPolicyHeaderCardView policy={policy} />

        <div className='grid grid-cols-12 gap-(--space-6)'>
          {/* LEFT */}
          <div className='col-span-12 xl:col-span-4 flex flex-col gap-(--space-6)'>
            <DigitalIdCardView policy={policy} />
            <AwaitingSignatureCardView />
          </div>

          {/* RIGHT */}
          <div className='col-span-12 xl:col-span-8 flex flex-col gap-(--space-6)'>
            <PolicySummaryCardView
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

export default AutoPolicyPageView;
