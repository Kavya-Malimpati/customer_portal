export interface NotificationSettings {
  policies: boolean;
  billing: boolean;
  claims: boolean;
}

export interface AlertPreferences {
  email: boolean;
  sms: boolean;
  portal: boolean;
}

export interface DisplaySettings {
  language: string;
  theme: 'light' | 'dark' | 'system';
}

export interface SmsEnrollment {
  textEnrollment: boolean;
}

export interface PreferencesState {
  notifications: NotificationSettings;
  alerts: AlertPreferences;
  display: DisplaySettings;
  smsEnrollment: SmsEnrollment;
  saved: boolean;
}

export interface SettingsUIProps {
  preferences: PreferencesState;
  handleSavePreferences: () => void;
  handlePreferenceChange: (update: Partial<PreferencesState>) => void;
}