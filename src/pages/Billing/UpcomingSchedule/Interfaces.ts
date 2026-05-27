export type InstallmentStatus = 'scheduled' | 'pending';

export interface InstallmentData {
  date: string;
  name: string;
  policyNumber: string;
  amount: string;
  status: InstallmentStatus;
}

export interface UpcomingScheduleUiProps {
  installments: InstallmentData[];
}
