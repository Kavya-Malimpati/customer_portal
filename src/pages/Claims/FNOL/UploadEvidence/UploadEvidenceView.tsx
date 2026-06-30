import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FileUpload,
  Typography,
} from '../../../../common/components';

import './UploadEvidence.css';

import type { UploadEvidenceViewProps } from './interfaces';

const UploadEvidenceView = ({
  claimType,
  photos,
  videos,
  reports,
  estimates,
  errorMessage,
  handlePhotoUpload,
  handleVideoUpload,
  handleReportUpload,
  handleEstimateUpload,
  removePhoto,
  removeVideo,
  removeReport,
  removeEstimate,
}: UploadEvidenceViewProps) => {
  return (
    <div className='upload-evidence-container'>
      {errorMessage && (
        <Typography variant='body2' className='error-message'>
          {errorMessage}
        </Typography>
      )}

      <Card variant='outlined'>
        <CardHeader title={claimType === 'auto' ? 'Vehicle Photos' : 'Damage Photos'} />

        <CardContent>
          <FileUpload
            multiple
            showFileName={false}
            accept='image/jpeg,image/jpg,image/png'
            onChange={handlePhotoUpload}
          />
        </CardContent>
      </Card>

      <Card variant='outlined'>
        <CardHeader title='Videos' />

        <CardContent>
          <FileUpload
            multiple
            showFileName={false}
            accept='video/mp4,video/quicktime'
            onChange={handleVideoUpload}
          />
        </CardContent>
      </Card>

      <Card variant='outlined'>
        <CardHeader title={claimType === 'auto' ? 'Police Reports' : 'Fire / Police Reports'} />

        <CardContent>
          <FileUpload
            multiple
            showFileName={false}
            accept='.pdf,image/jpeg,image/jpg,image/png'
            onChange={handleReportUpload}
          />
        </CardContent>
      </Card>

      <Card variant='outlined'>
        <CardHeader title='Repair Estimates' />

        <CardContent>
          <FileUpload
            multiple
            showFileName={false}
            accept='.pdf,image/jpeg,image/jpg,image/png'
            onChange={handleEstimateUpload}
          />
        </CardContent>
      </Card>

      {[
        {
          title: 'Uploaded Photos',
          files: photos,
          remove: removePhoto,
        },
        {
          title: 'Uploaded Videos',
          files: videos,
          remove: removeVideo,
        },
        {
          title: 'Uploaded Reports',
          files: reports,
          remove: removeReport,
        },
        {
          title: 'Uploaded Estimates',
          files: estimates,
          remove: removeEstimate,
        },
      ].map(
        ({ title, files, remove }) =>
          files.length > 0 && (
            <Card key={title} variant='outlined'>
              <CardHeader title={title} />

              <CardContent>
                <div className='upload-grid'>
                  {files.map((file, index) => (
                    <div key={`${file.name}-${index}`} className='preview-card'>
                      {file.type.startsWith('image/') && (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className='preview-image'
                        />
                      )}

                      {file.type.startsWith('video/') && (
                        <video controls className='preview-video'>
                          <source src={URL.createObjectURL(file)} type={file.type} />
                        </video>
                      )}

                      {file.type === 'application/pdf' && (
                        <div className='file-info'>
                          <Typography variant='body2'>PDF Document</Typography>
                        </div>
                      )}

                      <div className='file-info'>
                        <Typography variant='body2'>{file.name}</Typography>

                        <Typography variant='body2'>{(file.size / 1024).toFixed(0)} KB</Typography>

                        <Button
                          variant='outlined'
                          className='remove-button'
                          onClick={() => remove(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ),
      )}

      <Typography variant='body2'>
        Uploading evidence is optional but recommended to help speed up claim processing.
      </Typography>
    </div>
  );
};

export default UploadEvidenceView;
