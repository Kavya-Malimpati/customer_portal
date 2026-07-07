import ClaimDocuments from './ClaimDocuments/index.ts';
import AdjusterChat from './Chat/ChatIcon.tsx';
import './Claim.css';
import ActiveClaim from './ActiveClaim/index.ts';
import RoadsideAssistance from './RoadsideAssistance/index.ts';
import ClaimHistory from './ClaimHistory/index.ts';
import RegisterFNOL from './RegisterFNOL/index.ts';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Claims = () => {
  const location = useLocation();
  const locationState = location.state as { target?: string } | null;

  useEffect(() => {
    const targetId =
      location.hash === '#active-claim'
        ? 'active-claim'
        : locationState?.target;

    if (!targetId) {
      return;
    }

    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [location.hash, locationState]);

  return (
    <>
      <main className='claims-page'>
        <section className='claims-row claims-row-single'>
          <RegisterFNOL />
        </section>

        <section className='claims-row claims-row-single' id='roadside-assistance'>
          <RoadsideAssistance />
        </section>

        <section className='claims-row claims-row-single' id='active-claim'>
          <ActiveClaim />
        </section>

        <section className='claims-row claims-two-column'>
          <ClaimDocuments />
        </section>

        <section className='claims-row claims-row-single'>
          <ClaimHistory />
        </section>
      </main>

      <AdjusterChat />
    </>
  );
};

export default Claims;
