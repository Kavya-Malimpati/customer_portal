import React, { useEffect, useState } from 'react';

import OffersView from './OffersView';

import type { OffersProps, OfferItem } from './interfaces';

const Offers: React.FC<OffersProps> = ({ offers }) => {
  const [offerList, setOfferList] = useState<OfferItem[]>([]);

  useEffect(() => {
    if (offers?.length) {
      setOfferList(offers);
    } else {
      setOfferList([
        {
          id: 1,
          title: 'Glass Coverage',
          subtitle: 'Starting at $4/mo',
          type: 'glass',
        },
        {
          id: 2,
          title: 'Roadside Assist',
          subtitle: 'Loyalty Discount Applied',
          type: 'roadside',
        },
        {
          id: 3,
          title: 'Bundle & Save',
          subtitle: 'Save up to 15% on combined policies',
          type: 'bundle',
        },
      ]);
    }
  }, [offers]);

  return <OffersView offers={offerList} />;
};

export default Offers;
