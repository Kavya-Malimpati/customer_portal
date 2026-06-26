import type { ActivityItem } from './Interfaces';

export const getRecentActivityApi = async (): Promise<ActivityItem[]> => {
  await new Promise(res => setTimeout(res, 500));

  return [
    {
      id: 1,
      title: 'Payment Successful',
      description: 'Sep 15, 2023 • Auto Insurance Premium',
      icon: 'payment',
    },
    {
      id: 2,
      title: 'Policy Endorsement',
      description: 'Apr 17, 2023 • Coverage adjusted for Homeowners',
      icon: 'policy',
    },
    {
      id: 3,
      title: 'Roadside Service Completed',
      description: 'Mar 02, 2023 • Battery jump-start service',
      icon: 'roadside',
    },
  ];
};