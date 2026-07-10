import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Modal from '../../../common/components/Modal';
import AccidentCardView from './AccidentCardView';

import type { AccidentCardProps, StepItem } from './interfaces';

const AccidentCard: React.FC<AccidentCardProps> = ({ steps }) => {
  const navigate = useNavigate();
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
        <div className='claim-type-selector'>
          <p>Select the claim type to begin filing.</p>
          <div className='claim-type-actions'>
            <button
              type='button'
              className='claim-type-button'
              onClick={() => {
                setIsModalOpen(false);
                navigate('/claims/fnol/auto');
              }}
            >
              Auto Claim
            </button>
            <button
              type='button'
              className='claim-type-button claim-type-button--secondary'
              onClick={() => {
                setIsModalOpen(false);
                navigate('/claims/fnol/home');
              }}
            >
              Home Claim
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AccidentCard;
