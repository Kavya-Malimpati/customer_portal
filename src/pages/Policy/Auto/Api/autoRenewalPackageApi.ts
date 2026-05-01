import type { PolicyDocument } from '../../CommonViews/interfaces';

export const getAutoRenewalPackageApi = async (): Promise<PolicyDocument | null> =>
  Promise.resolve({
    id: 'auto-renewal-2024',
    title: 'Renewal Package',
    description: 'Complete 2024 auto policy terms and conditions.',
    fileMeta: 'PDF • 4.2 MB',
    downloadUrl: '/auto/renewal/auto-renewal-2024.pdf',
  });
