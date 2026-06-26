export interface ActivityItem {
  id: number;
  title: string;
  description: string;
  icon: 'payment' | 'policy' | 'roadside';
}

export interface RecentActivityUiProps {
  activities: ActivityItem[];
}