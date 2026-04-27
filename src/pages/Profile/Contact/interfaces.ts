

export interface ViewContactData {
  primaryPhone: string;
  secondaryPhone: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  preferredCommunication: string;
}
export interface ViewContactDetailsProps {
  contactData: ViewContactData;
  onEditClick: () => void;
}