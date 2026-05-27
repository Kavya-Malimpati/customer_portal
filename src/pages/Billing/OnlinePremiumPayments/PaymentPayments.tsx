import { useEffect, useState } from 'react';
import PremiumPaymentView from './PremiumPaymentView';
import { getPremiumPaymentsApi } from './PremiumPaymentsApi';
import type { PremiumPaymentData, PaymentStatus } from './Interfaces';

const PremiumPayment = () => {
  const [data, setData] = useState<PremiumPaymentData | null>(null);
  const [status, setStatus] = useState<PaymentStatus>('pending');

  useEffect(() => {
    const fetchData = async () => {
      const res = await getPremiumPaymentsApi();
      setData(res);
      setStatus(res.status);
    };

    fetchData();
  }, []);

  const handlePayClick = () => {
    const result: PaymentStatus = Math.random() > 0.5 ? 'success' : 'failure';

    setStatus(result);
  };

  if (!data) return null;
  return (
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
  );
};
export default PremiumPayment;
