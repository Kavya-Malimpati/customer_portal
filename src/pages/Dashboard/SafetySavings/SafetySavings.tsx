import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SafetySavingsView from './SafetySavingsView';
import { getSafetySavingsApi } from './SafetySavingsApi';

import type { SafetyTip } from './Interfaces';

const SafetySavings = () => {
  const navigate = useNavigate();
  const [tips, setTips] = useState<SafetyTip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSafetySavingsApi().then(data => {
      setTips(data);
      setLoading(false);
    });
  }, []);

  const handleNavigateSafetyTips = () => {
    navigate('/services#safety-tips');
  };

  if (loading) {
    return null;
  }

  return <SafetySavingsView tips={tips} onNavigateSafetyTips={handleNavigateSafetyTips} />;
};

export default SafetySavings;
