import { Typography, Button } from '../../../common/components';

import { FiCalendar, FiCreditCard, FiCheckCircle } from 'react-icons/fi';

import './BillingSummaryUi.css';

import type { BillingSummaryUiProps } from './Interfaces';

const BillingSummaryView = ({ billingSummary }: BillingSummaryUiProps) => {
  return (
    <div className='billing-summary-wrapper'>
      <div className='billing-summary-card'>
        <div className='billing-summary-header'>
          <div>
            <Typography variant='h3' color='primary'>
              TOTAL BALANCE DUE
            </Typography>

            <Typography variant='h3' className='billing-amount'>
              {billingSummary.totalBalance}
            </Typography>

            <div className='billing-date'>
              <FiCalendar size={16} />

              <Typography variant='body2'>Due by {billingSummary.dueDate}</Typography>
            </div>
          </div>

          {billingSummary.autoPayEnabled && (
            <div className='billing-autopay'>
              <FiCheckCircle size={16} />
              <span>Auto-Pay: ON</span>
            </div>
          )}
        </div>

        <div className='billing-info-row'>
          <div className='billing-info-card'>
            <Typography variant='body2' className='billing-info-title'>
              Upcoming Schedule
            </Typography>

            <div className='billing-info-content'>
              <Typography variant='h4' color='primary'>
                {billingSummary.installmentName}
              </Typography>

              <Typography variant='h4' color='primary'>
                {billingSummary.installmentAmount}
              </Typography>
            </div>
          </div>

          <div className='billing-info-card'>
            <Typography variant='body2' className='billing-info-title'>
              Primary Method
            </Typography>

            <div className='billing-method'>
              <FiCreditCard size={18} />

              <Typography variant='h5' color='primary'>
                {billingSummary.paymentMethod}
              </Typography>
            </div>
          </div>
        </div>

        <div className='billing-actions'>
          <Button variant='contained' className='billing-pay-button'>
            Pay Now
          </Button>

          <Button variant='outlined' className='billing-statement-button'>
            View Statement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BillingSummaryView;
