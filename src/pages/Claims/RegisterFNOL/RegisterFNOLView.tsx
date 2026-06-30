import { FiClock } from 'react-icons/fi';
import './RegisterFNOL.css';
import type { RegisterFNOLViewProps } from './Interface';

import {
  Typography,
  Button,
  CardContent,
  Stepper,
  Card,
} from '../../../common/components';
import { FaShieldAlt } from 'react-icons/fa';

const RegisterFNOLView = ({
  steps,
  currentStep,
  repairInfo,
  selectedClaim,
  onStartReporting,
  onRequestRepair,
}: RegisterFNOLViewProps) => {
  const stepperSteps = steps.map(step => ({
    label: step.title,
  }));

  return (
    <section className='register-fnol-page'>
      <section className='fnol-header-row'>
        <div>
          <Typography variant='h1' color='primary' className='fnol-title'>
            Good Morning, Alexander
          </Typography>

          <Typography variant='body2' className='fnol-subtitle'>
            Welcome back. You have 2 active claims needing attention.
          </Typography>
        </div>

        <div className='fnol-selected-claim' >
          <Typography variant='caption'>
            SELECTED CONTEXT:
          </Typography>

          <Typography
            variant='body2'
            className='fnol-selected-text'
          >
            {selectedClaim.claimNumber} | {selectedClaim.vehicle}
          </Typography>

          <Button variant='text'>
            Change
          </Button>
        </div>

        <div className='fnol-alert'>
          <div className='fnol-alert-icon'>△</div>

          <div>
            <Typography
              variant='body2'
              color='error'
              className='fnol-alert-title'
            >
              ATTENTION REQUIRED
            </Typography>

            <Typography
              variant='caption'
              color='error'
              className='fnol-alert-text'
            >
              Evidence requested for Claim #PC-9902
            </Typography>
          </div>

          <Button color='error' variant='text'>
            Resolve Now
          </Button>
        </div>
      </section>

      <div className='register-fnol-grid'>
        <Card variant='outlined-raised' className='fnol-card'>
          <div className='fnol-header'>
            <div>
              <Typography variant='h3' color='primary'>Report New Claim (FNOL)</Typography>

               <Typography variant='body2'>
                Select the type of claim you want to report.
              </Typography>
            </div>

            <span className='fnol-badge'>
              Standard Process
            </span>
          </div>

          <div className='fnol-stepper-wrapper'>
            <Stepper
              id='register-fnol-stepper'
              steps={stepperSteps}
              value={currentStep}
              type='non-linear'
              orientation='horizontal'
              color='primary'
              size='sm'
            />
          </div>

          <div className='fnol-footer-box'>
            <div className='fnol-time'>
              <FiClock />

              <span>
                Estimated time to complete: 10 mins
              </span>
            </div>

            <Button
              className='primary-btn'
              onClick={onStartReporting}
            >
              Start Reporting
            </Button>
          </div>
        </Card>

        <Card variant='outlined-raised'className='repair-card'>
          <CardContent>
            <div className='fnol-card-header'>
              <Typography
                variant='h3'
                color='primary'
                className='fnol-title'
              >
                {repairInfo.title}
              </Typography>

              <span className='fast-badge'>
                {repairInfo.badge}
              </span>
            </div>

            <Typography
              variant='body2'
              className='fnol-subtitle'
            >
              {repairInfo.description}
            </Typography>

            <div className='repair-benefit'>
              <FaShieldAlt size={25} />
              Direct billing to shop
            </div>

            <Button
              variant='outlined'
              className='request'
              fullWidth
              onClick={onRequestRepair}
            >
              Request Repair
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RegisterFNOLView;