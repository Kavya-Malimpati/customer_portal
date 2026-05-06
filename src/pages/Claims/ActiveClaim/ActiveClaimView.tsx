import {
  Card,
  Typography,
  Button,
} from '../../../common/components';
 
import CardHeader from '../../../common/components/Card/CardHeader';
import CardContent from '../../../common/components/Card/CardContent';
import CardFooter from '../../../common/components/Card/CardFooter';
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
  steps,
  stepLabels,
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
          <div className="claim-box">
            <div className="claim-top">
              <div>
                <Typography variant="h3" color="primary">
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
            <div className="progress">
              <div className="line" />
              <div
                className="line-active"
                style={{
                  width:
                    currentIndex >= 0 && steps.length > 1
                      ? `${(currentIndex / (steps.length - 1)) * 100}%`
                      : '0%',
                }}
              />
              {steps.map((step, i) => (
                <div
                  key={step}
                  className={`step ${i > currentIndex ? 'inactive' : ''}`}
                >
                  <div
                    className={`dot ${
                      i <= currentIndex ? 'active' : ''
                    } ${i === currentIndex ? 'current' : ''}`}
                  />
                  <div className="step-label">
                    <span className="step-title">{stepLabels[i]}</span>
                    <span className="step-date">
                      {i === 0 && 'May 05'}
                      {i === 1 && 'May 12'}
                      {i === 2 && 'Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
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
            <Typography variant="h4" color="primary">
              Inspection Scheduled
            </Typography>
          </div>
          <CardContent>
            <div className="row">
              <span>Date & Time</span>
              May 02, 10:30 AM
            </div>
            <div className="row">
              <span>Location</span>
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
              <Typography variant="h4" color="primary">
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
 