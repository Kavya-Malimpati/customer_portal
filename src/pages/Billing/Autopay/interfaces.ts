export interface PaymentMethod {
  brand: string;      // Visa, AmEx, etc.
  lastFour: string;   // 4242
  expiry: string;     // 12/26
}

export interface AutoPayState {
  enabled: boolean;
  paymentMethod: PaymentMethod;
  nextChargeAmount: string; // $428.50
  nextChargeDate: string;   // Oct 15
}

export interface AutoPayCardViewProps {
  state: AutoPayState;
  onToggle: (checked: boolean) => void;
  onUpdatePaymentMethod: () => void;
}