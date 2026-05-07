import { Button, Card, CardContent, Typography } from '../../../common/components';
import type { PolicyHeaderData } from './interfaces';
import '../styles/PolicyHeaderCardView.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';

interface Props {
  policy: PolicyHeaderData;
  onRequestChange?: () => void;
  onRenew?: () => void;
}

const PolicyHeaderCardView = ({ policy, onRequestChange, onRenew }: Props) => (
  <Card className='policy-header-card'>
    <CardContent className='policy-header-card-content'>
      <div className='policy-header'>
        {/* LEFT */}
        <div className='policy-header-left'>
          <div className='policy-status-line'>
            <div className='policy-status-badge'>
              <FaCheckCircle /> {policy.status}
            </div>

            <Typography variant='body2' color='body2'>
              • Policy #{policy.policyNumber}
            </Typography>
          </div>

          <Typography variant='h1' color='primary'>
            {policy.policyType}
          </Typography>

          <Typography variant='body2' color='body2'>
            Effective Until: {policy.endDate}
          </Typography>
        </div>

        {/* RIGHT */}
        <div className='policy-header-right'>
          {onRequestChange && (
            <Button variant='outlined' onClick={onRequestChange}>
              <span className='button-content'>
                <FiEdit2 />
                Request Change
              </span>
            </Button>
          )}
          {onRenew && (
            <Button variant='contained' onClick={onRenew}>
              Renew Now
            </Button>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default PolicyHeaderCardView;
