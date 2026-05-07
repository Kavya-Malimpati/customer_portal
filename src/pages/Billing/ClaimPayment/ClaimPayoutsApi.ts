export const getClaimPayoutApi = async () => {
  await new Promise(res => setTimeout(res, 500));

  return {
    claimId: 'CLM-98231',
    status: 'processing' as 'approved' | 'processing' | 'paid',
    expectedArrival: '3-5 business days',
    method: 'Bank Transfer',
  };
};
