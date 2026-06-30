import React from 'react';

export interface FieldOption {
  label: string;
  value: string;
}

export interface FieldConfig {
  id: string;
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  value: any;
  isRequired?: boolean;
  hasError: boolean;
  errorMessage: string;
  options?: FieldOption[];
}

export interface FormDataType {
  [key: string]: FieldConfig;
}

export interface ValidationResult {
  id: string;
  isValid: boolean;
  errorMessage: string;
}

export interface VehicleDriverDetailsViewProps {
  formData: FormDataType;

  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >,
  ) => void;
}