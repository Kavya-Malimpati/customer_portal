import { FaCarCrash } from 'react-icons/fa';
import { FiTruck } from 'react-icons/fi';
import { Button, Typography, Card, CardContent } from '../../../common/components';
import LinearProgress from './../../../common/components/Progress/LinearProgress';

import './ActiveClaimUi.css';

import type { ActiveClaimUiProps } from './Interfaces';

const ActiveClaimView = ({ claim }: ActiveClaimUiProps) => {
  return (
    <div className='active-claim-wrapper'>
      <Card className='active-claim-card'>
        <CardContent className='active-claim-content'>
          <div className='claim-header'>
            <div className='claim-header-left'>
              <div className='claim-icon'>
                <FaCarCrash size={18} />
              </div>

              <div>
                <Typography variant='h3' color='primary'>
                  Claim #{claim.claimNumber}
                </Typography>

                <Typography variant='body2' className='claim-type'>
                  {claim.claimType}
                </Typography>
              </div>
            </div>

            <div className='claim-status'>{claim.status}</div>
          </div>

          <div className='claim-progress-header'>
            <Typography variant='body1'>Status: Processing Payment</Typography>

            <Typography variant='body1' className='claim-progress-text'>
              {claim.progress}% Complete
            </Typography>
          </div>

          <div className='claim-progress'>
            <LinearProgress
              value={claim.progress}
              variant='determinate'
              color='success'
              size='md'
            />
          </div>

          <div className='tow-card'>
            <div className='tow-left'>
              <FiTruck size={22} />

              <div>
                <Typography variant='body1'>{claim.towTruckEta}</Typography>

                <Typography variant='body2' className='tracking-id'>
                  Tracking {claim.trackingId}
                </Typography>
              </div>
            </div>

            <Button variant='text' color='primary'>
              Track Map
            </Button>
          </div>

          <div className='claim-actions'>
            <Button variant='contained' className='upload-button'>
              Upload Photos
            </Button>

            <Button variant='outlined' className='adjuster-button'>
              Contact Adjuster
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveClaimView;
