import type { AwaitingSignatureDocument } from '../../CommonViews/interfaces';

export const getHomeownersAwaitingSignatureApi = async (): Promise<AwaitingSignatureDocument | null> =>
  Promise.resolve({
    id: 'home-sign-2026-01',
    documentName: '2026 Homeowners Policy',
    signUrl: '/home/sign/home-sign-2025-01',
  });
