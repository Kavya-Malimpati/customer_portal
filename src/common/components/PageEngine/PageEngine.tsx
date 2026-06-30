import React from 'react';

import MultiStepForm from '../MultiStepForm';

import type { PageEngineProps } from './types';
const PageEngine: React.FC<PageEngineProps> = ({
  steps,
  testId = 'page-engine',
  submitButtonName,
  initialData,
  onSubmit,
  onCancel,
}) => {
  const stepData = steps.map(step => ({
    id: step.id,
    title: step.title,
    content: step.component,
  }));

  return (
    <MultiStepForm
      testId={testId}
      stepData={stepData}
      submitButtonName={submitButtonName}
      initialData={initialData}
      onSubmit={onSubmit}
      onCancel={onCancel}
    />
  );
};

export default PageEngine;
