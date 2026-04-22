import type { ChangeEvent, FormEvent } from 'react';
import type { useNavigate } from 'react-router-dom';

export interface FormField {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  label: string;
  value: string | boolean;
  isRequired: boolean;
  hasError: boolean;
  errorMessage: string;
  options?: { label: string; value: string }[];
  validationRules?: Record<string, { value: unknown; errorMessage?: string }>;
}

export interface FormDataType {
  [key: string]: FormField;
}

export interface AddContactDetailsViewProps {
  formData: FormDataType;
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  navigate: ReturnType<typeof useNavigate>;
  showConfirmModal: boolean;
  setShowConfirmModal: (value: boolean) => void;
  showSuccessModal: boolean;
  handleConfirmSubmit: () => void;
  handleSuccessModalClose: () => void;
}
