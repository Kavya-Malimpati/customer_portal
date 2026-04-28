export interface NotificationSettings {
  policies: boolean;
  billing: boolean;
  claims: boolean;
}

export interface AlertPreferences {
  policyEmail: boolean;
  policySms: boolean;
  claimsEmail: boolean;
  claimsSms: boolean;
  billingEmail: boolean;
  billingSms: boolean;
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
  discarded: boolean;
}

export interface SettingsUIProps {
  preferences: PreferencesState;
  handleSavePreferences: () => void;
  handleDiscardPreferences: () => void;
  handlePreferenceChange: (update: Partial<PreferencesState>) => void;
}