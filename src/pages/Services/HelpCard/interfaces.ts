export interface HelpCardItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface HelpCardViewProps {
  items: HelpCardItem[];
  onSearch?: (query: string) => void;
  isLifeEventsOpen?: boolean;
  onCloseLifeEvents?: () => void;
}
