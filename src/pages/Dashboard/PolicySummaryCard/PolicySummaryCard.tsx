import { useEffect, useState } from 'react';

import PolicySummaryCardView from './PolicySummaryCardView';
import { getPolicySummaryApi } from './PolicySummaryCardApi';

import type { PolicySummary } from './Interfaces';

const PolicySummaryCard = () => {
  const [policies, setPolicies] = useState<PolicySummary[]>([]);

  useEffect(() => {
    const fetchPolicies = async () => {
      const response = await getPolicySummaryApi();
      setPolicies(response);
    };

    fetchPolicies();
  }, []);

  if (!policies.length) {
    return null;
  }

  return (
    <PolicySummaryCardView
      policies={policies}
    />
  );
};

export default PolicySummaryCard;