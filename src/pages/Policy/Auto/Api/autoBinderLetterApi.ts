import type { PolicyDocument } from '../../CommonViews/interfaces';

export const getAutoBinderLetterApi = async (): Promise<PolicyDocument | null> =>
  Promise.resolve({
    id: 'auto-binder-2024-08',
    title: 'Binder Letter',
    description: 'Proof of temporary coverage for new vehicle addition.',
    fileMeta: 'PDF • 0.8 MB',
    downloadUrl: '/auto/binder/auto-binder-2024-08.pdf',
  });
