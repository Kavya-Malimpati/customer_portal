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

export interface PartiesAndDamageFormData {
  otherDriverName: FieldConfig;
  otherDriverContact: FieldConfig;
  insuranceCompany: FieldConfig;
  vehicleInformation: FieldConfig;
  witnessInformation: FieldConfig;
  injuries: FieldConfig;
  policeReportNumber: FieldConfig;

  damagedArea: FieldConfig;
  damagedProperty: FieldConfig;
  emergencyServices: FieldConfig;
  propertyHabitable: FieldConfig;
  thirdPartyInvolved: FieldConfig;
  firePoliceReportNumber: FieldConfig;
}

export interface PartiesAndDamageViewProps {
  formData: PartiesAndDamageFormData;
  claimType: string;
  onChange: (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
    >,
  ) => void;
}