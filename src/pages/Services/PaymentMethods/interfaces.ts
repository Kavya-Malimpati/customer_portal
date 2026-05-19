export interface PaymentMethodItem {
  id: number;
  cardType: 'visa' | 'chase';
  title: string;
  subtitle: string;
}

export interface PaymentMethodsProps {
  methods?: PaymentMethodItem[];
}
