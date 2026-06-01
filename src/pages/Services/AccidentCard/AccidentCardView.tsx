import './AccidentCard.css';
import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { Button, Typography } from '../../../common/components';
import type { StepItem } from './interfaces';

interface Props {
  steps: StepItem[];
}

const AccidentCardView: React.FC<Props> = ({ steps }) => {
  return (
    <div className="accident-card">

      <div className="accident-header">
        <Typography variant="h3" color="primary">
          <span className="required">*</span>
          What to do after an accident
        </Typography>
      </div>

      <div className="accident-steps">
        {steps.map(step => (
          <div key={step.id} className="step-item">

            <div className="step-circle">
              <Typography variant="body2" color="inverse">
                {step.id}
              </Typography>
            </div>

            <Typography variant="body1" color="primary" className="step-title">
              {step.title}
            </Typography>

            <Typography variant="caption" color="muted" className="step-desc">
              {step.description}
            </Typography>

          </div>
        ))}
      </div>

      <div className="accident-footer">
        <Button
          variant="contained"
          startIcon={<FiPlusCircle />}
          className="claim-btn"
          fullWidth
        >
          Start a New Claim Now
        </Button>
      </div>

    </div>
  );
};

export default AccidentCardView;