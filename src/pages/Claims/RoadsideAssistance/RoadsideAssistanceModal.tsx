import { useState } from 'react';

import {
  Modal,
  Button,
  Card,
  CardContent,
  Stepper,
  Typography,
  LabelValue,
} from '../../../common/components';

import RequestAssistanceStep from './Steps/RequestAssistanceStep';
import SelectServiceStep from './Steps/SelectServiceStep';
import RequestDetailsStep from './Steps/RequestDetailsStep';
import ReviewSubmitStep from './Steps/ReviewSubmitStep';

import { roadsideSteps, initialRoadsideData, providerDetails } from './mockData';

import type { RoadsideAssistanceModalProps, RoadsideRequestFormData } from './Interface';

import './Roadside.css';

const RoadsideAssistanceModal = ({ isOpen, onClose }: RoadsideAssistanceModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState<RoadsideRequestFormData>(initialRoadsideData);

  const stepperSteps = roadsideSteps.map(step => ({
    label: step.title,
  }));

  const handleNext = () => {
    if (currentStep < roadsideSteps.length - 1) {
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
    setFormData(initialRoadsideData);
    onClose();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <RequestAssistanceStep
            data={formData.requestAssistance}
            onChange={value =>
              setFormData(prev => ({
                ...prev,
                requestAssistance: value,
              }))
            }
          />
        );

      case 1:
        return (
          <SelectServiceStep
            data={formData.selectService}
            onChange={value =>
              setFormData(prev => ({
                ...prev,
                selectService: value,
              }))
            }
          />
        );

      case 2:
        return (
          <RequestDetailsStep
            data={formData.requestDetails}
            onChange={value =>
              setFormData(prev => ({
                ...prev,
                requestDetails: value,
              }))
            }
          />
        );

      case 3:
        return <ReviewSubmitStep data={formData} />;

      default:
        return null;
    }
  };

  if (submitted) {
    const handleTrackDriver = () => {
      alert(
        `Driver: ${providerDetails.driverName}
ETA: ${providerDetails.estimatedArrival}
Status: ${providerDetails.currentStatus}`,
      );
    };
    return (
      <Modal isOpen={isOpen} onClose={handleClose} title='Roadside Assistance' maxWidth='900px'>
        <div className='roadside-success'>
          <Typography variant='h2' color='success'>
            Request Submitted Successfully!
          </Typography>

          <Typography variant='body2'>
            Your roadside assistance request has been received.
          </Typography>

          <div className='roadside-review-grid'>
            <LabelValue label='Request Number' value={providerDetails.requestNumber} />

            <LabelValue label='Service Provider' value={providerDetails.serviceProvider} />

            <LabelValue label='Driver' value={providerDetails.driverName} />

            <LabelValue label='Driver Contact' value={providerDetails.driverPhone} />

            <LabelValue label='ETA' value={providerDetails.estimatedArrival} />

            <LabelValue label='Vehicle' value={providerDetails.vehicleInformation} />

            <LabelValue label='Current Status' value={providerDetails.currentStatus} />
          </div>

          <div className='roadside-footer'>
            <Button variant='contained' onClick={() => (window.location.href = 'tel:+15552347890')}>
              Call Driver
            </Button>

            <Button variant='outlined' onClick={handleTrackDriver}>
              Track Driver
            </Button>

            <Button
              variant='outlined'
              onClick={() => {
                handleClose();

                (
                  window as Window & {
                    openClaimSupport?: () => void;
                  }
                ).openClaimSupport?.();
              }}
            >
              Contact Support
            </Button>
            <Button variant='outlined' onClick={handleClose}>
              Close
            </Button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title='Roadside Assistance Request'
      maxWidth='1000px'
    >
      <div className='roadside-modal'>
        <Stepper
          id='roadside-stepper'
          steps={stepperSteps}
          value={currentStep}
          type='non-linear'
          orientation='horizontal'
          color='primary'
          size='sm'
          showStepLabels
        />

        <Card variant='outlined-raised' className='roadside-step-card'>
          <CardContent>{renderStep()}</CardContent>
        </Card>

        <div className='roadside-footer'>
          <Button variant='outlined' disabled={currentStep === 0} onClick={handleBack}>
            Previous
          </Button>

          {currentStep === roadsideSteps.length - 1 ? (
            <Button onClick={handleSubmit}>Submit Request</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default RoadsideAssistanceModal;
