// interfaces.ts for DocumentVault
// Defines types for document items and props for DocumentVaultView

export interface DocumentItem {
  name: string;
  category: string; 
}

export interface DocumentVaultViewProps {
  documents: DocumentItem[];
  onUpload: (files: FileList | null, category: string) => void;
}
