import { useEffect, useState } from 'react';

import ActiveClaimView from './ActiveClaimView';

import type { ActiveClaimData } from './Interfaces';
import getActiveClaimApi from './ActiveClaimApi';
import { useNavigate } from 'react-router-dom';

const ActiveClaim = () => {
  const [claim, setClaim] = useState<ActiveClaimData | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleNavigateToClaims = () => {
    navigate('/claims#active-claim');
  };
  const handleNavigateToChat = () => {
    navigate('/claims#chat');
  };

  const handleNavigateToEvidenceVault = () => {
    navigate('/claims#evidence-vault');
  };

  const handleNavigateToRoadside = () => {
    navigate('/claims#roadside-assistance');
  };

  useEffect(() => {
    getActiveClaimApi().then(data => {
      setClaim(data);
      setLoading(false);
    });
  }, []);

  if (loading || !claim) {
    return null;
  }

  return (
    <ActiveClaimView
      claim={claim}
      onNavigateToClaims={handleNavigateToClaims}
      onNavigateToChat={handleNavigateToChat}
      onNavigateToEvidenceVault={handleNavigateToEvidenceVault}
      onNavigateToRoadside={handleNavigateToRoadside}
    />
  );
};

export default ActiveClaim;
