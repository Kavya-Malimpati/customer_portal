import {
  Card,
  CardContent,
  Typography,
  Button,
} from '../../../../common/components';

import type { Claim } from '../../types';

interface Props {
  claim: Claim;
  selected: boolean;
  onClick: () => void;
}

const ClaimCard = ({
  claim,
  selected,
  onClick,
}: Props) => {
  return (
    <Card
      className={`claim-card ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <CardContent>

        <div className="claim-card-top">

          <Typography variant="caption">
            {claim.incidentDate}
          </Typography>

          <span className="claim-card-status">
            {claim.status}
          </span>

        </div>

        <Typography
          variant="body1"
          color='primary'
          className="claim-card-title"
        >
          {claim.title}
        </Typography>

        <Typography variant="body2">
          {claim.incidentType}
        </Typography>

        <Typography
          variant="caption"
          className="claim-card-number"
        >
          {claim.claimNumber}
        </Typography>

        <Button
          variant="text"
          className="claim-card-button"
        >
          View Details
        </Button>

      </CardContent>
    </Card>
  );
};

export default ClaimCard;