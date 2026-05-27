export interface StepItem {
  id: number;
  title: string;
  description: string;
}

export interface AccidentCardProps {
  steps?: StepItem[];
}
export interface Props {
  steps: StepItem[];
}
