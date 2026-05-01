import { useEffect, useState } from 'react';
import { TiDocumentText } from 'react-icons/ti';
import DocumentCardView from './DocumentCardView';
import type { PolicyDocument } from './interfaces';

interface Props {
  fetchRenewalPackage: () => Promise<PolicyDocument | null>;
}

const RenewalPackageCardView = ({ fetchRenewalPackage }: Props) => {
  const [doc, setDoc] = useState<PolicyDocument | null>(null);

  useEffect(() => {
    const loadDocs = async () => {
      const data = await fetchRenewalPackage();
      setDoc(data);
    };

    loadDocs();
  }, [fetchRenewalPackage]);

  if (!doc) return null;

  return (
    <div key={doc.id} className='col-span-12 md:col-span-4'>
      <DocumentCardView
        title={doc.title}
        description={doc.description}
        fileMeta={doc.fileMeta}
        icon={<TiDocumentText size={24} />}
        onDownload={() => window.open(doc.downloadUrl, '_blank')}
      />
    </div>
  );
};

export default RenewalPackageCardView;
