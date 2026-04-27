import { GoShieldCheck } from 'react-icons/go';
import DocumentCardView from '../../CommonViews/DocumentCardView';

const BinderLetterCardView = () => (
  <div className='col-span-12 md:col-span-4'>
    <DocumentCardView
      title='Binder Letter'
      description='Proof of temporary coverage for new vehicle addition.'
      fileMeta='PDF • 0.8 MB'
      icon={<GoShieldCheck size={24} />}
      onDownload={() => console.log('Download Binder Letter')}
    />
  </div>
);

export default BinderLetterCardView;
