import React from 'react';
import { useNavigate } from 'react-router-dom';

import AccidentCardView from './AccidentCardView';

import type { AccidentCardProps, StepItem } from './interfaces';

const AccidentCard: React.FC<AccidentCardProps> = ({ steps }) => {
  const navigate = useNavigate();
  const defaultSteps: StepItem[] = [
    {
      id: 1,
      title: 'Safety',
      description: 'Move to a safe area and check for injuries. Call emergency services if needed.',
    },
    {
      id: 2,
      title: 'Gather Info',
      description: 'Exchange contact and insurance details with other drivers involved.',
    },
    {
      id: 3,
      title: 'Take Photos',
      description: 'Capture damage, license plates, and the scene from multiple angles.',
    },
    {
      id: 4,
      title: 'File Claim',
      description: 'Use our mobile app or call to start your claim process immediately.',
    },
  ];

  const stepList = steps?.length ? steps : defaultSteps;

  const handleStartClaim = () => {
    navigate('/claims');
  };

  return <AccidentCardView steps={stepList} onStartClaim={handleStartClaim} />;
};

export default AccidentCard;
