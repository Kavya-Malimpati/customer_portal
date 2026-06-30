import type { BillingSummaryData } from './Interfaces';

export const getBillingSummaryApi =
  async (): Promise<BillingSummaryData> => {
    await new Promise(res => setTimeout(res, 500));

    return {
      totalBalance: '$428.50',
      dueDate: 'Feb 15, 2026',
      autoPayEnabled: true,
      installmentName: 'Jan Installment',
      installmentAmount: '$142.83',
      paymentMethod: 'Visa ending in •••• 4242',
    };
  };