import { Typography, Button } from '../../../common/components';
import { FiSearch } from 'react-icons/fi';
import FormInput from '../../../common/components/FormInput';
import type { Transaction } from './Interfaces';
import './BillingHistory.css';

interface BillingHistoryViewProps {
  transactions: Transaction[];
}

const BillingHistoryView = ({ transactions }: BillingHistoryViewProps) => {
  return (
    <div className='billing-history-content'>
      <div className='billing-history-header'>
        <Typography variant='h5'>Billing History & Statements</Typography>

        <div className='search-bar'>
          <FormInput
            id='search-history'
            placeholder='Search history...'
            size='sm'
            variant='outlined'
            className='search-input'
          />

          <Button size='small' className='search-btn'>
            <FiSearch size={16} />
          </Button>
        </div>
      </div>

      <div className='billing-history-table'>
        <div className='table-header'>
          <span>Date</span>
          <span>Policy/Description</span>
          <span>Amount</span>
          <span>Status</span>
          <span className='actions-header'>Actions</span>
        </div>

        {transactions.map(tx => (
          <div key={tx.id} className='table-row'>
            <span>{tx.date}</span>

            <span>
              {tx.description}
              <br />
              <span className='method-ref'>{tx.method || tx.reference || '-'}</span>
            </span>

            <span className='amount'>{tx.amount}</span>

            <span className={`status ${tx.status.toLowerCase()}`}>{tx.status}</span>

            <span className='actions'>
              <Button variant='text' size='small'>
                View
              </Button>

              {tx.status === 'SUCCESS' ? (
                <Button variant='text' size='small'>
                  Receipt
                </Button>
              ) : (
                <Button variant='text' size='small'>
                  Retry
                </Button>
              )}
            </span>
          </div>
        ))}
      </div>

      <div className='billing-history-footer'>
        <Typography variant='caption'>Showing 1–10 of 24 transactions</Typography>

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
