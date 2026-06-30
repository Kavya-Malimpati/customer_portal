import { useState } from 'react';

import DocumentVaultView from './DocumentVaultView';

import type { DocumentItem } from './interface';

const ACCEPTED_FILE_TYPES = ['application/pdf', 'image/png', 'image/jpeg'];

const DocumentVault = () => {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);

  // Handles file uploads and associates them with a category.

  const handleUpload = (files: FileList | null) => {
    if (!files) return;

    const newDocuments: DocumentItem[] = Array.from(files)
      .filter(file => ACCEPTED_FILE_TYPES.includes(file.type))
      .map(file => ({
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
        uploadedAt: new Date().toISOString(),
      }));

    setDocuments(prevDocuments => [...prevDocuments, ...newDocuments]);
  };

  return <DocumentVaultView documents={documents} onUpload={handleUpload} />;
};

export default DocumentVault;
