import type { PolicyDocument } from '../../CommonViews/interfaces';

export const getHomeownersRenewalPackageApi = async (): Promise<PolicyDocument | null> =>
  Promise.resolve({
    id: 'home-renewal-2025',
    title: 'Renewal Package',
    description: 'Complete 2025 home policy terms and conditions.',
    fileMeta: 'PDF • 5.1 MB',
    downloadUrl: '/home/renewal/home-renewal-2025.pdf',
  });
