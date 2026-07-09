export interface ClaimHistoryItem {
  id: string;
  type: string;
  dateFiled: string;
  amount: string;
  status: string;
}

export interface ClaimHistoryProps {
  policyType: 'auto' | 'home';
}

export interface ClaimHistoryItem {
  id: string;
  type: string;
  dateFiled: string;
  amount: string;
  status: string;
}