import type { RenewalHistoryRow } from '../Cards/interfaces';

export const getHomeRenewalHistoryApi = async (): Promise<RenewalHistoryRow[]> => {
  return Promise.resolve([
    {
      termPeriod: 'Jan 01, 2025 – Jan 01, 2026',
      policyType: 'Homeowners',
      premium: '$1,980.00',
      claims: '0',
      status: 'ACTIVE',
    },
    {
      termPeriod: 'Jan 01, 2024 – Jan 01, 2025',
      policyType: 'Homeowners',
      premium: '$1,920.00',
      claims: '1',
      status: 'EXPIRED',
    },
    {
      termPeriod: 'Jan 01, 2023 – Jan 01, 2024',
      policyType: 'Homeowners',
      premium: '$1,850.00',
      claims: '0',
      status: 'EXPIRED',
    },
  ]);
};
