import type { DocumentVaultViewProps } from './interfaces';
import {
  Typography,
  Button,
  FileUpload
} from '../../../common/components';
const DocumentVaultView = ({
  documents,
  onUpload,
  onView,
}: DocumentVaultViewProps) => {
  return (
    <>
      <Typography variant="body1" className="mb-3">
        Upload your policy and personal documents (PDF, images).
      </Typography>

      <Typography variant="subtitle2" className="mb-2">
        Upload Documents
      </Typography>

      <FileUpload
        id="document-upload"
        accept=".pdf,.png,.jpg,.jpeg"
        multiple
        onChange={(e) => onUpload(e.target.files)}
      />

      <div className="mt-6">
        <Typography variant="subtitle2" className="mb-2">
          Your Documents
        </Typography>

        {documents.length === 0 ? (
          <Typography variant="body2">
            No documents uploaded yet.
          </Typography>
        ) : (
          documents.map((doc) => (
            <div
              key={doc.id}
              className="flex justify-between items-center py-3 border-b border-solid"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <div>
                <Typography variant="body2">
                  {doc.name}
                </Typography>
                <Typography variant="caption">
                  Uploaded on {doc.uploadedAt}
                </Typography>
              </div>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outlined"
                  color="primary"
                  onClick={() => onView(doc)}
                  aria-label={`View ${doc.name}`}
                >
                  View
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default DocumentVaultView;