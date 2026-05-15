import { useEffect, useState } from 'react';
import { LuScrollText } from 'react-icons/lu';
import DocumentCardView from './DocumentCardView';
import type { PolicyDocument } from './interfaces';
import '../styles/DocumentCardView.css';

interface Props {
  fetchInvoices: () => Promise<PolicyDocument | null>;
}

const PremiumInvoicesCardView = ({ fetchInvoices }: Props) => {
  const [doc, setDoc] = useState<PolicyDocument | null>(null);

  useEffect(() => {
    const loadDocs = async () => {
      const data = await fetchInvoices();
      setDoc(data);
    };

    loadDocs();
  }, [fetchInvoices]);

  if (!doc) return null;

  return (
    <div key={doc.id} className='document-card-container'>
      <DocumentCardView
        title={doc.title}
        description={doc.description}
        fileMeta={doc.fileMeta}
        icon={<LuScrollText size={24} />}
        onDownload={() => window.open(doc.downloadUrl, '_blank')}
      />
    </div>
  );
};

export default PremiumInvoicesCardView;
