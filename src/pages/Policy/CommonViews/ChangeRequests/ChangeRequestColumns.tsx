import type { TableColumn } from '../../../../common/components/Table';
import { Typography } from '../../../../common/components';
import type { ChangeRequestRow } from '../../Auto/Cards/interfaces';

export const changeRequestsColumns: TableColumn<ChangeRequestRow>[] = [
  {
    field: 'requestDate',
    headerName: 'REQUEST DATE',
    sortable: true,
  },
  {
    field: 'type',
    headerName: 'TYPE',
    sortable: true,
  },
  {
    field: 'status',
    headerName: 'STATUS',
    renderCell: (row: ChangeRequestRow) => (
      <span
        className={`
          px-(--space-2) py-(--space-1)
          rounded-(--rounded-sm)
          text-(--font-size-xs)
          font-medium
        `}
      >
        {row.status.replace('_', ' ')}
      </span>
    ),
  },
  {
    field: 'estimatedCompletion',
    headerName: 'EST. COMPLETION',
    renderCell: (row: ChangeRequestRow) => (
      <Typography variant='body2' color='body2'>
        {row.estimatedCompletion ?? '—'}
      </Typography>
    ),
  },
];
