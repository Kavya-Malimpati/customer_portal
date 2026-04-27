import { Card, CardContent } from '../../../../common/components';
import { useEffect, useState } from 'react';

import CardHeaderView from '../../CommonViews/CardHeaderView';
import RenewalHistoryTable from '../../CommonViews/RenewalAndHistory/RenewalAndHistoryTable';

import type { RenewalHistoryRow } from './interfaces';
import { getHomeRenewalHistoryApi } from '../Api/homeownersRenewalHistoryApi';

const RenewalHistoryCardView = () => {
  const [rows, setRows] = useState<RenewalHistoryRow[]>([]);

  useEffect(() => {
    getHomeRenewalHistoryApi().then(setRows);
  }, []);

  return (
    <Card className='rounded-(--rounded-lg)'>
      <CardContent className='flex flex-col gap-(--space-4)'>
        <CardHeaderView title='Renewal & History' />

        <RenewalHistoryTable rows={rows} />
      </CardContent>
    </Card>
  );
};

export default RenewalHistoryCardView;
