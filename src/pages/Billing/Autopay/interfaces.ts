export interface PaymentMethod {
  brand: string;
  lastFour: string;
  expiry: string;
}

export interface AutoPayState {
  enabled: boolean;
  paymentMethod: PaymentMethod;
  nextChargeAmount: string; 
  nextChargeDate: string;
}

export interface AutoPayCardViewProps {
  state: AutoPayState;
  onToggle: (checked: boolean) => void;
  onUpdatePaymentMethod: () => void;
}