import type { ClaimHistoryItem } from './Interface';

const autoHistory: ClaimHistoryItem[] = [
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
    type: 'Collision',
    dateFiled: 'March 18, 2026',
    amount: '$4,800.00',
    status: 'Paid',
  },
];

const homeHistory: ClaimHistoryItem[] = [
  {
    id: 'HPC-3102',
    type: 'Water Damage',
    dateFiled: 'June 21, 2026',
    amount: '$3,850.00',
    status: 'Paid',
  },
  {
    id: 'HPC-2844',
    type: 'Fire Damage',
    dateFiled: 'April 11, 2026',
    amount: '$15,400.00',
    status: 'Archived',
  },
  {
    id: 'HPC-1708',
    type: 'Storm Damage',
    dateFiled: 'February 03, 2026',
    amount: '$6,200.00',
    status: 'Paid',
  },
];

export const fetchClaimHistory = async (
  policyType: 'auto' | 'home'
): Promise<ClaimHistoryItem[]> => {
  return policyType === 'auto'
    ? autoHistory
    : homeHistory;
};