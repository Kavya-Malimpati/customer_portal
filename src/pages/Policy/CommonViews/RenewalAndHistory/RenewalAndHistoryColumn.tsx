import type { TableColumn } from '../../../../common/components/Table';
import { Button, Typography } from '../../../../common/components';
import type { RenewalHistoryRow } from '../interfaces';

export const renewalHistoryColumns: TableColumn<RenewalHistoryRow>[] = [
  {
    field: 'termPeriod',
    headerName: 'TERM PERIOD',
    sortable: false,
    renderCell: (row: RenewalHistoryRow) => (
      <Typography className='term-period-text'>{row.termPeriod}</Typography>
    ),
  },
  {
    field: 'policyType',
    headerName: 'POLICY TYPE',
    sortable: false,
    renderCell: (row: RenewalHistoryRow) => (
      <Typography className='policy-type-text'>{row.policyType}</Typography>
    ),
  },
  {
    field: 'premium',
    headerName: 'PREMIUM',
    sortable: false,
    renderCell: (row: RenewalHistoryRow) => (
      <Typography className='premium-text'>{row.premium}</Typography>
    ),
  },
  {
    field: 'claims',
    headerName: 'CLAIMS',
    renderCell: (row: RenewalHistoryRow) => (
      <Typography className={row.claims !== '0' ? 'claims-danger' : ''}>{row.claims}</Typography>
    ),
  },
  {
    field: 'status',
    headerName: 'STATUS',
    renderCell: (row: RenewalHistoryRow) => (
      <span className={`status-badge ${row.status.toLowerCase().replace(/_/g, '-')}`}>
        {row.status.replace('_', ' ')}
      </span>
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
