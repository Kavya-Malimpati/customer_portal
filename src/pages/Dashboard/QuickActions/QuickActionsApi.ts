import type { QuickActionItem } from './Interfaces';

export const getQuickActionsApi = async (): Promise<QuickActionItem[]> => {
  await new Promise(res => setTimeout(res, 500));

  return [
    {
      id: 1,
      title: 'File a Claim',
      icon: 'claim',
    },
    {
      id: 2,
      title: 'ID Cards',
      icon: 'idcard',
    },
    {
      id: 3,
      title: 'Get a Quote',
      icon: 'quote',
    },
    {
      id: 4,
      title: 'Policy Docs',
      icon: 'docs',
    },
  ];
};