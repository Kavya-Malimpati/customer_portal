import './AccidentCard.css';

import React from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import Button from '../../../common/components/Button';
import Card from '../../../common/components/Card';
import Typography from '../../../common/components/Typography';

import type { StepItem } from './interfaces';

interface Props {
  steps: StepItem[];
}

const AccidentCardView: React.FC<Props> = ({ steps }) => {
  return (
    <Card variant='outlined-raised' className='accident-card'>
      {/* HEADER */}
      <div className='accident-header'>
        <Typography variant='h3' color='primary'>
          <span className='required'>*</span>
          What to do after an accident
        </Typography>
      </div>

      {/* STEPS */}
      <div className='accident-steps'>
        {steps.map(step => (
          <div key={step.id} className='step-item'>
            <div className='step-circle'>
              <Typography color='inverse'>{step.id}</Typography>
            </div>

            <Typography variant='body1' color='primary' className='step-title'>
              {step.title}
            </Typography>

            <Typography variant='caption' color='muted' className='step-desc'>
              {step.description}
            </Typography>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className='accident-footer'>
        <Button variant='contained' startIcon={<FiPlusCircle />} className='claim-btn' fullWidth>
          Start a New Claim Now
        </Button>
      </div>
    </Card>
  );
};

export default AccidentCardView;
