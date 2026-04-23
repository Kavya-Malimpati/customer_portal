export type ProfileTabKey = 'profile' | 'documents' | 'agency' | 'settings';

export interface ProfileTabMetadata {
  key: ProfileTabKey;
  label: string;
  heading: string;
  subheading: string;
}
