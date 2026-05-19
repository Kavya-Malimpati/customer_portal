import { useEffect, useState } from 'react';
import { GoShieldCheck } from 'react-icons/go';
import DocumentCardView from './DocumentCardView';
import type { PolicyDocument } from './interfaces';
import '../styles/DocumentCardView.css';

interface Props {
  fetchBinderLetter: () => Promise<PolicyDocument | null>;
}

const BinderLetterCardView = ({ fetchBinderLetter }: Props) => {
  const [doc, setDoc] = useState<PolicyDocument | null>(null);

  useEffect(() => {
    const loadBinderLetter = async () => {
      const data = await fetchBinderLetter();
      setDoc(data);
    };

    loadBinderLetter();
  }, [fetchBinderLetter]);

  if (!doc) return null;

  return (
    <div key={doc.id} className='document-card-container'>
      <DocumentCardView
        title={doc.title}
        description={doc.description}
        fileMeta={doc.fileMeta}
        icon={<GoShieldCheck size={24} />}
        onDownload={() => window.open(doc.downloadUrl, '_blank')}
      />
    </div>
  );
};

export default BinderLetterCardView;
