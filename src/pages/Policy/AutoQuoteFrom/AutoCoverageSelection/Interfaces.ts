export interface CoverageSelectionFormData {
  liabilityLimit: string;
  collisionDeductible: string;
  comprehensiveDeductible: string;
  uninsuredMotorist: string;
  medicalCoverage: string;
  roadsideAssistance: string;
}

export interface CoverageSelectionProps {
  data?: Record<string, unknown>;
  onDataChange?: (
    data: CoverageSelectionFormData,
  ) => void;
}

export interface CoverageSelectionViewProps {
  formData: CoverageSelectionFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => void;
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => void;
}

export interface CoverageField {
  name: string;
  label: string;
  options: {
    label: string;
    value: string;
  }[];
}

export interface CoverageSection {
  title: string;
  fields: CoverageField[];
}