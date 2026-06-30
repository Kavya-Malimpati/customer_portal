import { useEffect, useState } from 'react';

import PolicySummaryCardView from './PolicySummaryCardView';
import { getPolicySummaryCardApi } from './PolicySummaryCardApi';

import type { PolicySummaryData } from './Interfaces';

const PolicySummaryCard = () => {
  const [policies, setPolicies] = useState<PolicySummaryData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPolicySummaryCardApi().then(data => {
      setPolicies(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return <PolicySummaryCardView policies={policies} />;
};

export default PolicySummaryCard;