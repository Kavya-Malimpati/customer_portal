import { useEffect, useState } from 'react';
import SettingsUI from './SettingsView';
import type { PreferencesState } from './Interface';

const getInitialPreferences = (): PreferencesState => {
  try {
    const saved = localStorage.getItem('preferences');

    if (saved) {
      const parsed = JSON.parse(saved);

      return {
        notifications: {
          policies: parsed.notifications?.policies ?? false,
          billing: parsed.notifications?.billing ?? false,
          claims: parsed.notifications?.claims ?? false,
        },
        alerts: {
          policyEmail: parsed.alerts?.policyEmail ?? true,
          policySms: parsed.alerts?.policySms ?? false,
          claimsEmail: parsed.alerts?.claimsEmail ?? true,
          claimsSms: parsed.alerts?.claimsSms ?? true,
          billingEmail: parsed.alerts?.billingEmail ?? true,
          billingSms: parsed.alerts?.billingSms ?? true,
          portal: parsed.alerts?.portal ?? false,
        },
        smsEnrollment: {
          textEnrollment: parsed.smsEnrollment?.textEnrollment ?? false,
        },
        display: {
          language: parsed.display?.language ?? 'english',
          theme: parsed.display?.theme ?? 'light',
        },
        saved: false,
        discarded: false,
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
      policyEmail: true,
      policySms: false,
      claimsEmail: true,
      claimsSms: true,
      billingEmail: true,
      billingSms: true,
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
    discarded: false,
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
      discarded: false,
    }));
  };

  const handleDiscardPreferences = () => {
    setPreferences(prev => ({
      ...prev,
      saved: false,
      discarded: true,
    }));
  };

  const handlePreferenceChange = (update: Partial<PreferencesState>) => {
    setPreferences(prev => ({
      ...prev,
      ...update,
      saved: false,
      discarded: false,
    }));
  };

  return (
    <SettingsUI
      preferences={preferences}
      handleSavePreferences={handleSavePreferences}
      handleDiscardPreferences={handleDiscardPreferences}
      handlePreferenceChange={handlePreferenceChange}
    />
  );
};

export default Settings;