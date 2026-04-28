import { FiChevronRight, FiHeart, FiHome, FiLock, FiUpload, FiUser } from 'react-icons/fi';

import { Button, Card, CardContent, Typography } from '../../../common/components';

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
    <main className='flex-1 w-full px-4 pt-6 md:px-6 md:pt-10 lg:px-8 lg:pt-12 bg-white'>
      <section className='w-full'>
        {/* Page Header */}
        <header className='flex items-center justify-between mb-6'>
          <div>
            <Typography variant='h3' color='primary'>
              Document Repository
            </Typography>
            <Typography variant='body2'>Manage your certificates securely.</Typography>
          </div>

          {/* Upload Action */}
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
        <Typography
          variant='subtitle1'
          color='primary'
          startDecorator={<FiLock className='text-[var(--color-primary)]' />}
        >
          Secure Document Vault
        </Typography>

        {/* Category Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {DOCUMENT_CATEGORIES.map(category => {
            const Icon = category.icon;
            const fileCount = documents.filter(doc => doc.category === category.title).length;

            return (
              <Card key={category.title} className='bg-white border shadow-sm rounded-xl'>
                <CardContent className='p-4 flex flex-col justify-between h-full'>
                  {/* Card Header */}
                  <div className='flex flex-col gap-2 items-start'>
                    <span className={`p-3 rounded-md ${category.iconBg} ${category.iconColor}`}>
                      <Icon size={22} />
                    </span>

                    <Typography variant='subtitle2' className='font-semibold !text-black'>
                      {category.title}
                    </Typography>

                    <Typography variant='body2'>{category.description}</Typography>
                  </div>

                  {/* Card Footer */}
                  <div className='flex items-center justify-between mt-6'>
                    <Typography variant='caption' className={`font-medium ${category.countColor}`}>
                      {fileCount} Files
                    </Typography>

                    <FiChevronRight size={18} className={category.countColor} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default DocumentVaultView;
