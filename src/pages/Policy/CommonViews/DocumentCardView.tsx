import { Card, CardContent, Typography } from '../../../common/components';
import { FiDownload } from 'react-icons/fi';

interface Props {
  title: string;
  description: string;
  fileMeta: string;
  icon: React.ReactNode;
  onDownload?: () => void;
}

const DocumentCardView = ({ title, description, fileMeta, icon, onDownload }: Props) => {
  return (
    <Card
      className='rounded-(--rounded-lg) h-full cursor-pointer hover:shadow-sm transition-shadow'
      onClick={onDownload}
    >
      <CardContent className='flex flex-col gap-(--space-4) h-full'>
        {/* Header (grid for correct alignment) */}
        <div className='grid grid-cols-[auto_1fr] gap-x-(--space-3) gap-y-(--space-1)'>
          {/* Icon */}
          <div color='secondary'>{icon}</div>

          {/* Title */}
          <Typography variant='h3' color='secondary' className='text-left w-full'>
            {title}
          </Typography>

          {/* Description (starts under icon) */}
          <div className='col-span-2'>
            <Typography variant='h6' color='secondary' className='text-left w-full'>
              {description}
            </Typography>
          </div>
        </div>

        {/* Footer */}

        <div className='mt-auto pt-(--space-3) border-t border-(--border-subtle)'>
          <div className='mt-auto flex items-center justify-between'>
            <Typography variant='body2' color='muted'>
              {fileMeta}
            </Typography>

            <FiDownload size={20} className='text-(--color-primary)' aria-label='Download' />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentCardView;
