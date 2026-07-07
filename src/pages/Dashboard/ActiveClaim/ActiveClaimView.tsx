import { FaCarCrash } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';

import { Button, Typography, Card, CardContent } from '../../../common/components';

import LinearProgress from '../../../common/components/Progress/LinearProgress';

import './ActiveClaimUi.css';

import type { ActiveClaimUiProps } from './Interfaces';

const ActiveClaimView = ({
  claim,
  onNavigateToChat,
  onNavigateToEvidenceVault,
  onNavigateToClaims,
  onNavigateToRoadside,
}: ActiveClaimUiProps) => {
  return (
    <div className='active-claim-wrapper'>
      <Card className='active-claim-card' aria-label='View all claims'>
        <CardContent className='active-claim-content'>
          <div className='active-claim-header'>
            <div
              className='active-claim-header-left'
              style={{ cursor: 'pointer' }}
            >
              <div className='active-claim-icon'>
                <FaCarCrash size={18} />
              </div>

              <div>
                <Typography variant='h3' color='primary' onClick={onNavigateToClaims}>
                  Claim #{claim.claimNumber}
                </Typography>

                <Typography variant='body2' className='active-claim-type'>
                  {claim.claimType}
                </Typography>
              </div>
            </div>

            <div className='active-claim-status'>{claim.status}</div>
          </div>

          <div className='active-claim-progress-header'>
            <Typography variant='body1'>Status: Processing Payment</Typography>

            <Typography variant='body1' className='active-claim-progress-text'>
              {claim.progress}% Complete
            </Typography>
          </div>

          <div className='active-claim-progress'>
            <LinearProgress
              value={claim.progress}
              variant='determinate'
              color='success'
              size='md'
            />
          </div>

          <div className='active-tow-card'>
            <div className='active-tow-left'>
              <FiTruck size={22} />

              <div>
                <Typography variant='body1'>{claim.towTruckEta}</Typography>

                <Typography variant='body2' className='active-tracking-id'>
                  Tracking {claim.trackingId}
                </Typography>
              </div>
            </div>

            <Button
              variant='text'
              color='primary'
              onClick={event => {
                event.stopPropagation();
                onNavigateToRoadside();
              }}
            >
              Track Map
            </Button>
          </div>

          <div className='active-claim-actions'>
            <Button
              variant='contained'
              className='active-upload-button'
              onClick={event => {
                event.stopPropagation();
                onNavigateToEvidenceVault();
              }}
            >
              Upload Photos
            </Button>

            <Button
              variant='outlined'
              className='active-adjuster-button'
              onClick={event => {
                event.stopPropagation();
                onNavigateToChat();
              }}
            >
              Contact Adjuster
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveClaimView;
