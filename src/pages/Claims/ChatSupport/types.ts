export interface Message {
  id: number;
  sender: 'user' | 'support';
  text: string;
  time: string;
}

export interface ChatSupportProps {
  unreadCount?: number;
}