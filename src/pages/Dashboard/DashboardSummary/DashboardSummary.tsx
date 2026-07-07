import { useEffect, useState } from 'react';

import DashboardSummaryView from './DashboardSummaryView';
import { getDashboardSummaryApi } from './DashboardSummaryApi';

import type { DashboardSummaryItem } from './Interfaces';

const DashboardSummary = () => {
  const [items, setItems] = useState<DashboardSummaryItem[]>([]);

  useEffect(() => {
    const fetchSummary = async () => {
      const response = await getDashboardSummaryApi();
      setItems(response);
    };

    fetchSummary();
  }, []);

  if (!items.length) {
    return null;
  }

  return <DashboardSummaryView items={items} />;
};

export default DashboardSummary;