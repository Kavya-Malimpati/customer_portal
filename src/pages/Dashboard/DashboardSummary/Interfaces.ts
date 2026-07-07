export type DashboardSummaryType =
  | 'policies'
  | 'premium'
  | 'claims'
  | 'savings';

export interface DashboardSummaryItem {
  id: number;
  type: DashboardSummaryType;
  title: string;
  value: string;
  subtitle: string;
}

export interface DashboardSummaryUiProps {
  items: DashboardSummaryItem[];
}