import type { AwaitingSignatureDocument } from '../../CommonViews/interfaces';

export const getAutoAwaitingSignatureApi = async (): Promise<AwaitingSignatureDocument | null> =>
  Promise.resolve({
    id: 'auto-sign-2026-01',
    documentName: '2026 Policy Endorsement Form',
    signUrl: '/auto/sign/auto-sign-2024-01',
  });
