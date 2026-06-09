import './PaymentMethods.css';

import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Button, Card, Typography } from '../../../common/components';

import type { PaymentMethodItem } from './interfaces';

interface PaymentMethodsViewProps {
  methods: PaymentMethodItem[];
}

const PaymentMethodsView: React.FC<PaymentMethodsViewProps> = ({ methods }) => {
  return (
    <Card variant='outlined-raised' className='payment-methods-card'>
      {/* HEADER */}
      <div className='payment-methods-header'>
        <Typography variant='h3' color='primary' className='payment-methods-title'>
          Payment Methods
        </Typography>

        <div className='payment-methods-add'>
          <FiPlus className='add-icon' />

          <Button variant='text'>Add Method</Button>
        </div>
      </div>

      <div className='payment-methods-list'>
        {methods.map(method => (
          <div key={method.id} className='payment-method-item'>
            <div className='payment-method-logo'>
              <Typography variant='body2' className={`logo-text ${method.cardType}`}>
                {method.cardType.toUpperCase()}
              </Typography>
            </div>

            <div className='payment-method-content'>
              <Typography variant='body1' className='payment-title'>
                {method.title}
              </Typography>

              <Typography variant='body2' className='payment-subtitle'>
                {method.subtitle}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default PaymentMethodsView;
