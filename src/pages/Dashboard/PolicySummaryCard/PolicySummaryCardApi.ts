import type { PolicySummaryData } from './Interfaces';

export const getPolicySummaryCardApi = async (): Promise<PolicySummaryData[]> => {
  await new Promise(res => setTimeout(res, 500));

  return [
    {
      policyType: 'Personal Auto',
      propertyOrVehicle: '2022 Toyota Camry',
      policyNumber: 'APA-8829103-02',
      renewalDate: 'Dec 31, 2026',
      status: 'ACTIVE',
    },
    {
      policyType: 'Homeowners',
      propertyOrVehicle: '123 Maple St, Oakwood',
      policyNumber: 'HMP-9921045-01',
      renewalDate: 'Nov 15, 2026',
      status: 'ACTIVE',
    },
  ];
};