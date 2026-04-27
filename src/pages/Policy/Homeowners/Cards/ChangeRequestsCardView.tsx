import { Card, CardContent } from '../../../../common/components';
import { useEffect, useState } from 'react';

import CardHeaderView from '../../CommonViews/CardHeaderView';
import ChangeRequestsTable from '../../CommonViews/ChangeRequests/ChangeRequestsTable';

import type { ChangeRequestRow } from './interfaces';
import { getChangeRequestsApi } from '../Api/homeownersChangeRequestsApi';

const ChangeRequestsCardView = () => {
  const [rows, setRows] = useState<ChangeRequestRow[]>([]);

  useEffect(() => {
    getChangeRequestsApi().then(setRows);
  }, []);

  return (
    <Card className='rounded-(--rounded-lg)'>
      <CardContent className='flex flex-col gap-(--space-4)'>
        <CardHeaderView title='Change Requests' rightSlot={`${rows.length} Records`} />

        <ChangeRequestsTable rows={rows} />
      </CardContent>
    </Card>
  );
};

export default ChangeRequestsCardView;
