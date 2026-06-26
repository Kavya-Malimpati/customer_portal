export interface BillingSummaryData {
  totalBalance: string;
  dueDate: string;
  autoPayEnabled: boolean;
  installmentName: string;
  installmentAmount: string;
  paymentMethod: string;
}

export interface BillingSummaryUiProps {
  billingSummary: BillingSummaryData;
}