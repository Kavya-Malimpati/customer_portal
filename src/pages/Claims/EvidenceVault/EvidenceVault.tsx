import { useEffect, useState } from 'react';
import EvidenceVaultView from './EvidenceVaultView';
import type { EvidenceFile } from './Interface';

const EvidenceVault = () => {
  const [files, setFiles] = useState<EvidenceFile[]>([]);

  const createId = () => {
    return crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
  };

  const handleUploadEvidence = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    if (!selectedFiles) return;

    const uploadedFiles: EvidenceFile[] = Array.from(selectedFiles).map(file => ({
      id: createId(),
      name: file.name,
      url: URL.createObjectURL(file),
      type: file.type.startsWith('video') ? 'video' : 'image',
    }));

    setFiles(prev => [...prev, ...uploadedFiles]);
    event.target.value = '';
  };

  const handleDeleteEvidence = (id: string) => {
    setFiles(prev => {
      const fileToDelete = prev.find(file => file.id === id);

      if (fileToDelete) {
        URL.revokeObjectURL(fileToDelete.url);
      }

      return prev.filter(file => file.id !== id);
    });
  };

  useEffect(() => {
    return () => {
      files.forEach(file => URL.revokeObjectURL(file.url));
    };
  }, [files]);

  return (
    <EvidenceVaultView
      claimNumber='Claim #PC-9902'
      files={files}
      onUploadEvidence={handleUploadEvidence}
      onDeleteEvidence={handleDeleteEvidence}
    />
  );
};

export default EvidenceVault;
