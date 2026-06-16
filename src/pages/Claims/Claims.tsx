// import EvidenceVault from './EvidenceVault/index.ts';
import ClaimDocuments from './ClaimDocuments/index.ts';
import AdjusterChat from './Chat/ChatIcon.tsx';
import './Claim.css';
import ActiveClaim from './ActiveClaim/index.ts';
import RoadsideAssistance from './RoadsideAssistance/index.ts';
import ClaimHistory from './ClaimHistory/index.ts';
import RegisterFNOL from './RegisterFNOL/index.ts';

const Claims = () => {
  return (
    <>
      <main className='claims-page'>
        <section className='claims-row claims-row-single'>
          <RegisterFNOL />
        </section>

        <section className='claims-row claims-row-single'>
          <RoadsideAssistance />
        </section>

        <section className='claims-row claims-row-single'>
          <ActiveClaim />
        </section>

{/* you dont need to seperate components for this one is enough see how you can do it */}
        <section className='claims-row claims-two-column'>
          {/* <EvidenceVault /> */}
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