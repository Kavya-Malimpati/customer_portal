import {Card , CardContent,Typography,Button }from '../../../common/components';
import type { DigitalDocumentsViewProps } from './Interface';

const DigitalDocumentsView = ({ documents, onView }: DigitalDocumentsViewProps) => {
  return (
    <main
      className='flex-1 w-full px-4 py-6 md:px-6 md:py-10 lg:px-8 lg:py-12'
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      <div className='max-w-7xl mx-auto space-y-6'>
        <section className='text-center mb-10'>
          <Typography
            variant='h1'
            style={{
              color: 'var(--text-heading)',
            }}
          >
            Digital Documents
          </Typography>
        </section>

        <section className='space-y-4 text-center mb-10'>
          <Typography
            variant='subtitle1'
            style={{
              color: 'var(--text-heading)'
            }}
          >
            Your Documents
          </Typography>

          {documents.map(document => (
            <Card key={document.id} variant='outlined-raised' size='lg'>
              <CardContent>
                <div className='flex flex-col gap-5'>
                  <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3'>
                    <div>
                      <Typography
                        variant='h4'
                        style={{
                          color: 'var(--text-heading)',
                          fontWeight: 'var(--font-weight-semibold)',
                        }}
                      >
                        {document.title}
                      </Typography>

                      <Typography variant='subtitle2' style={{ color: 'var(--text-secondary)' }}>
                        {document.category}
                      </Typography>
                    </div>

                    <span
                      className='inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold'
                      style={{
                        backgroundColor: 'var(--bg-muted)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {document.status}
                    </span>
                  </div>

                  <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
                    <div>
                      <Typography variant='caption' style={{ color: 'var(--text-secondary)' }}>
                        Date
                      </Typography>

                      <Typography variant='body2' style={{ color: 'var(--text-primary)' }}>
                        {document.date}
                      </Typography>
                    </div>

                    <div>
                      <Typography variant='caption' style={{ color: 'var(--text-secondary)' }}>
                        Size
                      </Typography>

                      <Typography variant='body2' style={{ color: 'var(--text-primary)' }}>
                        {document.size}
                      </Typography>
                    </div>

                    <div className='col-span-2 md:col-span-2 min-w-0'>
                      <div className='mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap'>
                        <Button className='w-full sm:w-auto' onClick={() => onView(document.viewUrl)}>
                          View
                        </Button>

                        <a href={document.downloadUrl} download style={{ textDecoration: 'none' }}>
                          <Button variant='outlined'>Download</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
};

export default DigitalDocumentsView;