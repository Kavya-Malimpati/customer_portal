import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import type { HomeownersPolicy } from './interfaces';

import HomeownersPolicyPageView from './HomeownersPolicyPageView';
import { getHomeownersPolicyDetailsApi } from './Api/homeownersPolicyApi';

const HomeownersPolicyPage = () => {
  const navigate = useNavigate();

  const [policy, setPolicy] = useState<HomeownersPolicy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const mapHomeownersPolicyToHeader = (policy: HomeownersPolicy) => ({
    policyType: policy.policyType,
    policyNumber: policy.policyNumber,
    status: policy.status,
    endDate: policy.endDate,
  });

  useEffect(() => {
    const loadPolicy = async () => {
      try {
        setIsLoading(true);
        const data = await getHomeownersPolicyDetailsApi();
        setPolicy(data);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadPolicy();
  }, []);

  if (isLoading) return null;
  if (hasError || !policy) return null;

  return (
    <HomeownersPolicyPageView
      policy={policy}
      headerData={mapHomeownersPolicyToHeader(policy)}
      onBack={() => navigate(-1)}
    />
  );
};

export default HomeownersPolicyPage;
