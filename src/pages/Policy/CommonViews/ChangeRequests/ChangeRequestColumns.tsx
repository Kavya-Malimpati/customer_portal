import type { TableColumn } from '../../../../common/components/Table';
import { Typography } from '../../../../common/components';
import type { ChangeRequestRow } from '../interfaces';

export const changeRequestsColumns: TableColumn<ChangeRequestRow>[] = [
  {
    field: 'requestDate',
    headerName: 'REQUEST DATE',
    sortable: false,
    renderCell: (row: ChangeRequestRow) => (
      <Typography className='request-date-text'>{row.requestDate}</Typography>
    ),
  },
  {
    field: 'type',
    headerName: 'TYPE',
    sortable: false,
    renderCell: (row: ChangeRequestRow) => (
      <Typography className='change-type-text'>{row.type}</Typography>
    ),
  },
  {
    field: 'status',
    headerName: 'STATUS',
    renderCell: (row: ChangeRequestRow) => (
      <span className={`status-badge ${row.status.toLowerCase().replace(/_/g, '-')}`}>
        {row.status.replace('_', ' ')}
      </span>
    ),
  },
  {
    field: 'estimatedCompletion',
    headerName: 'EST. COMPLETION',
    renderCell: (row: ChangeRequestRow) => (
      <Typography className='estimated-completion-text'>
        {row.estimatedCompletion ?? '—'}
      </Typography>
    ),
  },
];
