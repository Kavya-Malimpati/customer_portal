export interface OfferItem {
  id: number;
  title: string;
  subtitle: string;
  type: 'glass' | 'roadside' | 'bundle';
}

export interface OffersProps {
  offers?: OfferItem[];
}