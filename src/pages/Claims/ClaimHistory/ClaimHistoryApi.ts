import type { ClaimHistoryItem } from './Interface';

export const fetchClaimHistory = async (): Promise<ClaimHistoryItem[]> => {
  return [
    {
      id: 'APC-8271',
      type: 'Comprehensive (Theft)',
      dateFiled: 'May 14, 2026',
      amount: '$1,240.00',
      status: 'Archived',
    },
    {
      id: 'APC-7110',
      type: 'Glass Repair',
      dateFiled: 'April 02, 2026',
      amount: '$225.50',
      status: 'Paid',
    },
    {
      id: 'APC-4432',
      type: 'Collision (At Fault)',
      dateFiled: 'March 18, 2026',
      amount: '$4,800.00',
      status: 'Paid',
    },
  ];
};