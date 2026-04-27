// AutoPolicyPage.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAutoPolicyDetailsApi } from './Api/autoPolicyApi';
import type { AutoPolicy } from './Cards/interfaces';

import AutoPolicyPageView from './AutoPolicyPageView';

const AutoPolicyPage = () => {
  const navigate = useNavigate();

  const [policy, setPolicy] = useState<AutoPolicy | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadPolicy = async () => {
      try {
        setIsLoading(true);
        const data = await getAutoPolicyDetailsApi();
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

  return <AutoPolicyPageView policy={policy} onBack={() => navigate(-1)} />;
};

export default AutoPolicyPage;
