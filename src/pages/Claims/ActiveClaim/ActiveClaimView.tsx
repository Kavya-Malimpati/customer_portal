import {
  Card,
  Typography,
  Button,
} from '../../../common/components';
 
import CardHeader from '../../../common/components/Card/CardHeader';
import CardContent from '../../../common/components/Card/CardContent';
import CardFooter from '../../../common/components/Card/CardFooter';
import Stepper from '../../../common/components/Stepper/Stepper';

import {
  FiFileText,
  FiSearch,
  FiClipboard,
  FiCheckCircle,
} from 'react-icons/fi';
import { FiCalendar } from 'react-icons/fi';

 
import type { ActiveClaim } from './Interface';
import './ActiveClaim.css';
 
interface Props {
  data: ActiveClaim | null;
  steps: string[];
  stepLabels: string[];
  currentIndex: number;
  formatStatus: (status: string) => string;
}
 
const ActiveClaimView = ({
  data,
  currentIndex,
  formatStatus,
}: Props) => {
 
 
  return (
    <div className="claim-layout">
      <Card variant="outlined-raised">
        <CardHeader
          title={
            <Typography variant="h4" color="primary">
              Active Claim: #{data?.claimId ?? '--'}
            </Typography>
          }
          action={
            <Typography variant="body2" className="link">
              View Full Timeline →
            </Typography>
          }
        />
        <hr />
        <CardContent>
          <div className="claim-box-claim">
            <div className="claim-top">
              <div>
                <Typography variant="body1" color="primary">
                  {data?.title ?? '--'}
                </Typography>
                <Typography variant="body2" color="muted">
                  Filed on {data?.filedDate ?? '--'}
                </Typography>
              </div>
              <div className="status-pill">
                {data ? formatStatus(data.status) : '--'}
              </div>
            </div>
          <Stepper
  id="claim-stepper"
  value={currentIndex}
  orientation="horizontal"
  alternativeLabel
  color="primary"
  size="md"
  steps={[
    {
      label: 'Reported',
      description: 'May 05',
      icon: <FiFileText />,
    },
    {
      label: 'Assessed',
      description: 'May 12',
      icon: <FiSearch />,
    },
    {
      label: 'In Review',
      description: 'Pending',
      icon: <FiClipboard />,
    },
    {
      label: 'Paid Out',
      description: '',
      icon: <FiCheckCircle />,
    },
  ]}
/>
          </div>
        </CardContent>
        <CardFooter className="claim-footer">
          <div className="box">
            <Typography variant="caption">ESTIMATED RESOLUTION</Typography>
            <Typography variant="h4" color="primary">
              {data?.estimatedResolution ?? '--'}
            </Typography>
          </div>
          <div className="box">
            <Typography variant="caption">TOTAL EST. DAMAGE</Typography>
            <Typography variant="h4" color="primary">
              {data?.damageAmount ?? '--'}
            </Typography>
          </div>
        </CardFooter>
      </Card>
      <div className="right">
        <Card variant="outlined-raised">
          <div className="icon-text">
            <FiCalendar className="icon" />
            <Typography variant="body1" color="primary">
              Inspection Scheduled
            </Typography>
          </div>
          <CardContent>
            <div className="row">
              <span className="label">Date & Time</span>
              May 02, 10:30 AM
            </div>
            <div className="row">
              <span className="label">Location</span>
              Service King, Oakland
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outlined" fullWidth>
              View / Reschedule Inspection
            </Button>
          </CardFooter>
        </Card>
        <Card variant="outlined-raised">
          <CardHeader
            title={
              <Typography variant="body1" color="primary">
                Expenses & Reimbursement
              </Typography>
            }
          />
          <CardContent>
            <div className="expense-header">
              <span className="expense-title">Status: Approved</span>
              <span className="expense-amount">$330.00</span>
            </div>
            <div className="bar">
              <div className="fill" />
            </div>
            <Typography className="expense-text">
              75% Expenses Reimbursed
            </Typography>
          </CardContent>
          <CardFooter>
            <Button className="submit" fullWidth>
              Submit New Receipt
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
 
export default ActiveClaimView;
 