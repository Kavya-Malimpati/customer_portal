import '../../../styles/tokens.css';

import React, { useState } from 'react';

import Tooltip from '../Tooltip/Tooltip';

export interface StepperStep {
  label: React.ReactNode;
  content?: React.ReactNode;
  completed?: boolean;
  description?: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}
export interface StepperProps {
  steps: StepperStep[];
  id?: string;
  className?: string;
  type?: 'linear' | 'non-linear';
  value?: number;
  defaultValue?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
  step?: number;
  title?: string;
  activeStep?: number;
  orientation?: 'horizontal' | 'vertical';

  connector?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit';
  size?: 'sm' | 'md' | 'lg';
  onClick?: (stepIndex: number) => void;
  onFocus?: (stepIndex: number) => void;
  onBlur?: (stepIndex: number) => void;
  style?: React.CSSProperties;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-disabled'?: boolean;
  'aria-controls'?: string;
  'aria-current'?: 'step' | 'page' | 'location' | 'date' | 'time' | boolean;
  'aria-live'?: 'off' | 'polite' | 'assertive';
}

const sizeConfig: Record<
  'sm' | 'md' | 'lg',
  { width: string; height: string; fontSize: string; iconSize: string }
> = {
  sm: {
    width: 'var(--control-height-sm)',
    height: 'var(--control-height-sm)',
    fontSize: 'var(--font-size-xs)',
    iconSize: '14px',
  },
  md: {
    width: 'var(--control-height-md)',
    height: 'var(--control-height-md)',
    fontSize: 'var(--font-size-md)',
    iconSize: '18px',
  },
  lg: {
    width: 'var(--control-height-lg)',
    height: 'var(--control-height-lg)',
    fontSize: 'var(--font-size-lg)',
    iconSize: '24px',
  },
};
const Stepper: React.FC<StepperProps> = ({
  steps,
  id,
  className,
  type = 'linear',
  value: controlledValue,
  defaultValue = 0,
  disabled = false,
  min = 0,
  max = steps.length - 1,
  step: stepIncrement = 1,
  title,
  activeStep: legacyActiveStep,
  orientation = 'horizontal',
  size = 'md',
  onClick,
  onFocus,
  onBlur,
  style,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  'aria-disabled': ariaDisabled,
  'aria-controls': ariaControls,
  'aria-current': ariaCurrent,
  'aria-live': ariaLive = 'polite',
}) => {
  const isControlled = controlledValue !== undefined;
  const [uncontrolledValue, setUncontrolledValue] = useState(Math.max(min ?? 0, defaultValue));
  const currentStep = isControlled
    ? Math.min(controlledValue, max ?? steps.length - 1)
    : (legacyActiveStep ?? uncontrolledValue);
  const handleStepClick = (stepIndex: number) => {
    if (disabled || steps[stepIndex]?.disabled) return;
    const validatedIndex = Math.max(min ?? 0, Math.min(stepIndex, max ?? steps.length - 1));
    if (type === 'linear' && validatedIndex > currentStep) {
      const canProceed = steps.slice(0, validatedIndex).every(s => s.completed);
      if (!canProceed) return;
    }
    if (!isControlled) {
      setUncontrolledValue(validatedIndex);
    }
    onClick?.(validatedIndex);
  };
  const handleStepFocus = (stepIndex: number) => {
    onFocus?.(stepIndex);
  };
  const handleStepBlur = (stepIndex: number) => {
    onBlur?.(stepIndex);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, stepIndex: number) => {
    if (disabled) return;
    let nextStep: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      nextStep = Math.min(currentStep + (stepIncrement ?? 1), max ?? steps.length - 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      nextStep = Math.max(currentStep - (stepIncrement ?? 1), min ?? 0);
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextStep = min ?? 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextStep = max ?? steps.length - 1;
    }
    if (nextStep !== null && nextStep !== stepIndex) {
      handleStepClick(nextStep);
    }
  };
  const getCurrentStepAriaProps = (stepIndex: number) => {
    const isCurrentStep = stepIndex === currentStep;
    return {
      'aria-current': isCurrentStep ? ariaCurrent || 'step' : undefined,
      'aria-selected': isCurrentStep,
    };
  };
  const getStepButtonStyle = (
    isActive: boolean,
    isCompleted: boolean,
    isDisabled: boolean | undefined,
  ): React.CSSProperties => {
    const sizeConfig_value = sizeConfig[size] || sizeConfig.md;
    const backgroundColor = (isActive || isCompleted) ? 'var(--color-info)' : 'var(--color-gray-300)';
    return {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-full)',
      border: `var(--border-width-md) solid ${backgroundColor}`,
      transition: 'all var(--transition-fast)',
      width: sizeConfig_value.width,
      height: sizeConfig_value.height,
      fontWeight: 'var(--font-weight-semibold)',
      backgroundColor,
      color: 'white',
      cursor: isDisabled ? 'var(--cursor-disabled)' : 'pointer',
      opacity: isDisabled ? 'var(--opacity-disabled)' : 1,
    };
  };
  const getStepIndicatorContent = (
    stepData: StepperStep,
    stepIndex: number,
  ): React.ReactNode => {
    if (stepData.icon) return stepData.icon;
    return <span>{stepIndex + 1}</span>;
  };

  const stepperContent = (
    <div
      id={id}
      style={{
        display: 'flex',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        justifyContent: 'center',
        gap: orientation === 'horizontal' ? '0' : 'var(--space-6)',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        ...style,
      }}
      className={className}
      role='tablist'
      aria-orientation={orientation}
      aria-label={ariaLabel || `Stepper with ${steps.length} steps`}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      aria-disabled={ariaDisabled ?? disabled}
      aria-controls={ariaControls}
      aria-live={ariaLive}
    >
      {steps.map((stepData, stepIndex) => {
        const isActive = stepIndex === currentStep;
        const isCompleted = stepData.completed ?? stepIndex < currentStep;
        const isDisabled = disabled || stepData.disabled;
        const canNavigate =
          type === 'non-linear' ||
          stepIndex <= currentStep ||
          (isCompleted && stepIndex === currentStep + 1);
        const stepKey = `step-${typeof stepData.label === 'string' ? stepData.label.toLowerCase().replaceAll(/\s+/g, '-') : stepIndex}`;
        const stepLabel =
          typeof stepData.label === 'string' ? stepData.label : `Step ${stepIndex + 1}`;
        const stepAriaLabel = ariaLabel || stepLabel;

        return (
          <div
            key={stepKey}
            style={{
              display: 'flex',
              flex: orientation === 'horizontal' ? '1 1 0' : undefined,
              alignItems: 'flex-start',
              justifyContent: 'center',
              marginBottom: orientation === 'vertical' ? 'var(--space-4)' : undefined,
              flexDirection: 'column',
              position: 'relative',
              width: orientation === 'horizontal' ? '100%' : undefined,
            }}
          >
            {/* Connector line after step */}
            {stepIndex < steps.length - 1 && orientation === 'horizontal' && (
              <div
                style={{
                  position: 'absolute',
                  top: '22px',
                  left: 'calc(17% + 24px)',
                  right: 'calc(17% + 24px)',
                  height: '2px',
                  width: 'calc(80% - 24px)',
                  backgroundColor:
                    (stepData.completed ?? stepIndex < currentStep)
                      ? 'var(--color-info)'
                      : 'var(--color-gray-300)',
                  transform: 'translateY(-50%)',
                  zIndex: 0,
                }}
              />
            )}

            {/* Step indicator */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <button
                type='button'
                style={getStepButtonStyle(isActive, isCompleted, isDisabled)}
                aria-label={stepAriaLabel}
                onClick={() => handleStepClick(stepIndex)}
                onKeyDown={e => handleKeyDown(e, stepIndex)}
                onFocus={() => handleStepFocus(stepIndex)}
                onBlur={() => handleStepBlur(stepIndex)}
                disabled={isDisabled || !canNavigate}
                tabIndex={isActive ? 0 : -1}
                {...getCurrentStepAriaProps(stepIndex)}
              >
                {getStepIndicatorContent(stepData, stepIndex)}
              </button>

              {/* Step label below circle */}
              {stepData.label && (
                <p
                  style={{
                    color: 'var(--color-gray-600)',
                    fontSize: 'var(--font-size-xs)',
                    marginTop: 'var(--space-2)',
                    margin: 'var(--space-2) 0 0 0',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                  }}
                >
                  {stepData.label}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
  return title ? <Tooltip title={title}>{stepperContent}</Tooltip> : stepperContent;
};
export default Stepper;
