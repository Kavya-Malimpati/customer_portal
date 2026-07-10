import { useState } from 'react';
import type { HomeownersPolicy } from './interfaces';
import type { PolicyHeaderData } from '../CommonViews/interfaces';

import { DigitalIdCardView, HomeownersPolicySummaryCardView } from './Cards';

import {
  AwaitingSignatureCardView,
  PolicyHeaderCardView,
  ChangeRequestsCardView,
  PremiumInvoicesCardView,
  BinderLetterCardView,
  RenewalPackageCardView,
  RenewalHistoryCardView,
} from '../CommonViews';

import { getHomeownersPremiumInvoicesApi } from './Api/homeownersPremiumInvoicesApi';
import { getHomeownersBinderLetterApi } from './Api/homeownersBinderLetterApi';
import { getHomeownersRenewalPackageApi } from './Api/homeownersRenewalPackageApi';
import { getHomeownersAwaitingSignatureApi } from './Api/homeownersAwaitingSignatureApi';
import { getHomeownersChangeRequestsApi } from './Api/homeownersChangeRequestsApi';
import { getHomeownersRenewalHistoryApi } from './Api/homeownersRenewalHistoryApi';

import Modal from '../../../common/components/Modal';
import { Typography, Button, LabelValue } from '../../../common/components';
import '../styles/PolicyPageView.css';

interface Props {
  policy: HomeownersPolicy;
  headerData: PolicyHeaderData;
  onBack: () => void;
}

const HomeownersPolicyPageView = ({ policy, headerData }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isRenewModalOpen, setIsRenewModalOpen] = useState(false);
  const [hasRenewed, setHasRenewed] = useState(false);

  const handleRenew = () => {
    setIsRenewModalOpen(true);
    setHasRenewed(false);
  };

  const handleConfirmRenewal = () => {
    setHasRenewed(true);
  };

  return (
    <div className='policy-page'>
      <div className='policy-container'>
        <PolicyHeaderCardView
          policy={headerData}
          onRequestChange={() => {}}
          onRenew={handleRenew}
        />

        <div className='policy-grid'>
          {/* LEFT */}
          <div className='policy-left'>
            <DigitalIdCardView policy={policy} />
            <AwaitingSignatureCardView fetchAwaitingSignature={getHomeownersAwaitingSignatureApi} />
          </div>

          {/* RIGHT */}
          <div className='policy-right'>
            <HomeownersPolicySummaryCardView
              policy={policy}
              isExpanded={isExpanded}
              onToggleExpand={() => setIsExpanded(p => !p)}
            />
            <ChangeRequestsCardView fetchChangeRequests={getHomeownersChangeRequestsApi} />
          </div>

          {/* DOCUMENTS ROW */}
          <div className='policy-full-row'>
            <div className='policy-documents-grid'>
              <RenewalPackageCardView fetchRenewalPackage={getHomeownersRenewalPackageApi} />
              <PremiumInvoicesCardView fetchInvoices={getHomeownersPremiumInvoicesApi} />
              <BinderLetterCardView fetchBinderLetter={getHomeownersBinderLetterApi} />
            </div>
          </div>

          <div className='policy-full-row'>
            <RenewalHistoryCardView fetchRenewalHistory={getHomeownersRenewalHistoryApi} />
          </div>
        </div>

        <Modal
          isOpen={isRenewModalOpen}
          onClose={() => setIsRenewModalOpen(false)}
          title='Policy Renewal'
          maxWidth='500px'
        >
          {hasRenewed ? (
            <Typography variant='body1'>Your policy has been renewed successfully.</Typography>
          ) : (
            <div className='renewal-modal-content'>
              <LabelValue label='Policy Number' value={headerData.policyNumber} />
              <LabelValue label='Policy Expiry Date' value={headerData.endDate} />
              <LabelValue label='Renewal Premium' value={policy.endDate} />

              <Button variant='contained' fullWidth onClick={handleConfirmRenewal}>
                Confirm Renewal
              </Button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default HomeownersPolicyPageView;
