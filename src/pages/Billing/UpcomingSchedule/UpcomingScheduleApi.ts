import type { InstallmentData } from './Interfaces';

export const getUpcomingScheduleApi = async (): Promise<InstallmentData[]> => {
  await new Promise(res => setTimeout(res, 500));

  return [
    {
      date: 'October 15',
      name: 'Auto Insurance Premium',
      policyNumber: 'Policy #M0M-11209',
      amount: '$428.50',
      status: 'scheduled',
    },
    {
      date: 'November 15',
      name: 'Auto Insurance Premium',
      policyNumber: 'Policy #M0M-11209',
      amount: '$428.50',
      status: 'pending',
    },
    {
      date: 'December 15',
      name: 'Auto Insurance Premium',
      policyNumber: 'Policy #M0M-11209',
      amount: '$428.50',
      status: 'pending',
    },
  ];
};
