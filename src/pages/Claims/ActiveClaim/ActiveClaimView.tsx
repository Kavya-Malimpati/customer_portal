import { Card, Typography, Button, LabelValue, LinearProgress } from '../../../common/components';
import CardHeader from '../../../common/components/Card/CardHeader';
import CardContent from '../../../common/components/Card/CardContent';
import CardFooter from '../../../common/components/Card/CardFooter';
import Stepper from '../../../common/components/Stepper/Stepper';
import { FiFileText, FiSearch, FiClipboard, FiCheckCircle } from 'react-icons/fi';
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

const ActiveClaimView = ({ data, currentIndex, formatStatus }: Props) => {
  return (
    <div className='claim-layout'>
      <Card variant='outlined-raised'>
        <CardHeader
          title={
            <Typography variant='h3' color='primary'>
              Active Claim: #{data?.claimId ?? '--'}
            </Typography>
          }
          action={
            <Typography variant='body2' className='link'>
              View Full Timeline →
            </Typography>
          }
        />
        <hr />
        <CardContent>
          <div className='claim-box-claim'>
            <div className='claim-top'>
              <div>
                <Typography variant='body1' color='primary'>
                  {data?.title ?? '--'}
                </Typography>
                <Typography variant='body2' color='muted'>
                  Filed on {data?.filedDate ?? '--'}
                </Typography>
              </div>
              <div className='status-pill'>{data ? formatStatus(data.status) : '--'}</div>
            </div>
            <Stepper
              id='claim-stepper'
              value={currentIndex}
              orientation='horizontal'
              alternativeLabel
              color='primary'
              size='md'
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

        {/* Think of doing the common component of the roadside assitance to be used in multiple views and that can be reused here */}
        <CardFooter className='claim-footer'>
          <div className='box'>
            <LabelValue
              orientation='vertical'
              label='ESTIMATED RESOLUTION'
              value={data?.estimatedResolution ?? '--'}
              labelVariant='body1'
              valueVariant='h5'
              valueColor='primary'
            />
          </div>
          <div className='box'>
            <LabelValue
              orientation='vertical'
              label='TOTAL EST. DAMAGE'
              value={data?.damageAmount ?? '--'}
              labelVariant='body1'
              valueVariant='h5'
              valueColor='primary'
            />
          </div>
        </CardFooter>
      </Card>

      {/* same use the common component which you will create for the roadside assistance and above */}
      <div className='right'>
        <Card variant='outlined-raised'>
          <div className='icon-text'>
            <FiCalendar className='icon' />
            <Typography variant='body1' color='primary' className='text'>
              Inspection Scheduled
            </Typography>
          </div>
          <CardContent>
            <LabelValue
              className='row'
              orientation='horizontal'
              label='Date & Time'
              value='May 02, 10:30 AM'
              labelVariant='body1'
              valueVariant='h5'
            />
            <LabelValue
              className='row'
              orientation='horizontal'
              label='Location'
              value='Service King, Oakland'
              labelVariant='body1'
              valueVariant='h5'
            />
          </CardContent>
          <CardFooter>
            <Button variant='outlined' fullWidth>
              View / Reschedule Inspection
            </Button>
          </CardFooter>
        </Card>
        <Card variant='outlined-raised'>
          <CardHeader
            title={
              <Typography variant='body1' color='primary' className='text'>
                Expenses & Reimbursement
              </Typography>
            }
          />
          <CardContent>

            {/* use the common component which will be made by vedant */}
            <div className='expense-header'>
              <span className='expense-title'>Status: Approved</span>
              <span className='expense-amount'>$330.00</span>
            </div>
            <LinearProgress
              value={75}
              variant='determinate'
              color='success'
              size='md'
              aria-label='Expenses reimbursement progress'
              aria-valuetext='75% expenses reimbursed'
            />
            <Typography variant='body1' className='expense-text'>
              75% Expenses Reimbursed
            </Typography>
          </CardContent>
          <CardFooter>
            <Button variant='outlined' className='submit' fullWidth>
              Submit New Receipt
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ActiveClaimView;
