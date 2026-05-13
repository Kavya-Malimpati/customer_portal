import { useEffect, useState } from 'react';
import { fetchClaimHistory } from './ClaimHistoryApi';
import type { ClaimHistoryItem } from './Interface';
import ClaimHistoryView from './ClaimHistoryView';

const ClaimHistory = () => {
  const [data, setData] = useState<ClaimHistoryItem[]>([]);

  useEffect(() => {
    fetchClaimHistory().then(setData);
  }, []);

  return <ClaimHistoryView data={data} />;
};

export default ClaimHistory;