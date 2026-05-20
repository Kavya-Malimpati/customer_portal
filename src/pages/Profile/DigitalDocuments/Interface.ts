export interface DigitalDocument {
  id: number;
  title: string;
  category: string;
  date: string;
  size: string;
  status: string;
  viewUrl: string;
  downloadUrl: string;
}

export interface DigitalDocumentsViewProps {
  documents: DigitalDocument[];
  onView: (url: string) => void;
}