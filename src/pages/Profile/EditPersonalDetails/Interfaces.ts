export type FieldType = 'text' | 'date' | 'select';

export interface Option {
  label: string;
  value: string;
}

export interface FieldConfig {
  id: string;
  value: string;
  type: FieldType;
  label?: string;
  options?: Option[];
  hasError: boolean;
  errorMessage: string;
}

export type FormDataType = Record<string, FieldConfig>;

export interface ValidationResult {
  id: string;
  isValid: boolean;
  errorMessage: string;
}

export interface EditPersonalDetailsUiProps {
  formData: FormDataType;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onBack: () => void;
  isConfirmOpen: boolean;
  onCloseModal: () => void;
  onConfirm: () => void;
}