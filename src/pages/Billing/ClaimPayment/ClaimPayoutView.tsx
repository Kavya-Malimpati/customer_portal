import { Typography, Button } from '../../../common/components';
import { FaUniversity } from 'react-icons/fa';
import './ClaimPayoutUi.css';

import type { ClaimPayoutUiProps } from './Interfaces';

const ClaimPayoutView = ({
  claimId,
  status,
  expectedArrival,
  method,
  onChangeClick,
}: ClaimPayoutUiProps) => {
  return (
    <div className='claim-wrapper'>
      <div className='claim-card'>
        <div className='claim-header'>
          <FaUniversity size={20} color='green' />
          <Typography variant='h3'>Claim Payouts</Typography>
        </div>

        <div className='claim-id'>
          <Typography variant='subtitle1'>Claim #{claimId}</Typography>
        </div>

        <div className='claim-status'>
          <Typography variant='body2' color='body'>
            {status.toUpperCase()}
          </Typography>
        </div>

        <div className='claim-progress'>
          <div className='claim-progress-bar'>
            <div
              className='claim-progress-fill'
              style={{
                width: status === 'approved' ? '25%' : status === 'processing' ? '50%' : '100%',
                background:
                  status === 'processing'
                    ? 'var(--color-warning)'
                    : status === 'approved'
                      ? 'var(--color-info)'
                      : 'var(--color-success)',
              }}
            />
          </div>
        </div>

        <div className='claim-arrival'>
          <Typography variant='body2' color='body'>
            Expected arrival: {expectedArrival}
          </Typography>
        </div>

        <div className='claim-divider'></div>

        <div className='claim-method-row'>
          <Typography variant='body2' color='body'>
            Method: {method}
          </Typography>
          <Button variant='text' color='primary' onClick={onChangeClick} ariaLabel='Change Method'>
            Change
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ClaimPayoutView;
