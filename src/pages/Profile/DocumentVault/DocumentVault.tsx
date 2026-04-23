import { useState } from 'react';
import {Card, CardHeader, CardContent, Typography} from '../../../common/components/';
import type { DocumentItem } from './interfaces';
import DocumentVaultView from './DocumentVaultView';
import DigitalDocuments from '../DigitalDocuments';

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
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto space-y-8">
      <Card className="w-full bg-white shadow-xl">
        <CardHeader title={
            <Typography variant="h3" className="text-left">
              Secure Document Vault
            </Typography>
          } />
        <CardContent className="p-6">
          <DocumentVaultView
            documents={documents}
            onUpload={handleUpload}
            onView={handleView}
          />
        </CardContent>
      </Card>
      <DigitalDocuments />
    </div>
    </div>
  );
}

export default DocumentVault;