export interface HelpCardItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

export interface ChatMessage {
  id: number;
  role: 'user' | 'assistant';
  text: string;
}

export interface HelpCardViewProps {
  items: HelpCardItem[];
  onSearch?: (query: string) => void;
  isChatOpen?: boolean;
  chatMessages?: ChatMessage[];
  chatInput?: string;
  onChatInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSendMessage?: (event: React.FormEvent<HTMLFormElement>) => void;
  onCloseChat?: () => void;
  isFaqOpen?: boolean;
  onToggleFaqs?: () => void;
  isLifeEventsOpen?: boolean;
  onCloseLifeEvents?: () => void;
}
