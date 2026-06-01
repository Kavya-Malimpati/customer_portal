export interface StepItem {
  id: number;
  title: string;
  description: string;
}

export interface AccidentCardProps {
  steps?: StepItem[];
}