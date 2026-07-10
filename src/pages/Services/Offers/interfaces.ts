export interface OfferItem {
  id: number;
  title: string;
  subtitle: string;
  type: 'glass' | 'roadside' | 'bundle';
  onOfferClick?: () => void;
}

export interface OffersProps {
  offers?: OfferItem[];
}