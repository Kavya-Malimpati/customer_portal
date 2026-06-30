import React, { useState } from 'react';
 
import Button from '../Button/Button';
import Stepper from '../Stepper/Stepper';
import { JsonStepRenderer } from './JsonFieldRenderer';
 
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
  const [formData, setFormData] = useState<FormData>(initialData);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
 
  const isJsonMode = !!jsonConfig;
  const totalSteps = isJsonMode ? jsonConfig!.totalSteps : stepData?.length || 0;
 
  let currentStepConfig;
 
  if (isJsonMode && jsonConfig) {
    const stepKey = `step${currentStep + 1}`;
    currentStepConfig = jsonConfig.steps[stepKey];
  }
 
  const isLastStep = currentStep === totalSteps - 1;
 
  const handleStepChange = (stepName: string, data: unknown): void => {
    setFormData(prevData => ({
      ...prevData,
      [stepName]: data,
    }));
  };
 
  const handleSubmit = (): void => {
    onSubmit(formData);
  };
 
  const handleNext = (): void => {
    if (isLastStep) {
      handleSubmit();
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };
 
  const handleBack = (): void => {
    if (currentStep > 0) {
      setIsNextDisabled(false);
      setCurrentStep(prev => prev - 1);
    }
  };
 
  const setShouldGoNext = (shouldGoNext: boolean): void => {
    setIsNextDisabled(!shouldGoNext);
 
    if (shouldGoNext) {
      if (isLastStep) {
        handleSubmit();
      } else {
        setCurrentStep(prev => prev + 1);
      }
    }
  };
 
  return (
    <div data-testid={testId} className='multi-step-form'>
      <div className='step-progress mb-16 flex justify-center'>
        <div style={{ width: '100%', maxWidth: '1000px', position: 'relative' }}>
          <Stepper
            steps={Array.from({ length: totalSteps }, (_, index) => ({
              label: `Step ${index + 1}`,
              completed: index < currentStep,
              description:
                isJsonMode && jsonConfig
                  ? jsonConfig.steps[`step${index + 1}`]?.title
                  : stepData?.[index]?.title,
            }))}
            activeStep={currentStep}
            orientation='horizontal'
            color='primary'
            size='md'
          />
 
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '105px',
              margin: 0,
            }}
          >
            <h2 className='text-xl font-semibold !text-gray-900'>
              {isJsonMode && currentStepConfig
                ? currentStepConfig.title
                : stepData?.[currentStep]?.title || `Step ${currentStep + 1}`}
            </h2>
 
            <p className='text-sm text-gray-600' style={{ margin: 0 }}>
              Step {currentStep + 1}
            </p>
          </div>
        </div>
      </div>
 
      <div className='step-content mt-25 mb-8'>
        {isJsonMode && currentStepConfig ? (
          <JsonStepRenderer
            stepConfig={currentStepConfig}
            stepData={formData}
            onDataChange={(fieldName, value) => handleStepChange(fieldName, value)}
          />
        ) : stepData?.[currentStep]?.content ? (
          React.createElement(stepData[currentStep].content!, {
            data: formData,
            onDataChange: (data: unknown) => handleStepChange(stepData[currentStep].id, data),
            shouldGoNext: setShouldGoNext,
          })
        ) : (
          <div>No step configuration found</div>
        )}
      </div>
 
      <div className='flex items-center justify-between pt-6 border-t border-gray-200'>
        <div>
          {currentStep > 0 && (
            <Button variant='outlined' onClick={handleBack} className='mr-4'>
              Back
            </Button>
          )}
 
          {onCancel && (
            <Button variant='text' onClick={onCancel}>
              Cancel
            </Button>
          )}
        </div>
 
        <Button variant='contained' onClick={handleNext} disabled={isNextDisabled}>
          {isLastStep ? submitButtonName : 'Next'}
        </Button>
      </div>
    </div>
  );
};
 
export default MultiStepForm;