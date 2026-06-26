export interface PolicySummaryData {
  policyType: string;
  propertyOrVehicle: string;
  policyNumber: string;
  renewalDate: string;
  status: 'ACTIVE' | 'PENDING' | 'EXPIRED';
}

export interface PolicySummaryCardUiProps {
  policies: PolicySummaryData[];
}