export type PolicyType = 'Personal Auto' | 'Homeowners';

export interface PolicySummary {
  id: number;
  policyType: PolicyType;
  propertyOrVehicle: string;
  policyNumber: string;
  renewalDate: string;
  status: 'ACTIVE';
}

export interface PolicySummaryCardUiProps {
  policies: PolicySummary[];
}