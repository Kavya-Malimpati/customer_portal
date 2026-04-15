
import React, { useState, useRef } from 'react';
import type { FormData, MultiStepFormProps } from './types';
import { JsonStepRenderer } from './JsonFieldRenderer';
import Button from '../Button/Button';
import Stepper from '../Stepper/Stepper';

const MultiStepForm: React.FC<MultiStepFormProps> = ({
  testId,
  jsonConfig,
  stepData,
  onSubmit,
  submitButtonName = 'Submit',
  onCancel,
  initialData = {}
}) => {
  // State management for form data and navigation
  const [formData, setFormData] = useState<FormData>(initialData);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);

  // Ref to allow step components to control next/submit actions
  const okRef = useRef<(() => void) | null>(null);

  // Determine if we're using JSON config or custom step data
  const isJsonMode = !!jsonConfig;
  const totalSteps = isJsonMode ? jsonConfig!.totalSteps : (stepData?.length || 0);
  
  // Get current step configuration
  let currentStepConfig;
  
  if (isJsonMode && jsonConfig) {
    const stepKey = `step${currentStep + 1}`;
    currentStepConfig = jsonConfig.steps[stepKey];
  }

  // Check if we're on the last step
  const isLastStep = currentStep === totalSteps - 1;

  /**
   * Handle data changes from step components
   * Updates the form state with new data for the specified step
   */
  const handleStepChange = (stepName: string, data: unknown): void => {
    setFormData(prevData => ({
      ...prevData,
      [stepName]: data
    }));
  };

  /**
   * Handle navigation to next step
   * Validates if required, then moves to next step or submits if last step
   */
  const handleNext = (): void => {
    // For now, always proceed (validation can be added later)
    if (isLastStep) {
      handleSubmit();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  /**
   * Handle navigation to previous step
   * Resets any disabled state and moves back
   */
  const handleBack = (): void => {
    if (currentStep > 0) {
      setIsNextDisabled(false);
      setCurrentStep(currentStep - 1);
    }
  };

  /**
   * Handle form submission
   * Called when user reaches the end of the form
   */
  const handleSubmit = (): void => {
    onSubmit(formData);
  };

  /**
   * Control function passed to step components
   * Allows steps to enable/disable the next button based on validation
   */
  const setShouldGoNext = (shouldGoNext: boolean): void => {
    setIsNextDisabled(!shouldGoNext);
    
    if (shouldGoNext) {
      if (isLastStep) {
        handleSubmit();
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  return (
    <div data-testid={testId} className="multi-step-form">
      {/* Step Progress Indicator */}
      <div className="step-progress mb-6">
        <Stepper
          steps={Array.from({ length: totalSteps }, (_, index) => ({
            label: `Step ${index + 1}`,
            completed: index < currentStep,
            description: isJsonMode && jsonConfig ? 
              jsonConfig.steps[`step${index + 1}`]?.title : 
              stepData?.[index]?.title
          }))}
          activeStep={currentStep}
          orientation="horizontal"
          color="primary"
          size="md"
        />
        
        {/* Current Step Title */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {isJsonMode && currentStepConfig ? currentStepConfig.title : 
             stepData?.[currentStep]?.title || `Step ${currentStep + 1}`}
          </h2>
          <p className="text-sm text-gray-500">
            Step {currentStep + 1} of {totalSteps}
          </p>
        </div>
      </div>

      {/* Step Content */}
      <div className="step-content mb-8">
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
            onOk: okRef
          })
        ) : (
          <div>No step configuration found</div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between pt-6 border-t border-gray-200">
        <div>
          {/* Back Button */}
          {currentStep > 0 && (
            <Button
              variant="outlined"
              onClick={handleBack}
              className="mr-4"
            >
              Back
            </Button>
          )}
          
          {/* Cancel Button */}
          {onCancel && (
            <Button
              variant="text"
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
        </div>

        {/* Next/Submit Button */}
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={isNextDisabled}
        >
          {isLastStep ? submitButtonName : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default MultiStepForm;