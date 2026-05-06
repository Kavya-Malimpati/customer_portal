import { useEffect, useState } from 'react';
import { fetchActiveClaim } from './ActiveClaimApi';
import type { ActiveClaim as ActiveClaimType } from './Interface';
import ActiveClaimView from './ActiveClaimView';
import { steps, formatStatus, stepLabels } from './constants';

const ActiveClaim = () => {
  const [data, setData] = useState<ActiveClaimType | null>(null);

  useEffect(() => {
    const loadActiveClaim = async () => {
      const response = await fetchActiveClaim();
      setData(response);
    };

    loadActiveClaim();
  }, []);

  const currentIndex = data ? steps.indexOf(data.status) : -1;

  return (
    <ActiveClaimView
      data={data}
      steps={steps}
      stepLabels={stepLabels}
      currentIndex={currentIndex}
      formatStatus={formatStatus}
    />
  );
};

export default ActiveClaim;