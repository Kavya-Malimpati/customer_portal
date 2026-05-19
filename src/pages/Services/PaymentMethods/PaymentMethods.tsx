import React from 'react';

import PaymentMethodsView from './PaymentMethodsView';

import type { PaymentMethodsProps, PaymentMethodItem } from './interfaces';

const defaultPaymentMethods: PaymentMethodItem[] = [
  {
    id: 1,
    cardType: 'visa',
    title: 'Visa Platinum •••• 2520',
    subtitle: 'Primary for Auto-pay',
  },
  {
    id: 2,
    cardType: 'chase',
    title: 'Chase Savings •••• 1330',
    subtitle: 'Backup payment method',
  },
];

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ methods }) => {
  const paymentMethods = methods?.length ? methods : defaultPaymentMethods;
  return <PaymentMethodsView methods={paymentMethods} />;
};

export default PaymentMethods;
