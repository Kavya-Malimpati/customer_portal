import { useState } from 'react';

import ClaimsContent from './ClaimsContent';
import PolicyTabs from './components/Tabs/PolicyTabs';

import { autoClaims, homeClaims } from './mockData';

import './Claim.css';

const Claims = () => {
  const [policyType, setPolicyType] = useState<'auto' | 'home'>('auto');

  return (
    <div className='claims-page'>
      <PolicyTabs
        value={policyType}
        autoCount={autoClaims.length}
        homeCount={homeClaims.length}
        onChange={setPolicyType}
      />

      <ClaimsContent
        key={policyType}
        policyType={policyType}
        claims={policyType === 'auto' ? autoClaims : homeClaims}
      />
    </div>
  );
};

export default Claims;
