import React from 'react';
import { FaCarCrash } from 'react-icons/fa';
import { FiPackage, FiTool } from 'react-icons/fi';

import type { OfferItem } from './interfaces';

interface OfferIconProps {
  type: OfferItem['type'];
}

const OfferIcon: React.FC<OfferIconProps> = ({ type }) => {
  switch (type) {
    case 'glass':
      return (
        <div className='glassicon'>
          <FiTool />
        </div>
      );

    case 'roadside':
      return (
        <div className='roadsideicon'>
          <FaCarCrash />
        </div>
      );

    case 'bundle':
      return (
        <div className='bundleicon'>
          <FiPackage />
        </div>
      );

    default:
      return null;
  }
};

export default OfferIcon;
