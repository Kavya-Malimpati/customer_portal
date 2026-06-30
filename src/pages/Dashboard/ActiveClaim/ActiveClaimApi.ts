import type { ActiveClaimData } from './Interfaces';

const getActiveClaimApi = async (): Promise<ActiveClaimData> => {
  await new Promise(res => setTimeout(res, 500));

  return {
    claimNumber: 'PC-9902',
    claimType: 'Rear-End Collision',
    status: 'IN REVIEW',
    progress: 75,
    towTruckEta: 'Tow truck arriving in 12 min',
    trackingId: 'WGH-45383',
  };
};

export default getActiveClaimApi;
