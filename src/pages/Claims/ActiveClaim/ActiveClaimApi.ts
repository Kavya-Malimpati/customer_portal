import type { ActiveClaim } from './Interface';

export const fetchActiveClaim = async (): Promise<ActiveClaim> => {
  return {
    claimId: 'PC-9902',
    title: 'Rear-End Collision',
    filedDate: 'May 05, 2026',
    status: 'in-review',
    estimatedResolution: 'May 25, 2026',
    damageAmount: '$3,420.00',
  };
};