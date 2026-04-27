import type { RenewalHistoryRow } from '../Cards/interfaces';

export const getAutoRenewalHistoryApi = async (): Promise<RenewalHistoryRow[]> => {
  return Promise.resolve([
    {
      termPeriod: 'Dec 31, 2024 – Dec 31, 2025',
      policyType: 'Personal Auto',
      premium: '$1,420.00',
      claims: '0',
      status: 'ACTIVE',
    },
    {
      termPeriod: 'Dec 31, 2023 – Dec 31, 2024',
      policyType: 'Personal Auto',
      premium: '$1,380.00',
      claims: '1',
      status: 'EXPIRED',
    },
    {
      termPeriod: 'Dec 31, 2022 – Dec 31, 2023',
      policyType: 'Personal Auto',
      premium: '$1,290.00',
      claims: '0',
      status: 'EXPIRED',
    },
  ]);
};