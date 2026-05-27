export type PaymentStatus = 'pending' | 'success' | 'failure';

export interface PremiumPaymentData {
  amount: string;
  dueDate: string;
  status: PaymentStatus;
}

export interface PremiumPaymentUiProps extends PremiumPaymentData {
  onPayClick: () => void;
}
