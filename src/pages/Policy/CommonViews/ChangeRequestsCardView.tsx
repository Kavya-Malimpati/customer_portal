import { Card, CardContent } from '../../../common/components';
import { useEffect, useState } from 'react';

import TabularCardHeaderView from './TabularCardHeaderView';
import ChangeRequestsTable from './ChangeRequests/ChangeRequestsTable';

import type { ChangeRequestRow } from './interfaces';

import '../styles/TabularCardView.css';

interface Props {
  fetchChangeRequests: () => Promise<ChangeRequestRow[]>;
}

const ChangeRequestsCardView = ({ fetchChangeRequests }: Props) => {
  const [rows, setRows] = useState<ChangeRequestRow[]>([]);

  useEffect(() => {
    fetchChangeRequests().then(setRows);
  }, [fetchChangeRequests]);

  return (
    <Card variant='outlined'>
      <CardContent className='tabular-card-content'>
        <TabularCardHeaderView
          title='Change Requests'
          rightSlot={
            rows.length > 0 && <span className='record-count-pill'>{rows.length} Records</span>
          }
        />
        <ChangeRequestsTable rows={rows} />
      </CardContent>
    </Card>
  );
};

export default ChangeRequestsCardView;
