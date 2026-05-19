export interface SafetyTip {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface SafetyTipsViewProps {
  tips: SafetyTip[];
}
