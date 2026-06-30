import React, { useState } from 'react';

import Button from '../Button/Button';
import Stepper from '../Stepper/Stepper';

import type { FormData, MultiStepFormProps } from './types';
const MultiStepForm: React.FC<MultiStepFormProps> = ({
  testId,
  jsonConfig,
  stepData,
  onSubmit,
  submitButtonName = 'Submit',
  onCancel,
  initialData = {},
}) => {
  // State management for form data and navigation
  const [formData] = useState<FormData>(initialData);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);

  // Determine if we're using JSON config or custom step data
  const isJsonMode = !!jsonConfig;
  const totalSteps = isJsonMode ? jsonConfig!.totalSteps : stepData?.length || 0;

  const isLastStep = currentStep === totalSteps - 1;

  const handleNext = (): void => {
    if (isLastStep) {
      onSubmit(formData);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = (): void => {
    if (currentStep > 0) {
      setIsNextDisabled(false);
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div data-testid={testId} className='multi-step-form'>
      {/* Step Progress Indicator */}
      <div className='step-progress mb-16 flex justify-center'>
        <div style={{ width: '100%', maxWidth: '1000px', position: 'relative' }}>
          <Stepper
            steps={Array.from({ length: totalSteps }, (_, index) => ({
              label:
                isJsonMode && jsonConfig
                  ? jsonConfig.steps[`step${index + 1}`]?.title
                  : stepData?.[index]?.title || `Step ${index + 1}`,
              completed: index < currentStep,
              description: '',
            }))}
            activeStep={currentStep}
            orientation='horizontal'
            color='primary'
            size='md'
          />
          {/* Step Counter - Below first circle */}
          <div style={{ position: 'absolute', left: 0, top: '105px', margin: 0 }}>
            <p className='text-sm text-gray-600' style={{ margin: 0 }}>Step {currentStep + 1}</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='flex items-center justify-between border-t border-gray-200' style={{ paddingTop: 'calc(var(--space-5))' }}>
        <div>
          {/* Back Button */}
          {currentStep > 0 && (
            <Button variant='outlined' onClick={handleBack} className='mr-4'>
              Back
            </Button>
          )}

          {/* Cancel Button */}
          {onCancel && (
            <Button variant='text' onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>

        {/* Next/Submit Button */}
        <Button variant='contained' onClick={handleNext} disabled={isNextDisabled}>
          {isLastStep ? submitButtonName : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default MultiStepForm;
