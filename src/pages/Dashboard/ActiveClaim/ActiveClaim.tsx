import { useEffect, useState } from 'react';

import ActiveClaimView from './ActiveClaimView';

import type { ActiveClaimData } from './Interfaces';
import getActiveClaimApi from './ActiveClaimApi';

const ActiveClaim = () => {
  const [claim, setClaim] = useState<ActiveClaimData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getActiveClaimApi().then(data => {
      setClaim(data);
      setLoading(false);
    });
  }, []);

  if (loading || !claim) {
    return null;
  }

  return <ActiveClaimView claim={claim} />;
};

export default ActiveClaim;
