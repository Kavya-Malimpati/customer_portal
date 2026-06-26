export interface QuickActionItem {
  id: number;
  title: string;
  icon: string;
}

export interface QuickActionsUiProps {
  actions: QuickActionItem[];
}