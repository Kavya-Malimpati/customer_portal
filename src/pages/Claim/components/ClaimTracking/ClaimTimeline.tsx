import {
  CardContent,
  Stepper,

} from '../../../../common/components';

import type { StepperStep } from '../../../../common/components/Stepper/Stepper';
import type { TimelineStep } from '../../types';

interface Props {
  timeline: TimelineStep[];
}

const ClaimTimeline = ({ timeline }: Props) => {
  const activeStep = timeline.findIndex(step => step.status === 'current');

  const steps: StepperStep[] = timeline.map(step => ({
    label: step.label,
    description: step.date,
    completed: step.status === 'completed',
  }));

  return (
    <div>

      <CardContent>
        <Stepper
          steps={steps}
          value={activeStep === -1 ? 0 : activeStep}
          type="linear"
          orientation="horizontal"
          showStepLabels
        />
      </CardContent>
    </div>
  );
};

export default ClaimTimeline;