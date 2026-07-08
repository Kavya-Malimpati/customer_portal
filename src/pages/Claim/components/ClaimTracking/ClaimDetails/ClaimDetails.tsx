import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  LabelValue,
  Button,
  FileUpload,
} from '../../../../../common/components';

import {
  FiDownload,
  FiFileText,
  FiTrash2,
} from 'react-icons/fi';

import ClaimTimeline from '../ClaimTimeline';
import ClaimStatusHeader from '../ClaimStatusHeader';
import useClaimDocuments from './useClaimDocuments';

import type { Props } from './types';

import '../../../Claim.css';

const ClaimDetails = ({ claim }: Props) => {

  const {
    documents,
    handleUploadDocument,
    handleDownloadDocument,
    handleDeleteDocument,
  } = useClaimDocuments();

  return (

    <Card className="claim-details-card">

      <CardHeader
        title={
          <ClaimStatusHeader
            title={
              claim.vehicle ||
              claim.address ||
              claim.title
            }
            incidentDate={
              claim.incidentDate
            }
          />
        }
      />

      <CardContent>

        <section className="claim-section">

          <ClaimTimeline
            timeline={claim.timeline}
          />

        </section>

        <hr />

        <section className="claim-section">

          <div className="claim-files-header">

            <Typography
              variant="h5"
              color="primary"
            >
              Supporting Claim Files
            </Typography>

            <FileUpload
              id="claim-documents-upload"
              accept=".pdf,image/*"
              multiple
              showFileName={false}
              onChange={handleUploadDocument}
            />

          </div>

          {documents.length === 0 ? (

            <Typography variant="body2">
              No files uploaded yet.
            </Typography>

          ) : (

            <div className="claim-documents-list">

              {documents.map(document => (

                <div
                  className="claim-document-row"
                  key={document.id}
                >

                  <div className="claim-document-info">

                    <div className="claim-document-icon">

                      <FiFileText className="doc-icon" />

                    </div>

                    <div className="claim-document-text">

                      <Typography
                        variant="body1"
                        className="claim-document-name"
                      >
                        {document.name}
                      </Typography>

                      <Typography
                        variant="body2"
                        className="claim-document-meta"
                      >
                        {document.uploadedDate}
                        {' • '}
                        {document.size}
                      </Typography>

                    </div>

                  </div>

                  <div className="claim-document-actions">

                    <Button
                      variant="outlined"
                      className="upload-button-box"
                      onClick={() =>
                        handleDownloadDocument(
                          document
                        )
                      }
                    >
                      <FiDownload size={18} />
                    </Button>

                    <Button
                      variant="outlined"
                      className="upload-button-box"
                      onClick={() =>
                        handleDeleteDocument(
                          document.id
                        )
                      }
                    >
                      <FiTrash2 size={18} />
                    </Button>

                  </div>

                </div>

              ))}

            </div>

          )}

        </section>

        <hr />
                <section className="claim-section">

          <Typography
            variant="h5"
            color="primary"
          >
            Claim Details
          </Typography>

          <div className="claim-grid">

            <LabelValue
              label="Claim Number"
              value={claim.claimNumber}
            />

            <LabelValue
              label="Incident"
              value={claim.incidentType}
            />

            <LabelValue
              label="Status"
              value={claim.status}
            />

            {claim.vehicle && (
              <LabelValue
                label="Vehicle"
                value={claim.vehicle}
              />
            )}

            {claim.address && (
              <LabelValue
                label="Property"
                value={claim.address}
              />
            )}

          </div>

        </section>

      </CardContent>

    </Card>

  );
};

export default ClaimDetails;