export interface Props {
  policy: 'auto' | 'home';
}

export interface Recommendation {
  category: string;
  text: string;
}

export interface RiskPreventionViewProps {
  title: string;
  recommendations: Recommendation[];
}