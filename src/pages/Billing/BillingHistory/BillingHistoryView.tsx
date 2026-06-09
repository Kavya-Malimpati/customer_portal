import { Typography, Button } from '../../../common/components';
import Table from '../../../common/components/Table';
import { FiSearch, FiEye, FiFileText, FiRefreshCw } from 'react-icons/fi';
import FormInput from '../../../common/components/FormInput';
import type { Transaction } from './Interfaces';
import './BillingHistory.css';

interface BillingHistoryViewProps {
  transactions: Transaction[];
}

const BillingHistoryView = ({ transactions }: BillingHistoryViewProps) => {
  const columns = [
    {
      field: 'date',
      headerName: 'Date',
      sortable: false,
    },
    {
      field: 'description',
      headerName: 'Policy/Description',
      sortable: false,
      renderCell: (row: Transaction) => (
        <>
          {row.description}
          <br />
          <span className='method-ref'>
            {row.method || row.reference || '-'}
          </span>
        </>
      ),
    },
    {
      field: 'amount',
      headerName: 'Amount',
      sortable: false,
      className: 'amount',
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: false,
      renderCell: (row: Transaction) => (
        <span className={`status ${row.status.toLowerCase()}`}>
          {row.status}
        </span>
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      align: 'right' as const,
      className: 'actions-header',

      renderCell: (row: Transaction) => (
        <div className='actions'>
          <Button variant='text' size='small'>
            <span className='action-content'>
              <FiEye size={12} />
              View
            </span>
          </Button>

          {row.status === 'SUCCESS' ? (
            <Button variant='text' size='small'>
              <span className='action-content'>
                <FiFileText size={12} />
                Receipt
              </span>
            </Button>
          ) : (
            <Button variant='text' size='small'>
              <span className='action-content'>
                <FiRefreshCw size={12} />
                Retry
              </span>
            </Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className='billing-history-content'>
      <div className='billing-history-header'>
        <Typography
          variant='h3'
          style={{ color: 'var(--text-primary)' }}
        >
          Billing History & Statements
        </Typography>

        <div className='search-bar'>
          <FormInput
            id='search-history'
            placeholder='Search history...'
            size='sm'
            variant='outlined'
            className='search-input'
          />

          <Button
            size='small'
            className='search-btn'
          >
            <FiSearch size={16} />
          </Button>
        </div>
      </div>

      <div className='billing-history-table'>
        <Table
          columns={columns}
          rows={transactions as never[]}
          sortable={false}
          className='custom-billing-table'
          variant='outlined'
          size='md'
        />
      </div>

      <div className='billing-history-footer'>
        <Typography variant='body2'>
          Showing 1–10 of 24 transactions
        </Typography>

        <div className='pagination'>
          <Button variant='text' size='small'>
            1
          </Button>

          <Button variant='text' size='small'>
            2
          </Button>

          <Button variant='text' size='small'>
            3
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillingHistoryView;