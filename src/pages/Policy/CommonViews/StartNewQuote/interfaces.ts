export interface QuoteData {
  customerName: string;
  email: string;
  primaryPhone: string;
  secondaryPhone: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  preferredCommunication: string;
}

export interface StartNewQuoteViewProps {
  quoteData: QuoteData | null;
}