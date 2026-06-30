export interface Option {
  value: string;
  label: string;
}

export interface FieldConfig {
  id: string;
  type: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  options: Option[];
  hasError?: boolean;
  errorMessage?: string;
}

export interface ClaimDetails {
  claimType: string;
}

export interface PolicyLossTypeFormData {
  policy: FieldConfig;
  lossType: FieldConfig;
}

export interface PolicyLossTypeViewProps {
  formData: PolicyLossTypeFormData;
  claimType: string;
  coverageNote: string;

  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >,
  ) => void;
}