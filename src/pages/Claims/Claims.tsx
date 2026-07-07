import ClaimDocuments from './ClaimDocuments/index.ts';
import AdjusterChat from './Chat/ChatIcon.tsx';
import './Claim.css';
import ActiveClaim from './ActiveClaim/index.ts';
import type { ActiveClaim as ActiveClaimType } from './ActiveClaim/Interface';
import RoadsideAssistance from './RoadsideAssistance/index.ts';
import ClaimHistory from './ClaimHistory/index.ts';
import RegisterFNOL from './RegisterFNOL/index.ts';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ClaimInfo {
  claimNumber: string;
  vehicle: string;
}

const selectedClaimA: ClaimInfo = {
  claimNumber: 'Claim #PC-9902',
  vehicle: 'Rear-End Collision',
};

const selectedClaimB: ClaimInfo = {
  claimNumber: 'Claim #PC-9903',
  vehicle: 'Glass & Windshield',
};

const activeClaimA: ActiveClaimType = {
  claimId: 'PC-9902',
  title: 'Rear-End Collision',
  filedDate: 'May 05, 2026',
  status: 'in-review',
  estimatedResolution: 'May 25, 2026',
  damageAmount: '$3,420.00',
};

const activeClaimB: ActiveClaimType = {
  claimId: 'PC-9903',
  title: 'Glass & Windshield',
  filedDate: 'Jun 12, 2026',
  status: 'reported',
  estimatedResolution: 'Jun 30, 2026',
  damageAmount: '$1,120.00',
};

const Claims = () => {
  const [selectedClaim, setSelectedClaim] = useState<ClaimInfo>(selectedClaimA);
  const [activeClaimData, setActiveClaimData] = useState<ActiveClaimType>(activeClaimA);

  const handleChangeClaim = () => {
    const isClaimA = selectedClaim.claimNumber === selectedClaimA.claimNumber;
    setSelectedClaim(isClaimA ? selectedClaimB : selectedClaimA);
    setActiveClaimData(isClaimA ? activeClaimB : activeClaimA);
  };

  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(location.hash.substring(1));

      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [location.hash]);
  return (
    <>
      <main className='claims-page'>
        <section id='register-fnol' className='claims-row claims-row-single'>
          <RegisterFNOL selectedClaim={selectedClaim} onChangeClaim={handleChangeClaim} />
        </section>

        <section id='roadside-assistance' className='claims-row claims-row-single'>
          <RoadsideAssistance />
        </section>

        <section id='active-claim' className='claims-row claims-row-single'>
          <ActiveClaim activeClaimData={activeClaimData} />
        </section>

        <section className='claims-row claims-two-column'>
          <ClaimDocuments />
        </section>

        <section className='claims-row claims-row-single'>
          <ClaimHistory />
        </section>
      </main>

      <AdjusterChat key={location.hash} initialOpen={location.hash === '#chat'} />
    </>
  );
};

export default Claims;
