export interface PaperlessPreferencesState {
  enabled: boolean;
  email: boolean;
  sms: boolean;
  documents: boolean;
  emailAddress: string;
}

export interface PaperlessPreferencesViewProps {
  paperless: PaperlessPreferencesState;
  onPaperlessChange: (paperless: PaperlessPreferencesState) => void;
}