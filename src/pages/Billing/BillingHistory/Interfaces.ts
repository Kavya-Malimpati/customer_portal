export interface Transaction {
  id: string;
  date: string;
  description: string;
  method?: string;
  reference?: string;
  amount: string;
  status: 'SUCCESS' | 'FAILED';
}

export interface BillingHistoryProps {
  transactions: Transaction[];
  onView: (id: string) => void;
  onReceipt: (id: string) => void;
  onRetry: (id: string) => void;
}
