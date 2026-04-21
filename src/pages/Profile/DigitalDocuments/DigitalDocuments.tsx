import { useEffect, useState } from 'react';
import DigitalDocumentsView from './DigitalDocumentsView';
import type { DigitalDocument } from './Interface';
import { getDigitalDocuments } from './digitalDocuments.api';

const DigitalDocuments = () => {
  const [documents, setDocuments] = useState<DigitalDocument[]>([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await getDigitalDocuments();
        setDocuments(data);
      } catch (error) {
        console.error('Failed to fetch documents', error);
      }
    };

    fetchDocuments();
  }, []);

  const handleView = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <DigitalDocumentsView
      documents={documents}
      onView={handleView}
    />
  );
};

export default DigitalDocuments;