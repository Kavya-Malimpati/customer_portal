export interface FeedbackCardProps {
  rating?: number;
}

export interface FeedbackCardViewProps {
  rating: number;
  onRate: (value: number) => void;
}