// AutoPolicyPage.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getHomeownersPolicyDetailsApi } from './Api/homeownersPolicyApi';
import type { HomeownersPolicy } from './Cards/interfaces';

import HomeownersPolicyPageView from './HomeownersPolicyPageView';

const HomeownersPolicyPage = () => {
  const navigate = useNavigate();

  const [policy, setPolicy] = useState<HomeownersPolicy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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

  return <HomeownersPolicyPageView policy={policy} onBack={() => navigate(-1)} />;
};

export default HomeownersPolicyPage;
