
import { useState, useEffect } from 'react';
import type { CommunicationPreferences } from './interface';

const COMM_PREF_KEY = 'communicationPreferences';
const DEFAULT_PREFS: CommunicationPreferences = {
  email: true,
  sms: false,
  portal: true,
};

export function useCommunicationPreferences() {
  const [prefs, setPrefs] = useState<CommunicationPreferences>(DEFAULT_PREFS);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COMM_PREF_KEY);
    if (stored) setPrefs(JSON.parse(stored));
  }, []);

  const handleSave = () => {
    localStorage.setItem(COMM_PREF_KEY, JSON.stringify(prefs));
    setSaved(true);
    setTimeout(() => setSaved(false), 1000);
  };

  const handleToggle = (method: keyof CommunicationPreferences) => {
    setPrefs(prev => ({ ...prev, [method]: !prev[method] }));
  };

  return {
    prefs,
    setPrefs,
    saved,
    handleSave,
    handleToggle,
  };
}
