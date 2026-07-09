import { useState } from 'react';

import type { Claim } from './types';

import FeatureTabs from './components/Tabs/FeatureTabs';

import RegisterFNOL from './RegisterFNOL';
import ClaimsTracking from './components/ClaimTracking/ClaimsTracking';
import ScheduleInspection from './components/ScheduleInspection';
import RiskPrevention from './components/RiskPrevention';
import RoadsideAssistance from '../Claims/RoadsideAssistance';
import GlassWindshield from '../Claims/GlassWindshield';
import ClaimHistory from './ClaimHistory';
import { glassRepairInfo } from '../Claims/GlassWindshield/mockData';

interface Props {
  policyType: 'auto' | 'home';
  claims: Claim[];
}

const ClaimsContent = ({ policyType, claims }: Props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='claims-content-wrapper'>
      <section className='claims-section'>
        <FeatureTabs value={activeTab} onChange={setActiveTab} />

        {activeTab === 0 && <ClaimsTracking claims={claims} />}

        {activeTab === 1 && <ScheduleInspection policy={policyType} />}

        {activeTab === 2 && <RiskPrevention policy={policyType} />}
      </section>

      <section className='claims-section'>
        <RegisterFNOL policyType={policyType} />
      </section>

      {policyType === 'auto' && (
        <>
          <section className='claims-section'>
            <GlassWindshield repairInfo={glassRepairInfo} onRequestRepair={() => {}} />
          </section>

          <section className='claims-section'>
            <RoadsideAssistance />
          </section>
        </>
      )}

      <section className='claims-section'>
        <ClaimHistory policyType={policyType} />
      </section>
    </div>
  );
};

export default ClaimsContent;
