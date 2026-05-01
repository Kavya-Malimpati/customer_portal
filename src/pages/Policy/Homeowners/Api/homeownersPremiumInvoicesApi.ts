import type { PolicyDocument } from '../../CommonViews/interfaces';

export const getHomeownersPremiumInvoicesApi = async (): Promise<PolicyDocument | null> =>
  Promise.resolve({
    id: 'home-inv-2023-12',
    title: 'Premium Invoice',
    description: 'December 2023 Homeowners Premium payment confirmation.',
    fileMeta: 'PDF • 1.3 MB',
    downloadUrl: '/home/invoices/2023-12.pdf',
  });
