export type AlertType = 'warning' | 'info' | 'success';

export interface AlertItem {
  id: number;
  title: string;
  description: string;
  time: string;
  type: AlertType;
}

export interface RecentAlertsProps {
  alerts?: AlertItem[];   
  newCount?: number;
}