export interface Transaction {
  id: string;
  date: string;
  description: string;
  method?: string;
  reference?: string;
  amount: string;
  status: 'SUCCESS' | 'FAILED';
  documentUrl?: string;
}

export interface BillingHistoryProps {
  transactions: Transaction[];
}
