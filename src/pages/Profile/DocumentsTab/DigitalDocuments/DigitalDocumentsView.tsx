import './DigitalDocument.css';

import { useState } from 'react';
import {
	FiClipboard,
	FiCreditCard,
	FiDownload,
	FiEye,
	FiFileText,
	FiFilter,
	FiShield,
} from 'react-icons/fi';

import { Button, CardContent, Typography } from '../../../../common/components';

import type { DigitalDocument, DigitalDocumentsViewProps } from './Interface';

const DigitalDocumentsView = ({ documents, onView }: DigitalDocumentsViewProps) => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedDocuments = [...documents].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
  }) as DigitalDocument[];

  const toggleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'Policy Document':
        return <FiShield size={24} />;
      case 'Bill':
        return <FiFileText size={24} />;
      case 'Endorsement':
        return <FiClipboard size={24} />;
      case 'Card':
        return <FiCreditCard size={24} />;
      default:
        return <FiFileText size={24} />;
    }
  };

  return (
    <main className='mt-14'>
      <div className='w-full'>
        {/* Documents Card */}
        <div className='digital-documents-card'>
          {/* Header */}
          <div className='digital-documents-header'>
            <Typography variant='h3' color='primary'>
              Digital Documents
            </Typography>

            <div className='digital-documents-actions'>
              <Button
                variant='outlined'
                size='small'
                color='inherit'
                startIcon={<FiFilter size={16} />}
                aria-label='Filter documents'
                className='border border-gray-300'
              >
                Filter
              </Button>

              <Button
                variant='outlined'
                size='small'
                color='inherit'
                onClick={toggleSort}
                startIcon={<span>↕</span>}
                aria-label={`Sort documents by date: ${sortOrder === 'asc' ? 'oldest first' : 'newest first'}`}
                className='border border-gray-300'
              >
                Sort
              </Button>
            </div>
          </div>

          {/* Table Content */}
          <CardContent className='p-0'>
            <table className='documents-table'>
              <tbody>
                {sortedDocuments.map(document => (
                  <tr key={document.id} className='document-row'>
                    {/* Icon Cell */}
                    <td className='icon-cell'>
                      <div className='icon-container'>{getIcon(document.category)}</div>
                    </td>

                    {/* Title and Details Cell */}
                    <td className='document-info-cell'>
                      <Typography variant='body2' color='primary' className='document-title'>
                        {document.title}
                      </Typography>
                      <Typography variant='body2' color='muted' className='document-meta'>
                        {document.category} • {document.size}
                      </Typography>
                    </td>

                    {/* Date Cell */}
                    <td className='date-cell'>
                      <Typography variant='body2' color='caption' className='date-text'>
                        Modified {document.date}
                      </Typography>
                    </td>

                    {/* Actions Cell */}
                    <td className='actions-cell'>
                      <div className='actions-container'>
                        <Button
                          variant='text'
                          size='small'
                          onClick={() => onView(document.viewUrl)}
                          startIcon={<FiEye size={16} />}
                          aria-label={`View ${document.title}`}
                        >
                          View
                        </Button>

                        <a
                          href={document.downloadUrl}
                          download
                          className='action-link'
                          aria-label={`Download ${document.title}`}
                        >
                          <FiDownload size={16} />
                          <span>Download</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </div>

        {/* Archived Documents Link */}
        <div className='archived-link-container'>
          <a href='#' className='archived-link' aria-label='View documents from prior to 2023'>
            View Archived Documents (Prior to 2023)
          </a>
        </div>
      </div>
    </main>
  );
};

export default DigitalDocumentsView;
