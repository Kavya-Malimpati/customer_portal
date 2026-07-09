import { useEffect, useState } from 'react';

import { fetchClaimHistory } from './ClaimHistoryApi';

import ClaimHistoryView from './ClaimHistoryView';

import type {
  ClaimHistoryItem,
  ClaimHistoryProps,
} from './Interface';

const ClaimHistory = ({
  policyType,
}: ClaimHistoryProps) => {
  const [data, setData] = useState<ClaimHistoryItem[]>([]);

  useEffect(() => {
    fetchClaimHistory(policyType).then(setData);
  }, [policyType]);

  return (
    <ClaimHistoryView
      data={data}
    />
  );
};

export default ClaimHistory;