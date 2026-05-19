import type { PolicyDocument } from '../../CommonViews/interfaces';

export const getAutoPremiumInvoicesApi = async (): Promise<PolicyDocument | null> =>
  Promise.resolve({
    id: 'inv-2025-12',
    title: 'Premium Invoice',
    description: 'December 2026 premium payment confirmation.',
    fileMeta: 'PDF • 1.1 MB',
    downloadUrl: '/documents/invoices/inv-2023-12.pdf',
  });
