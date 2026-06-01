import Table from '../../../../common/components/Table';
import type { ChangeRequestRow } from '../interfaces';
import { changeRequestsColumns } from './ChangeRequestColumns';

import '../../styles/TabularCardView.css';

interface Props {
  rows: ChangeRequestRow[];
}

const ChangeRequestsTable = ({ rows }: Props) => {
  return (
    <div className='tabular-card-table-wrapper'>
      <Table<ChangeRequestRow>
        className='tabular-card-table'
        columns={changeRequestsColumns}
        rows={rows}
        size='sm'
        variant='outlined'
        dense
        sortable={false}
        aria-label='Change Requests'
      />
    </div>
  );
};

export default ChangeRequestsTable;
