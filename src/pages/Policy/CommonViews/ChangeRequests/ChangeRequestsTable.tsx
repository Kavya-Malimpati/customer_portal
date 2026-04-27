import Table from '../../../../common/components/Table';
import type { ChangeRequestRow } from '../../Auto/Cards/interfaces';
import { changeRequestsColumns } from './ChangeRequestColumns';

interface Props {
  rows: ChangeRequestRow[];
}

const ChangeRequestsTable = ({ rows }: Props) => {
  return (
    <Table<ChangeRequestRow>
      columns={changeRequestsColumns}
      rows={rows}
      size='sm'
      variant='outlined'
      dense
      sortable
      aria-label='Change Requests'
    />
  );
};

export default ChangeRequestsTable;
