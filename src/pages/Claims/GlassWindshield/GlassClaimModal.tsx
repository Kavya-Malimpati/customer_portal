import { useState } from 'react';

import { Modal, Button, Stepper, Typography, LabelValue } from '../../../common/components';

import VerifyPolicyStep from './Steps/VerifyPolicyStep';
import DamageDetailsStep from './Steps/DamageDetailsStep';
import UploadEvidenceStep from './Steps/UploadEvidenceStep';
import RepairShopStep from './Steps/RepairShopStep';
import ReviewSubmitStep from './Steps/ReviewSubmitStep';

import { glassClaimSteps, initialGlassClaimData } from './mockData';

import type { GlassClaimFormData } from './Interface';
import { Card, CardContent } from '../../../common/components';

import './GlassClaim.css';

interface GlassClaimModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlassClaimModal = ({ isOpen, onClose }: GlassClaimModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<GlassClaimFormData>(initialGlassClaimData);

  const stepperSteps = glassClaimSteps.map(step => ({
    label: step.title,
  }));

  const handleNext = () => {
    if (currentStep < glassClaimSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleClose = () => {
    setCurrentStep(0);
    setSubmitted(false);
    setFormData(initialGlassClaimData);
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <VerifyPolicyStep data={formData.verifyPolicy} />;

      case 1:
        return (
          <DamageDetailsStep
            data={formData.damageDetails}
            onChange={value =>
              setFormData(prev => ({
                ...prev,
                damageDetails: value,
              }))
            }
          />
        );

      case 2:
        return (
          <UploadEvidenceStep
            data={formData.uploadEvidence}
            onChange={value =>
              setFormData(prev => ({
                ...prev,
                uploadEvidence: value,
              }))
            }
          />
        );

      case 3:
        return (
          <RepairShopStep
            data={formData.repairShop}
            onChange={value =>
              setFormData(prev => ({
                ...prev,
                repairShop: value,
              }))
            }
          />
        );

      case 4:
        return <ReviewSubmitStep data={formData} />;

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <Modal isOpen={isOpen} onClose={handleClose} title='Glass Claim Submitted' maxWidth='700px'>
        <div className='glass-success'>
          <Typography variant='h2' color='success'>
            Claim Submitted Successfully!
          </Typography>

          <Typography variant='body2'>Your claim has been successfully submitted.</Typography>

          <div className='glass-review-grid'>
            <LabelValue label='Claim Number' value='GC-203456' />

            <LabelValue label='Claim Status' value='Submitted' />

            <LabelValue
              label='Appointment Date'
              value={formData.repairShop.appointmentDate || 'Not Scheduled'}
            />

            <LabelValue
              label='Repair Shop'
              value={formData.repairShop.selectedShop || 'Not Selected'}
            />

            <LabelValue label='Estimated Completion' value='2 Business Days' />
          </div>

          <Button fullWidth onClick={handleClose}>
            Close
          </Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title='Glass & Windshield Claim' maxWidth='900px'>
      <div className='glass-claim-modal'>
        <Stepper
          id='glass-claim-stepper'
          steps={stepperSteps}
          value={currentStep}
          type='non-linear'
          orientation='horizontal'
          color='primary'
          size='sm'
          showStepLabels
        />

        <Card variant='outlined-raised' className='glass-step-card'>
          <CardContent className='glass-step-card-content'>{renderStep()}</CardContent>
        </Card>

        <div className='glass-footer'>
          <Button variant='outlined' disabled={currentStep === 0} onClick={handleBack}>
            Previous
          </Button>

          {currentStep === glassClaimSteps.length - 1 ? (
            <Button onClick={handleSubmit}>Submit Claim</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default GlassClaimModal;
