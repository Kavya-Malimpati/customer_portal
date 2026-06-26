import { FaUniversity } from 'react-icons/fa';
import { Card, CardContent, Typography, Button } from '../../../common/components';
import LinearProgress from './../../../common/components/Progress/LinearProgress'
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
    <div className="w-full">
      <Card
        variant="outlined"
        className="border border-gray-200 rounded-xl shadow-sm bg-white h-full"
      >
        <CardContent className="p-1 h-full flex flex-col">
          <div className="claim-header flex items-center gap-2 mb-3">
            <FaUniversity size={18} color="green" />

            <Typography
              variant="h3"
              className="font-bold text-black"
              style={{ color: 'var(--text-primary)' }}
            >
              Claim Payouts
            </Typography>
          </div>

          <div className="claim-id mb-2">
            <Typography variant="body1" color="primary">
              Claim #{claimId}
            </Typography>
          </div>

          <div className="claim-status mb-2">
            <span className={status === 'processing' ? 'status-processing' : ''}>
              {status.toUpperCase()}
            </span>
          </div>

          <div className="claim-progress mb-2">
            <LinearProgress
              value={progressValue}
              variant="determinate"
              color="success"
              size="md"
              aria-label="Claim Progress"
              aria-valuenow={progressValue}
              aria-valuetext={`${progressValue}% complete`}
            />
          </div>

          <div className="claim-arrival mb-2">
            <Typography variant="body2" color="body">
              Expected arrival: {expectedArrival}
            </Typography>
          </div>

          <div className="claim-divider border-t border-gray-300 my-2" />

          <div className="claim-method-row flex items-center justify-between pt-3 mt-auto">
            <Typography variant="body2" color="body">
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