// homeowners-policy/api/homeBinderLetterApi.ts
import type { PolicyDocument } from '../../CommonViews/interfaces';

export const getHomeownersBinderLetterApi = async (): Promise<PolicyDocument | null> =>
  Promise.resolve({
    id: 'home-binder-2025-01',
    title: 'Binder Letter',
    description: 'Proof of temporary Homeowners Insurance Coverage.',
    fileMeta: 'PDF • 1.0 MB',
    downloadUrl: '/home/binder/home-binder-2025-01.pdf',
  });
