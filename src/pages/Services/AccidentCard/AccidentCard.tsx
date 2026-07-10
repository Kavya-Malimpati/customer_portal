import React, { useState } from 'react';
import Modal from '../../../common/components/Modal';
import ClaimTypeSelector from '../../Claims/ClaimType/ClaimTypeSelector';
import AccidentCardView from './AccidentCardView';

import type { AccidentCardProps, StepItem } from './interfaces';

const AccidentCard: React.FC<AccidentCardProps> = ({ steps }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    setIsModalOpen(true);
  };

  return (
    <>
      <AccidentCardView steps={stepList} onStartClaim={handleStartClaim} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title='Select Claim Type'
        maxWidth='500px'
      >
        <ClaimTypeSelector onClose={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default AccidentCard;
