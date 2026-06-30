import type React from 'react';

import type { FormData, StepContentProps } from '../components/MultiStepForm';

export interface PageStep {
  id: string;
  title: string;
  component: React.ComponentType<StepContentProps>;
}

export interface PageEngineProps {
  steps: PageStep[];

  testId?: string;

  submitButtonName?: string;

  initialData?: FormData;

  onSubmit: (data: FormData) => void;

  onCancel?: () => void;
}
