export interface QuickActionItem {
  id: number;
  title: string;
  icon: string;
  route: string;
}

export interface QuickActionsUiProps {
  actions: QuickActionItem[];
}
