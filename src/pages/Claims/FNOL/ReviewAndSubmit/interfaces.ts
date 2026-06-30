export interface FormField {
  value?: string;
  label?: string;
  options?: {
    value: string;
    label: string;
  }[];
  hasError?: boolean;
  errorMessage?: string;
}

export interface ReviewFormData {
  claimDetails?: {
    claimType?: string;
    policy?: FormField;
    lossType?: FormField;
  };

  incidentDetails?: {
    dateOfLoss?: FormField;
    timeOfLoss?: FormField;
    location?: FormField;
    description?: FormField;
    weatherConditions?: FormField;
    roadConditions?: FormField;
  };

  partiesAndDamage?: {
    insuredDriver?: FormField;
    insuredVehicle?: FormField;
    otherPartyName?: FormField;
    otherPartyContact?: FormField;
    damageExtent?: FormField;
    affectedAreas?: FormField;
    injuries?: FormField;
    injuryDetails?: FormField;
    policeReportNumber?: FormField;
  };

  uploadEvidence?: {
    photos?: File[];
    videos?: File[];
    reports?: File[];
    estimates?: File[];
  };
}