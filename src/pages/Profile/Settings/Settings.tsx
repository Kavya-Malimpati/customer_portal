import { useEffect, useState } from 'react';
import SettingsUI from './SettingsView';
import type { PreferencesState } from './Interface';

const getInitialPreferences = (): PreferencesState => {
  try {
    const saved = localStorage.getItem('preferences');

    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...parsed,
        saved: false,
      };
    }
  } catch (e) {
    console.error('Failed to parse preferences', e);
  }

  return {
    notifications: {
      policies: false,
      billing: false,
      claims: false,
    },
    alerts: {
      email: false,
      sms: false,
      portal: false,
    },
    display: {
      language: 'english',
      theme: 'light',
    },
    saved: false,
  };
};

const Setting = () => {
  const [preferences, setPreferences] = useState<PreferencesState>(getInitialPreferences);

  useEffect(() => {
    localStorage.setItem(
      'preferences',
      JSON.stringify({
        notifications: preferences.notifications,
        alerts: preferences.alerts,
        display: preferences.display,
      }),
    );
  }, [preferences.notifications, preferences.alerts, preferences.display]);

  const handleSavePreferences = () => {
    setPreferences(prev => ({
      ...prev,
      saved: true,
    }));
  };

  const handlePreferenceChange = (update: Partial<PreferencesState>) => {
    setPreferences(prev => ({
      ...prev,
      ...update,
      saved: false,
    }));
  };

  return (
    <SettingsUI
      preferences={preferences}
      handleSavePreferences={handleSavePreferences}
      handlePreferenceChange={handlePreferenceChange}
    />
  );
};

export default Setting;