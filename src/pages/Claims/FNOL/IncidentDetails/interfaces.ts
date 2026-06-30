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
  options?: Option[];
  hasError?: boolean;
  errorMessage?: string;
}

export interface ClaimDetails {
  claimType: string;
}

export interface IncidentDetailsFormData {
  dateOfLoss: FieldConfig;
  timeOfLoss: FieldConfig;
  location: FieldConfig;
  description: FieldConfig;
  weatherConditions: FieldConfig;
  roadConditions: FieldConfig;
}

export interface IncidentDetailsViewProps {
  formData: IncidentDetailsFormData;
  claimType: string;
  onChange: (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >,
  ) => void;
}