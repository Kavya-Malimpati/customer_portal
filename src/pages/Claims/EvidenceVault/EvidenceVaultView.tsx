import { useRef } from 'react';
import { FiCamera, FiTrash2 } from 'react-icons/fi';
import { Typography, Button, Card, CardContent, FileUpload } from '../../../common/components';
import type { EvidenceVaultViewProps } from './Interface';
import './EvidenceVault.css';

const EvidenceVaultView = ({
  claimNumber,
  files,
  onUploadEvidence,
  onDeleteEvidence,
}: EvidenceVaultViewProps) => {
  const evidenceInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    evidenceInputRef.current?.click();
  };

  return (
    <Card variant='outlined-raised' className='evidence-vault-card'>
      <CardContent>
        <div className='evidence-vault-header'>
          <div>
            <Typography variant='h3' color='primary' className='evidence-vault-title'>
              Evidence Vault
            </Typography>

            <Typography variant='body2' className='evidence-vault-subtitle'>
              RELATED TO {claimNumber}
            </Typography>
          </div>

          <div className='evidence-upload-wrapper'>
            <FileUpload
              id='evidence-upload'
              accept='image/*,video/*'
              multiple
              showFileName={false}
              onChange={onUploadEvidence}
            />
          </div>
        </div>

        <div className='evidence-vault-grid'>
          {files.map(file => (
            <div className='evidence-file-card' key={file.id}>
              {file.type === 'image' ? (
                <img src={file.url} alt={file.name} className='evidence-preview' />
              ) : (
                <video src={file.url} controls className='evidence-preview' />
              )}

              <Button
                variant='outlined'
                onClick={() => onDeleteEvidence(file.id)}
                className='evidence-delete-button'
              >
                <FiTrash2 size={16} />
              </Button>

              <Typography variant='body2' className='evidence-file-name'>
                {file.name}
              </Typography>
            </div>
          ))}

          <div className='evidence-add-card' onClick={handleUploadClick}>
            <FiCamera className='evidence-add-icon' />

            <Typography variant='body2' className='evidence-add-text'>
              Add Photos / Videos
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EvidenceVaultView;
