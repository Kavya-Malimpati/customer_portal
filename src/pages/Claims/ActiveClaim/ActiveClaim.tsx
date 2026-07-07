import type { ActiveClaim as ActiveClaimType } from './Interface';
import ActiveClaimView from './ActiveClaimView';
import { steps, formatStatus, stepLabels } from './constants';

interface ActiveClaimProps {
  activeClaimData: ActiveClaimType;
}

const ActiveClaim = ({ activeClaimData }: ActiveClaimProps) => {
  const currentIndex = steps.indexOf(activeClaimData.status);

  return (
    <ActiveClaimView
      data={activeClaimData}
      steps={steps}
      stepLabels={stepLabels}
      currentIndex={currentIndex}
      formatStatus={formatStatus}
    />
  );
};

export default ActiveClaim;
