import { useState } from 'react';

import type { Claim } from '../../types';

import ClaimsList from './ClaimsList';
import ClaimDetails from './ClaimDetails';

interface Props {
  claims: Claim[];
}

const ClaimsTracking = ({ claims }: Props) => {
  const [selectedClaim, setSelectedClaim] = useState(claims[0]);

  return (
    <div className='claims-layout'>
      <aside className='claims-sidebar'>
        <ClaimsList
          claims={claims}
          selectedClaim={selectedClaim}
          onSelectClaim={setSelectedClaim}
        />
      </aside>

      <section className='claims-content'>
        <ClaimDetails claim={selectedClaim} />
      </section>
    </div>
  );
};

export default ClaimsTracking;
