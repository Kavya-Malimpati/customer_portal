import { useState } from 'react';

import type { Claim } from './types';

import ClaimsTracking from './components/ClaimTracking/ClaimsTracking';
import ScheduleInspection from './components/ScheduleInspection';
import RiskPrevention from './components/RiskPrevention';
import FeatureTabs from './components/Tabs/FeatureTabs';

interface Props {
  policyType: 'auto' | 'home';
  claims: Claim[];
}

const ClaimsContent = ({
  policyType,
  claims,
}: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="claims-content-wrapper">
      <FeatureTabs
        value={activeTab}
        policyType={policyType}
        onChange={setActiveTab}
      />

      {activeTab === 0 && (
        <ClaimsTracking claims={claims} />
      )}

      {activeTab === 1 && (
        <ScheduleInspection policy={policyType} />
      )}

      {activeTab === 2 && (
        <RiskPrevention policy={policyType} />
      )}
    </div>
  );
};

export default ClaimsContent;