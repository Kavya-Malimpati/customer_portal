import type { Transaction } from './Interfaces';

export const getBillingHistoryApi = async (): Promise<Transaction[]> => {
  await new Promise(res => setTimeout(res, 0));

  return [
    {
      id: '1',
      date: 'Sep 15, 2023',
      description: 'Auto Premium Payment',
      method: 'Visa ****4242',
      amount: '$428.50',
      status: 'SUCCESS',
      documentUrl: '/documents/download/auto-policy-declaration.pdf',
    },
    {
      id: '2',
      date: 'Aug 15, 2023',
      description: 'Auto Premium Payment',
      method: 'Visa ****4242',
      amount: '$428.50',
      status: 'SUCCESS',
      documentUrl: '/documents/download/home-bill-april-2025.pdf',
    },
    {
      id: '3',
      date: 'Jul 17, 2023',
      description: 'Late Fee Adjustment',
      reference: 'ADJ-892',
      amount: '$25.00',
      status: 'FAILED',
      documentUrl: '/documents/download/endorsement-notice.pdf',
    },
    {
      id: '3',
      date: 'Jul 17, 2023',
      description: 'Late Fee Adjustment',
      reference: 'ADJ-892',
      amount: '$25.00',
      status: 'FAILED',
      documentUrl: '/documents/download/endorsement-notice.pdf',
    },
  ];
};
