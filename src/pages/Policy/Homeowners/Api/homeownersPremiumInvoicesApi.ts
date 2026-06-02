import type { PolicyDocument } from '../../CommonViews/interfaces';

export const getHomeownersPremiumInvoicesApi = async (): Promise<PolicyDocument | null> =>
  Promise.resolve({
    id: 'home-inv-2025-12',
    title: 'Premium Invoice',
    description: 'December 2026 Homeowners Premium payment confirmation.',
    fileMeta: 'PDF • 1.3 MB',
    downloadUrl: '/home/invoices/2025-12.pdf',
  });
