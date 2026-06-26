export interface SafetyTip {
  id: number;
  title: string;
  description: string;
  type: 'driving' | 'home';
}

export interface SafetySavingsUiProps {
  tips: SafetyTip[];
}