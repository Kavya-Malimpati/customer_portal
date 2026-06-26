import { useEffect, useState } from 'react';

import BillingSummaryView from './BillingSummaryView';
import { getBillingSummaryApi } from './BillingSummaryApi';

import type { BillingSummaryData } from './Interfaces';

const BillingSummary = () => {
  const [billingSummary, setBillingSummary] =
    useState<BillingSummaryData | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBillingSummaryApi().then(data => {
      setBillingSummary(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && billingSummary && (
        <BillingSummaryView
          billingSummary={billingSummary}
        />
      )}
    </>
  );
};

export default BillingSummary;