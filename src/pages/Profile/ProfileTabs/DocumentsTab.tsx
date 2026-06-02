import DigitalDocuments from '../DocumentsTab/DigitalDocuments';
import DocumentVault from '../DocumentsTab/DocumentVault';

const DocumentsTab = () => {
  return (
    <div>
      {/* Add Documents related features here */}
      <DocumentVault />
      <DigitalDocuments />
    </div>
  );
};

export default DocumentsTab;
