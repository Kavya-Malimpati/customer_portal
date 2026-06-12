import { useState } from 'react';
import AutoPayCardView from './AutoPaycardView';
import type { AutoPayState } from './interfaces';

const AutoPayCard = () => {
  const [state, setState] = useState<AutoPayState>({
    enabled: true,
    paymentMethod: {
      brand: 'Visa',
      lastFour: '4242',
      expiry: '12/26',
    },
    nextChargeAmount: '$428.50',
    nextChargeDate: 'Oct 15',
  });

  const handleToggle = (checked: boolean) => {
    setState(prev => ({
      ...prev,
      enabled: checked,
    }));
  };

  const handleUpdatePaymentMethod = () => {
    setState(prev => ({
      ...prev,
      paymentMethod: {
        brand: 'Mastercard',
        lastFour: '5678',
        expiry: '08/27', 
      },
    }));
  };

  return (
    <AutoPayCardView
      state={state}
      onToggle={handleToggle}
      onUpdatePaymentMethod={handleUpdatePaymentMethod}
    />
  );
};

export default AutoPayCard;