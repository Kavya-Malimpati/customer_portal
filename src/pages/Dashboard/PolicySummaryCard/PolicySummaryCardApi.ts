import type { PolicySummary } from './Interfaces';

export const getPolicySummaryApi = async (): Promise<PolicySummary[]> => {
  await new Promise(res => setTimeout(res, 500));

  return [
    {
      id: 1,
      policyType: 'Personal Auto',
      propertyOrVehicle: '2021 Honda Accord',
      policyNumber: 'APA-8821903-02',
      renewalDate: 'Dec 31, 2026',
      status: 'ACTIVE',
    },
    {
      id: 2,
      policyType: 'Homeowners',
      propertyOrVehicle: '412 Maple Street',
      policyNumber: 'HMP-9921045-01',
      renewalDate: 'Nov 15, 2026',
      status: 'ACTIVE',
    },
    {
      id: 3,
      policyType: 'Homeowners',
      propertyOrVehicle: 'Renters Insurance Protection',
      policyNumber: 'RNT-6102-734',
      renewalDate: 'Jan 20, 2027',
      status: 'ACTIVE',
    },
  ];
};
