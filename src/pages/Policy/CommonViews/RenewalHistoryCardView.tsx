import { Card, CardContent } from '../../../common/components';
import { useEffect, useState } from 'react';

import TabularCardHeaderView from './TabularCardHeaderView';
import RenewalHistoryTable from './RenewalAndHistory/RenewalHistoryTable';

import type { RenewalHistoryRow } from './interfaces';

import '../styles/TabularCardView.css';

interface Props {
  fetchRenewalHistory: () => Promise<RenewalHistoryRow[]>;
}

const RenewalHistoryCardView = ({ fetchRenewalHistory }: Props) => {
  const [rows, setRows] = useState<RenewalHistoryRow[]>([]);

  useEffect(() => {
    fetchRenewalHistory().then(setRows);
  }, [fetchRenewalHistory]);

  return (
    <Card>
      <CardContent className='tabular-card-content'>
        <TabularCardHeaderView title='Renewal & History' />
        <RenewalHistoryTable rows={rows} />
      </CardContent>
    </Card>
  );
};

export default RenewalHistoryCardView;
