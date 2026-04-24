import contactConfig from '../../../config/updatecontactdetails.json';
import verificationConfig from '../../../config/verificationmethod.json';

export type FormDataType = typeof contactConfig;
export type VerificationType = typeof verificationConfig;

export interface ContactHistoryItem {
  phone: string;
  email: string;
  streetAddress: string;
  aptNumber: string;
  city: string;
  state: string;
  zipcode: string;
  country: string;
}

export interface UpdateContactViewProps {
  formData: FormDataType;
  verificationData: VerificationType;
  contactHistory: ContactHistoryItem[];

  showHistory: boolean;
  showReverification: boolean;
  showSuccessMessage: boolean;
  pendingContact: ContactHistoryItem | null;
  showClearHistoryModal: boolean;

  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onToggleHistory: () => void;
  onClearHistory: () => void;
  onCancelVerification: () => void;
  onConfirmVerification: () => void;
  onConfirmClearHistory: () => void;
  onCancelClearHistory: () => void;
  onBack: () => void;
}
