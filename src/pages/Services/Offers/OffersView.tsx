import React from 'react';
import './Offers.css';
import {Card,Typography} from '../../../common/components';
import { FiPlus, FiTool, FiPackage } from 'react-icons/fi';
import { FaCarCrash } from 'react-icons/fa';
import type { OfferItem } from './IOffers';

interface OffersViewProps {
  offers: OfferItem[];
}

const OffersView: React.FC<OffersViewProps> = ({ offers }) => {
  return (
    <Card variant="outlined" className="offers-card">

      
      <Typography variant="h3" color="primary" className="offers-title">
        Offers for You
      </Typography>

   {/* create a component and reuse it  */}
      <div className="offers-list">
        {offers.map((item) => (
          <div key={item.id} className="offer-item">
            <div className="offer-icon">
              {item.type === 'glass' && (
                <div className="glassicon">
                  <FiTool />
                </div>
              )}

              {item.type === 'roadside' && (
                <div className="roadsideicon">
                  <FaCarCrash />
                </div>
              )}

              {item.type === 'bundle' && (
                <div className="bundleicon">
                  <FiPackage />
                </div>
              )}
            </div>

           
            <div className="offer-content">
              <Typography variant="body1" className="offer-title">
                {item.title}
              </Typography>

              <Typography variant="body2" color="muted">
                {item.subtitle}
              </Typography>
            </div>

            
            <div className="offer-action">
              <FiPlus />
            </div>

          </div>
        ))}
      </div>

    </Card>
  );
};

export default OffersView;