export interface DocumentItem {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadedAt: string;
}

export interface DocumentVaultViewProps {
  documents: DocumentItem[];
  onUpload: (files: FileList | null) => void;
  onView: (doc: DocumentItem) => void;
}
