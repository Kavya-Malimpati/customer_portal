import { useEffect, useState } from 'react';
import { Card, CardContent, Button, Typography } from '../../../common/components';
import { FaFileSignature } from 'react-icons/fa6';
import type { AwaitingSignatureDocument } from './interfaces';

import '../styles/AwaitingSummaryCardView.css';

interface Props {
  fetchAwaitingSignature: () => Promise<AwaitingSignatureDocument | null>;
}

const AwaitingSignatureCardView = ({ fetchAwaitingSignature }: Props) => {
  const [doc, setDoc] = useState<AwaitingSignatureDocument | null>(null);

  useEffect(() => {
    const loadDoc = async () => {
      const data = await fetchAwaitingSignature();
      setDoc(data);
    };

    loadDoc();
  }, [fetchAwaitingSignature]);

  if (!doc) return null;

  return (
    <Card variant='outlined' className='awaiting-signature-card'>
      <CardContent className='awaiting-signature-card-content'>
        <div className='awaiting-signature-card-header'>
          <div className='awaiting-signature-icon'>
            <FaFileSignature size={24} />
          </div>

          <Typography variant='h3' color='secondary'>
            Awaiting Signature
          </Typography>
        </div>

        {/* Content */}
        <div className='awaiting-signature-card-body-wrapper'>
          <Typography variant='body1' color='secondary'>
            {doc.documentName}
          </Typography>

          <Button
            variant='contained'
            color='error'
            className='awaiting-signature-sign-now'
            onClick={() => window.open(doc.signUrl, '_blank')}
          >
            Sign Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AwaitingSignatureCardView;
