import { LiaFileInvoiceSolid } from 'react-icons/lia';
import DocumentCardView from '../../CommonViews/DocumentCardView';

const PremiumInvoicesCardView = () => (
  <div className='col-span-12 md:col-span-4'>
    <DocumentCardView
      title='Premium Invoice'
      description='December 2023 premium payment confirmation.'
      fileMeta='PDF • 1.1 MB'
      icon={<LiaFileInvoiceSolid size={24} />}
      onDownload={() => console.log('Download Premium Invoice')}
    />
  </div>
);

export default PremiumInvoicesCardView;
