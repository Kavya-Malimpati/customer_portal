export type PolicyTabKey = 'personalAuto' | 'homeowners';

export interface PolicyTabMetadata {
  key: PolicyTabKey;
  label: string;
  heading: string;
  subheading: string;
}
