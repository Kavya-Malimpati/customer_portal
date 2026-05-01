import { useEffect, useState } from 'react';
import { LuScrollText } from 'react-icons/lu';
import DocumentCardView from './DocumentCardView';
import type { PolicyDocument } from './interfaces';

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
    <div key={doc.id} className='col-span-12 md:col-span-4'>
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
