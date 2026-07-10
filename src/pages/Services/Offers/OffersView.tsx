import './Offers.css';

import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Card, Typography } from '../../../common/components';
import OfferIcon from './OfferIcon';

import type { OfferItem } from './interfaces';
interface OffersViewProps {
  offers: OfferItem[];
}

const OffersView: React.FC<OffersViewProps> = ({ offers }) => {
  return (
    <Card variant='outlined' className='offers-card'>
      <Typography variant='h3' color='primary' className='offers-title'>
        Offers for You
      </Typography>

      <div className='offers-list'>
        {offers.map(item => (
          <div key={item.id} className='offer-item'>
            <div className='offer-icon'>
              <OfferIcon type={item.type} />
            </div>

            <div className='offer-content'>
              <Typography variant='body1' className='offer-title'>
                {item.title}
              </Typography>

              <Typography variant='body2' color='muted'>
                {item.subtitle}
              </Typography>
            </div>

            <div className='offer-action'>
              <FiPlus
                style={{ cursor: item.onOfferClick ? 'pointer' : 'default' }}
                onClick={() => item.onOfferClick?.()}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default OffersView;
