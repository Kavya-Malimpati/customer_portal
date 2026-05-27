import { useEffect, useState } from 'react';
import ClaimPayoutView from './ClaimPayoutView.tsx';
import { getClaimPayoutApi } from './ClaimPayoutsApi';

import type { ClaimPayoutData, ClaimStatus } from './Interfaces';

const ClaimPayout = () => {
  const [data, setData] = useState<ClaimPayoutData | null>(null);
  const [status, setStatus] = useState<ClaimStatus>('processing');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getClaimPayoutApi();
      setData(res);
      setStatus(res.status);
    };

    fetchData();
  }, []);

  const handleChangeClick = () => {
    console.log('Change method clicked');
  };

  if (!data) return null;

  return (
    <ClaimPayoutView
      claimId={data.claimId}
      status={status}
      expectedArrival={data.expectedArrival}
      method={data.method}
      onChangeClick={handleChangeClick}
    />
  );
};

export default ClaimPayout;
