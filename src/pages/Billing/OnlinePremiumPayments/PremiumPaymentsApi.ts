export const getPremiumPaymentsApi = async () => {
  await new Promise(res => setTimeout(res, 500));

  return {
    amount: '$428.50',
    dueDate: 'Feb 15, 2026',
    status: 'pending' as 'pending' | 'success' | 'failure',
  };
};
  