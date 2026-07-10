import { useEffect, useState } from 'react';

import type { ClaimDocument, UseClaimDocumentsReturn } from './types';

const useClaimDocuments = (): UseClaimDocumentsReturn => {
  const [documents, setDocuments] = useState<ClaimDocument[]>([]);

  const createId = () => {
    return crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
  };

  const formatFileSize = (size: number) => {
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)} KB`;
    }

    return `${(size / 1024 / 1024).toFixed(1)} MB`;
  };

  const formatDate = () => {
    return new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  };

  const handleUploadDocument = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (!selectedFiles) {
      return;
    }

    const uploadedDocuments: ClaimDocument[] = Array.from(selectedFiles).map(file => ({
      id: createId(),
      name: file.name,
      size: formatFileSize(file.size),
      uploadedDate: formatDate(),
      url: URL.createObjectURL(file),
    }));

    setDocuments(prev => [...prev, ...uploadedDocuments]);

    event.target.value = '';
  };

  const handleDownloadDocument = (document: ClaimDocument) => {
    const link = window.document.createElement('a');

    link.href = document.url;
    link.download = document.name;
    link.target = '_blank';

    window.document.body.appendChild(link);

    link.click();

    window.document.body.removeChild(link);
  };

  const handleDeleteDocument = (id: string) => {
    setDocuments(prev => {
      const documentToDelete = prev.find(doc => doc.id === id);

      if (documentToDelete) {
        URL.revokeObjectURL(documentToDelete.url);
      }

      return prev.filter(doc => doc.id !== id);
    });
  };

  useEffect(() => {
    return () => {
      documents.forEach(doc => URL.revokeObjectURL(doc.url));
    };
  }, [documents]);

  return {
    documents,
    handleUploadDocument,
    handleDownloadDocument,
    handleDeleteDocument,
  };
};

export default useClaimDocuments;
