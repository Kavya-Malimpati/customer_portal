import { TiDocumentText } from 'react-icons/ti';
import DocumentCardView from '../../CommonViews/DocumentCardView';

const RenewalPackageCardView = () => (
  <div className='col-span-12 md:col-span-4'>
    <DocumentCardView
      title='Renewal Package'
      description='Complete 2024 policy terms and conditions document.'
      fileMeta='PDF • 4.2 MB'
      icon={<TiDocumentText size={24} />}
      onDownload={() => console.log('Download Renewal Package')}
    />
  </div>
);

export default RenewalPackageCardView;
