import { useLocation, useNavigate } from 'react-router-dom';

import {Button,Card,CardContent,Typography}  from '../../../../common/components';
import './ClaimSuccessPage.css';

const ClaimSuccessPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const { claimNumber, adjuster } = location.state || {};

  return (
    <div className='claim-success-container'>
      <Card variant='outlined' className='claim-success-card'>
        <CardContent>
          <div className='success-icon'>✓</div>

          <Typography variant='h2' className='success-message'>
            Claim Submitted Successfully
          </Typography>

          <Typography variant='body1' className='success-message'>
            Your FNOL request has been received and is currently under review.
          </Typography>

          <div className='claim-info'>
            <div className='info-row'>
              <span>Claim Number:</span>

              <Typography variant='body1' className='claimnumber'>
                {claimNumber}
              </Typography>
            </div>

            <div className='info-row'>
              <span>Assigned Adjuster:</span>

              <Typography variant='body1' className='claimnumber'>
                {adjuster}
              </Typography>
            </div>
          </div>

          <div className='next-steps'>
            <Typography variant='h4'>Next Steps</Typography>

            <ul>
              <li>Claim has been registered.</li>

              <li>Adjuster will review your submission.</li>

              <li>Additional documents may be requested.</li>

              <li>Status updates will be sent via Email / SMS.</li>
            </ul>
          </div>

          <div className='success-actions'>
            <Button variant='contained' onClick={() => navigate('/claims')}>
              Back To Claims
            </Button>

            <Button variant='outlined' onClick={() => navigate('/')}>
              Go To Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClaimSuccessPage;
