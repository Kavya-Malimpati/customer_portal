import { Card, CardContent, Typography, Toggle } from '../../../common/components';
import { FiCheckCircle, FiMail } from 'react-icons/fi';
import type { PaperlessPreferencesViewProps } from './interfaces';

const PaperlessPreferencesView = ({
  paperless,
  onPaperlessChange,
}: PaperlessPreferencesViewProps) => {
  return (
    <Card variant='outlined-raised' size='md'>
      <CardContent>
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4'>
          <div className='flex-1 space-y-8'>
            <div className='flex items-center gap-3'>
              <div
                style={{
                  backgroundColor: 'var(--color-success)',
                  padding: '8px',
                  borderRadius: '8px',
                }}
              >
                <FiMail size={18} style={{ color: 'var(--color-white)' }} />
              </div>

              <Typography variant='h4' style={{ color: 'var(--text-primary)' }}>
                Paperless Enrollment
              </Typography>
            </div>

            <Typography
              variant='body2'
              className='max-w-lg leading-6'
           color='secondary'
            >
              Receive your policy documents, billing notices, and updates electronically.
              Reduce waste and access everything instantly.
            </Typography>

            <div className='rounded-md border border-green-200 bg-green-50 p-4'>
              <div className='flex items-center gap-3'>
                <FiCheckCircle size={18} style={{ color: 'var(--color-success)' }} />

                <Typography
                  variant='body2'
                  className='font-medium'
                  color='success'
                >
                  Currently receiving digital communications at {paperless.emailAddress}
                </Typography>
              </div>
            </div>
          </div>

          <Toggle
            id='paperless-main-toggle'
            checked={paperless.enabled}
            onChange={e =>
              onPaperlessChange({
                ...paperless,
                enabled: e.target.checked,
              })
            }
            aria-label='Paperless Enrollment'
            label=''
          />
        </div>

        {paperless.enabled && (
          <div className='mt-5 grid gap-3 sm:grid-cols-3'>
            <Toggle
              id='paperless-email'
              checked={paperless.email}
              onChange={e =>
                onPaperlessChange({
                  ...paperless,
                  email: e.target.checked,
                })
              }
              aria-label='Paperless Email'
              label='Email'
            />

            <Toggle
              id='paperless-sms'
              checked={paperless.sms}
              onChange={e =>
                onPaperlessChange({
                  ...paperless,
                  sms: e.target.checked,
                })
              }
              aria-label='Paperless SMS'
              label='SMS'
            />

            <Toggle
              id='paperless-documents'
              checked={paperless.documents}
              onChange={e =>
                onPaperlessChange({
                  ...paperless,
                  documents: e.target.checked,
                })
              }
              aria-label='Paperless Documents'
              label='Documents'
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaperlessPreferencesView;