import contactConfig from '../../../config/updatecontactdetails.json';

export type FormDataType = typeof contactConfig;

export interface ValidationResult {
  id: string;
  isValid: boolean;
  errorMessage: string;
}
export interface Props {
  onClose: () => void;
}


export interface UpdateContactViewProps {
  formData: FormDataType;

  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;

  isConfirmOpen: boolean;
  onCloseModal: () => void;
  onConfirm: () => void;

  onBack: () => void;
}
