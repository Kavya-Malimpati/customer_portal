import { Card, CardContent, Typography } from '../../../common/components';
import { FiDownload } from 'react-icons/fi';

import '../styles/DocumentCardView.css';

interface Props {
  title: string;
  description: string;
  fileMeta: string;
  icon: React.ReactNode;
  onDownload?: () => void;
}

const DocumentCardView = ({ title, description, fileMeta, icon, onDownload }: Props) => {
  return (
    <Card variant='outlined'>
      <CardContent className='document-card-content'>
        {/* Header (grid for correct alignment) */}
        <div className='document-card-header'>
          <div className='document-card-header-left'>
            {/* Icon */}
            <div className='document-card-icon' color='secondary'>
              {icon}
            </div>

            {/* Title */}
            <Typography variant='h3' color='secondary'>
              {title}
            </Typography>
          </div>
        </div>
        {/* Description (starts under icon) */}

        <div className='document-card-body'>
          <Typography variant='body2' color='muted' className='text-left w-full line-clamp-2'>
            {description}
          </Typography>

          {/* Footer */}

          <div className='document-card-footer'>
            <Typography variant='body2' color='muted'>
              {fileMeta}
            </Typography>

            <FiDownload
              size={20}
              className='document-card-download'
              aria-label='Download'
              onClick={onDownload}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentCardView;
