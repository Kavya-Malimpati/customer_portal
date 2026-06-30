import { useEffect, useState } from 'react';

import SafetySavingsView from './SafetySavingsView';
import { getSafetySavingsApi } from './SafetySavingsApi';

import type { SafetyTip } from './Interfaces';

const SafetySavings = () => {
  const [tips, setTips] = useState<SafetyTip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSafetySavingsApi().then(data => {
      setTips(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return <SafetySavingsView tips={tips} />;
};

export default SafetySavings;