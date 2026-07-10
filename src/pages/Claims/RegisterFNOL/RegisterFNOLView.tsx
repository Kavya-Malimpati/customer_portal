import { FiClock } from 'react-icons/fi';
import './RegisterFNOL.css';
import type { RegisterFNOLViewProps } from './Interface';

import {
  Typography,
  Button,
  Stepper,
  Card,
} from '../../../common/components';

const RegisterFNOLView = ({
  steps,
  currentStep,
  onStartReporting,
}: RegisterFNOLViewProps) => {
  const stepperSteps = steps.map(step => ({
    label: step.title,
  }));

  return (
    <div className='register-fnol-page'>

      <div className='register-fnol-container'>
        <Card
          variant='outlined-raised'
          className='fnol-card'
        >
          <div className='fnol-header'>
            <div>
              <Typography
                variant='h3'
                color='primary'
              >
                Report New Claim (FNOL)
              </Typography>

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
              showStepLabels
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
      </div>
    </div>
  );
};

export default RegisterFNOLView;