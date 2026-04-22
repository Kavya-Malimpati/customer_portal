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
        notifications: {
          policies: parsed.notifications?.policies ?? false,
          billing: parsed.notifications?.billing ?? false,
          claims: parsed.notifications?.claims ?? false,
        },
        alerts: {
          email: parsed.alerts?.email ?? false,
          sms: parsed.alerts?.sms ?? false,
          portal: parsed.alerts?.portal ?? false,
        },
        smsEnrollment: {
          email: parsed.smsEnrollment?.email ?? false,
          sms: parsed.smsEnrollment?.sms ?? false,
          portal: parsed.smsEnrollment?.portal ?? false,
          textEnrollment: parsed.smsEnrollment?.textEnrollment ?? false,
        },
        display: {
          language: parsed.display?.language ?? 'english',
          theme: parsed.display?.theme ?? 'light',
        },
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
    smsEnrollment: {
      textEnrollment: false,
    },
    display: {
      language: 'english',
      theme: 'light',
    },
    saved: false,
  };
};

const Settings = () => {
  const [preferences, setPreferences] = useState<PreferencesState>(getInitialPreferences);

  useEffect(() => {
    localStorage.setItem(
      'preferences',
      JSON.stringify({
        notifications: preferences.notifications,
        alerts: preferences.alerts,
        smsEnrollment: preferences.smsEnrollment,
        display: preferences.display,
      }),
    );
  }, [
    preferences.notifications,
    preferences.alerts,
    preferences.smsEnrollment,
    preferences.display,
  ]);

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

export default Settings;