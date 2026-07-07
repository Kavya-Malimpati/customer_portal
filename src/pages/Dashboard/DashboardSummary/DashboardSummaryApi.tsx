import type { DashboardSummaryItem } from './Interfaces';

export const getDashboardSummaryApi = async (): Promise<DashboardSummaryItem[]> => {
  await new Promise(res => setTimeout(res, 500));

  return [
    {
      id: 1,
      type: 'policies',
      title: 'ACTIVE POLICIES',
      value: '3',
      subtitle: 'Manage policies',
    },
    {
      id: 2,
      type: 'premium',
      title: 'PREMIUM DUE',
      value: '$378.00',
      subtitle: 'Due Jul 1, 2026',
    },
    {
      id: 3,
      type: 'claims',
      title: 'OPEN CLAIMS',
      value: '1',
      subtitle: 'View claims center',
    },
    {
      id: 4,
      type: 'savings',
      title: 'TOTAL SAVINGS',
      value: '$0/yr',
      subtitle: 'Active discounts',
    },
  ];
};