import type { DigitalDocument } from './Interface';

export const getDigitalDocuments = async (): Promise<DigitalDocument[]> => {
  return [
    {
      id: 1,
      title: 'Auto Policy Declaration Page',
      category: 'Policy Document',
      date: '2025-03-01',
      size: '245 KB',
      status: 'Available',
      viewUrl: '/documents/view/auto-policy-declaration.pdf',
      downloadUrl: '/documents/download/auto-policy-declaration.pdf',
    },
    {
      id: 2,
      title: 'Homeowners Bill April 2025',
      category: 'Bill',
      date: '2025-04-10',
      size: '180 KB',
      status: 'Available',
      viewUrl: '/documents/view/home-bill-april-2025.pdf',
      downloadUrl: '/documents/download/home-bill-april-2025.pdf',
    },
    {
      id: 3,
      title: 'Endorsement Notice',
      category: 'Endorsement',
      date: '2025-02-18',
      size: '96 KB',
      status: 'Available',
      viewUrl: '/documents/view/endorsement-notice.pdf',
      downloadUrl: '/documents/download/endorsement-notice.pdf',
    },
  ];
};