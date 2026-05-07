import { Typography } from '../../../common/components';
import { MdPhoneIphone } from 'react-icons/md';
import './PaymentUi.css';
import { FaUniversity } from 'react-icons/fa';
import { FiCalendar, FiCreditCard } from 'react-icons/fi';

import type { PremiumPaymentUiProps } from './Interfaces';

const PremiumPaymentView = ({ amount, dueDate, status, onPayClick }: PremiumPaymentUiProps) => {
  return (
    <div className='payment-wrapper'>
      <div className='payment-card'>
        <Typography variant='overline' color='inverse'>
          TOTAL BALANCE DUE
        </Typography>

        <div className='payment-amount'>
          <Typography variant='h2' color='inverse'>
            {amount}
          </Typography>
        </div>

        <div className='payment-due'>
          <div className='payment-due-row'>
            <FiCalendar size={18} />
            <Typography variant='body2' color='inverse'>
              Due by {dueDate}
            </Typography>
          </div>
        </div>

        <div className='payment-button-wrapper'>
          <button className='payment-button' onClick={onPayClick}>
            <FiCreditCard size={16} />
            Pay Now
          </button>
        </div>

        <div className='payment-methods'>
          <FiCreditCard size={18} />
          <FaUniversity size={18} />
          <MdPhoneIphone size={18} />
        </div>

        {status !== 'pending' && (
          <div className='payment-status'>
            <Typography variant='caption' color={status === 'success' ? 'success' : 'error'}>
              {status === 'success' ? 'Payment Successful' : 'Payment Failed'}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumPaymentView;
