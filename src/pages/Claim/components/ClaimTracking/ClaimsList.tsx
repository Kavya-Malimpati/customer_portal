import { Typography } from '../../../../common/components';
import type { Claim } from '../../types';

import ClaimCard from './ClaimCard';

interface Props {
  claims: Claim[];
  selectedClaim: Claim;
  onSelectClaim: (claim: Claim) => void;
}

const ClaimsList = ({
  claims,
  selectedClaim,
  onSelectClaim,
}: Props) => {
  return (
    <div className="claims-list">
      <Typography variant="h5" color='primary'>Your Claims</Typography>

      {claims.map((claim) => (
        <ClaimCard
          key={claim.id}
          claim={claim}
          selected={claim.id === selectedClaim.id}
          onClick={() => onSelectClaim(claim)}
        />
      ))}
    </div>
  );
};

export default ClaimsList;