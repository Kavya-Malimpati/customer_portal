import { FiDownload, FiFileText, FiTrash2 } from 'react-icons/fi';
import { Typography, Button, Card, CardContent, FileUpload } from '../../../common/components';
import type { ClaimDocumentsViewProps } from './Interface';
import './ClaimDocuments.css';
import EvidenceVault from '../EvidenceVault/EvidenceVault';

const ClaimDocumentsView = ({
  claimNumber,
  documents,
  onUploadDocument,
  onDownloadDocument,
  onDeleteDocument,
}: ClaimDocumentsViewProps) => {
  return (
    <>
      <section id='evidence-vault'>
        <EvidenceVault />
      </section>

      <Card variant='outlined-raised' className='claim-documents-card'>
        <CardContent>
          <div className='claim-documents-header'>
            <div>
              <Typography variant='h3' color='primary' className='claim-documents-title'>
                Claim Documents
              </Typography>

              <Typography variant='body2' className='claim-documents-subtitle'>
                RELATED TO {claimNumber}
              </Typography>
            </div>

            <div className='claim-documents-wrapper'>
              <FileUpload
                id='claim-documents'
                accept='.pdf,image/*'
                multiple
                showFileName={false}
                onChange={onUploadDocument}
              />
            </div>
          </div>

          <div className='claim-documents-list'>
            {documents.length === 0 ? (
              <div className='claim-documents-empty'>
                <FiFileText className='claim-documents-empty-icon' />

                <Typography variant='body2' className='claim-documents-empty-text'>
                  No documents uploaded yet.
                </Typography>
              </div>
            ) : (
              documents.map(document => (
                <div className='claim-document-row' key={document.id}>
                  <div className='claim-document-info'>
                    <div className='claim-document-icon'>
                      <FiFileText className='doc-icon' />
                    </div>

                    <div className='claim-document-text'>
                      <Typography variant='body1' className='claim-document-name'>
                        {document.name}
                      </Typography>

                      <Typography variant='body2' className='claim-document-meta'>
                        {document.uploadedDate} • {document.size}
                      </Typography>
                    </div>
                  </div>

                  <div className='claim-document-actions'>
                    <Button
                      variant='outlined'
                      onClick={() => onDownloadDocument(document)}
                      className='upload-button-box'
                    >
                      <FiDownload size={18} />
                    </Button>

                    <Button
                      variant='outlined'
                      onClick={() => onDeleteDocument(document.id)}
                      className='upload-button-box'
                    >
                      <FiTrash2 size={18} />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ClaimDocumentsView;
