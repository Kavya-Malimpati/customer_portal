import { FaUniversity } from 'react-icons/fa';

import {
  Card,
  CardContent,
  Typography,
  Button,
} from '../../../common/components';

import LinearProgress from '../../../common/components/Progress/LinearProgress';

import './ClaimPayoutUi.css';

import type { ClaimPayoutUiProps } from './Interfaces';

const ClaimPayoutView = ({
  claimId,
  status,
  expectedArrival,
  method,
  onChangeClick,
}: ClaimPayoutUiProps) => {
  const progressValue =
    status === 'approved'
      ? 25
      : status === 'processing'
        ? 50
        : 100;

  return (
    <div className="claim-wrapper">
      <Card
        variant="outlined"
        className="claim-card"
      >
        <CardContent className="claim-content">
          <div className="claim-header">
            <FaUniversity
              size={18}
              color="#198754"
            />

            <Typography
              variant="h3"
              color="primary"
            >
              Claim Payouts
            </Typography>
          </div>

          <Typography
            variant="body1"
            color="primary"
            className="claim-id"
          >
            Claim #{claimId}
          </Typography>

          <div className="claim-status">
            <span className="status-processing">
              {status.toUpperCase()}
            </span>
          </div>

          <div className="claim-progress">
            <LinearProgress
              variant="determinate"
              value={progressValue}
              size="sm"
              color="success"
            />
          </div>

          <Typography
            variant="body2"
            className="claim-arrival"
          >
            Expected arrival: {expectedArrival}
          </Typography>

          <div className="claim-divider" />

          <div className="claim-method-row">
            <Typography variant="body2">
              Method: {method}
            </Typography>

            <Button
              variant="text"
              color="primary"
              onClick={onChangeClick}
              ariaLabel="Change Method"
            >
              Change
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimPayoutView;