import {
	FiChevronRight,
	FiHeart,
	FiHome,
	FiLock,
	FiUpload,
	FiUser,
} from 'react-icons/fi';

import {
	Button,
	Card,
	CardContent,
	Typography,
} from '../../../../common/components';

import type { DocumentVaultViewProps } from './interfaces';

const DOCUMENT_CATEGORIES = [
  {
    icon: FiUser,
    title: 'ID Proofs',
    description: 'Driver’s license, Passports, and State IDs for all named insureds.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    countColor: 'text-blue-600',
  },
  {
    icon: FiHome,
    title: 'Property Deeds',
    description: 'Title documents and valuation certificates.',
    iconBg: 'bg-green-50',
    iconColor: 'text-green-600',
    countColor: 'text-green-600',
  },
  {
    icon: FiHeart,
    title: 'Health Records',
    description: 'Medical reports, vaccination proofs, and allergy charts.',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    countColor: 'text-red-600',
  },
];

const DocumentVaultView = ({ documents, onUpload }: DocumentVaultViewProps) => {
  return (
    <main className='mt-5'>
      <section className='w-full'>
        {/* Header */}
        <header className='flex items-center justify-between mb-6'>
          <div>
            <Typography variant='h3' color='primary'>
              Document Repository
            </Typography>

            <Typography variant='body2'>Manage your certificates securely.</Typography>
          </div>

          <div>
            <input
              type='file'
              id='upload-top'
              multiple
              accept='.pdf,.png,.jpg,.jpeg'
              className='hidden'
              onChange={e => {
                onUpload(e.target.files, 'ID Proofs');
                e.target.value = '';
              }}
            />

            <Button
              variant='contained'
              color='primary'
              startIcon={<FiUpload size={18} />}
              onClick={() => document.getElementById('upload-top')?.click()}
            >
              Upload New
            </Button>
          </div>
        </header>

        {/* Section Title */}
        <div className='mb-4 flex items-center gap-2'>
          <FiLock className='text-[var(--color-primary)]' size={20} />
          <Typography
            variant='body1'
            color='primary'
            style={{ fontWeight: 'var(--font-weight-semibold)' }}
          >
            Secure Document Vault
          </Typography>
        </div>

        {/* Category Cards */}
        <div className='flex w-full gap-6'>
          {DOCUMENT_CATEGORIES.map(category => {
            const Icon = category.icon;
            const fileCount = documents.filter(doc => doc.category === category.title).length;

            return (
              <div key={category.title} className='flex-1 min-w-0'>
                <div className='border border-gray-300 rounded-lg h-full'>
                  <Card className='rounded-lg shadow-sm h-full w-full p-0'>
                    <CardContent className='p-5 flex flex-col h-full'>
                      {/* Icon */}
                      <div
                        className={`w-10 h-10 rounded-md flex items-center justify-center ${category.iconBg}`}
                      >
                        <Icon size={18} className={category.iconColor} />
                      </div>

                      {/* Title */}
                      <Typography
                        variant='body1'
                        className='mt-4 !text-black'
                        style={{ fontWeight: 'var(--font-weight-semibold)' }}
                      >
                        {category.title}
                      </Typography>

                      {/* Description */}
                      <Typography variant='body2' className='mt-2 text-gray-500'>
                        {category.description}
                      </Typography>

                      {/* Footer */}
                      <div className='mt-auto pt-6 flex items-center justify-between'>
                        <Typography
                          variant='body2'
                          className={`font-medium ${category.countColor}`}
                        >
                          {fileCount} Files
                        </Typography>

                        <FiChevronRight size={18} className={category.countColor} />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default DocumentVaultView;
