import { useState } from 'react';
import type { AutoPolicy } from './interfaces';
import type { PolicyHeaderData } from '../CommonViews/interfaces';

import { DigitalIdCardView, AutoPolicySummaryCardView } from './Cards';

import {
  PolicyHeaderCardView,
  AwaitingSignatureCardView,
  ChangeRequestsCardView,
  PremiumInvoicesCardView,
  BinderLetterCardView,
  RenewalPackageCardView,
  RenewalHistoryCardView,
} from '../CommonViews';

import { getAutoPremiumInvoicesApi } from './Api/autoPremiumInvoicesApi';
import { getAutoBinderLetterApi } from './Api/autoBinderLetterApi';
import { getAutoRenewalPackageApi } from './Api/autoRenewalPackageApi';
import { getAutoAwaitingSignatureApi } from './Api/autoAwaitingSignatureApi';
import { getAutoChangeRequestsApi } from './Api/autoChangeRequestsApi';
import { getAutoRenewalHistoryApi } from './Api/autoRenewalHistoryApi';

import Modal from '../../../common/components/Modal';
import { Typography, Button, LabelValue } from '../../../common/components';
import '../styles/PolicyPageView.css';
interface Props {
  policy: AutoPolicy;
  headerData: PolicyHeaderData;
  onBack: () => void;
}

const AutoPolicyPageView = ({ policy, headerData }: Props) => {
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
            <AwaitingSignatureCardView fetchAwaitingSignature={getAutoAwaitingSignatureApi} />
          </div>

          {/* RIGHT */}
          <div className='policy-right'>
            <AutoPolicySummaryCardView
              policy={policy}
              isExpanded={isExpanded}
              onToggleExpand={() => setIsExpanded(p => !p)}
            />
            <ChangeRequestsCardView fetchChangeRequests={getAutoChangeRequestsApi} />
          </div>

          {/* DOCUMENTS ROW */}
          <div className='policy-full-row'>
            <div className='policy-documents-grid'>
              <RenewalPackageCardView fetchRenewalPackage={getAutoRenewalPackageApi} />
              <PremiumInvoicesCardView fetchInvoices={getAutoPremiumInvoicesApi} />
              <BinderLetterCardView fetchBinderLetter={getAutoBinderLetterApi} />
            </div>
          </div>

          <div className='policy-full-row'>
            <RenewalHistoryCardView fetchRenewalHistory={getAutoRenewalHistoryApi} />
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
              <LabelValue label='Renewal Premium' value={policy.renewalPremium} />

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

export default AutoPolicyPageView;
