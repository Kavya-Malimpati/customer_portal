import { useEffect, useState } from 'react';
import { Modal, Button, Typography } from '../../../common/components';
import PremiumPaymentView from './PremiumPaymentView';
import { getPremiumPaymentsApi } from './PremiumPaymentsApi';
import type { PremiumPaymentData, PaymentStatus } from './Interfaces';

const paymentOptions = [
  'Google Pay',
  'Apple Pay',
  'phone pay'
] as const;

type PaymentOption = (typeof paymentOptions)[number];

const PremiumPayment = () => {
  const [data, setData] = useState<PremiumPaymentData | null>(null);
  const [status, setStatus] = useState<PaymentStatus>('pending');
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPremiumPaymentsApi();
      setData(res);
      setStatus(res.status);
    };

    fetchData();
  }, []);

  const handlePayClick = () => {
    setPaymentModalOpen(true);
  };

  const handlePaymentOptionClick = (option: PaymentOption) => {
    setStatus('success');
    setPaymentModalOpen(false);
  };

  const handleModalClose = () => {
    setPaymentModalOpen(false);
  };

  if (!data) return null;

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}
      >
        <PremiumPaymentView
          amount={data.amount}
          dueDate={data.dueDate}
          status={status}
          onPayClick={handlePayClick}
        />
      </div>

      <Modal
        isOpen={paymentModalOpen}
        onClose={handleModalClose}
        title='Choose payment method'
        maxWidth='560px'
      >
        <div className='payment-method-modal'>
          <Typography variant='body1'>Select a payment method to continue.</Typography>

          <div className='payment-method-grid'>
            {paymentOptions.map(option => (
              <Button
                key={option}
                variant='outlined'
                fullWidth
                onClick={() => handlePaymentOptionClick(option)}
                className='payment-method-button'
              >
                {option}
              </Button>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default PremiumPayment;
