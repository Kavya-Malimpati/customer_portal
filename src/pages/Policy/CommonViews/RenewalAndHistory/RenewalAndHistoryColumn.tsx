import type { TableColumn } from '../../../../common/components/Table';
import { Typography, Button } from '../../../../common/components';
import type { RenewalHistoryRow } from '../../Auto/Cards/interfaces';

export const renewalHistoryColumns: TableColumn<RenewalHistoryRow>[] = [
  {
    field: 'termPeriod',
    headerName: 'TERM PERIOD',
    sortable: true,
  },
  {
    field: 'policyType',
    headerName: 'POLICY TYPE',
    sortable: true,
  },
  {
    field: 'premium',
    headerName: 'PREMIUM',
    sortable: true,
  },
  {
    field: 'claims',
    headerName: 'CLAIMS',
    renderCell: (row: RenewalHistoryRow) => (
      <Typography variant='body2' color={row.claims === '0' ? 'body2' : 'danger'}>
        {row.claims}
      </Typography>
    ),
  },
  {
    field: 'status',
    headerName: 'STATUS',
    renderCell: (row: RenewalHistoryRow) => (
      <Typography variant='body2' color='body2'>
        {row.status}
      </Typography>
    ),
  },
  {
    field: 'action',
    headerName: 'ACTION',
    sortable: false,
    renderCell: () => (
      <Button variant='text' size='small'>
        View
      </Button>
    ),
  },
];
