import { useState } from 'react';
import {Card, CardHeader, CardContent} from '../../../common/components/';
import type { DocumentItem } from './interfaces';
import DocumentVaultView from './DocumentVaultView';

const ACCEPTED_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
];

function DocumentVault() {
  const [documents, setDocuments] = useState<DocumentItem[]>([]);

  const handleUpload = (files: FileList | null) => {
    if (!files) return;

    const uploadedDocs: DocumentItem[] = Array.from(files)
      .filter(file => ACCEPTED_TYPES.includes(file.type))
      .map(file => ({
        id: `${file.name}-${Date.now()}`,
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
        uploadedAt: new Date().toLocaleString(),
      }));

    setDocuments(prev => [...prev, ...uploadedDocs]);
  };

  const handleView = (doc: DocumentItem) => {
    window.open(doc.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 p-6">
      <Card className="w-[700px] bg-white shadow-xl">
        <CardHeader title="Secure Document Vault" />
        <CardContent className="p-6">
          <DocumentVaultView
            documents={documents}
            onUpload={handleUpload}
            onView={handleView}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default DocumentVault;