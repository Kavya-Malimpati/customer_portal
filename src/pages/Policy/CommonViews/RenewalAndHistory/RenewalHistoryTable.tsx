import Table from '../../../../common/components/Table';
import type { RenewalHistoryRow } from '../interfaces';
import { renewalHistoryColumns } from './RenewalAndHistoryColumn';

import '../../styles/TabularCardView.css';

interface Props {
  rows: RenewalHistoryRow[];
}

const RenewalHistoryTable = ({ rows }: Props) => {
  return (
    <div className='tabular-card-table-wrapper'>
      <Table<RenewalHistoryRow>
        columns={renewalHistoryColumns}
        rows={rows}
        size='sm'
        variant='outlined'
        dense
        sortable
        aria-label='Renewal and History'
      />
    </div>
  );
};

export default RenewalHistoryTable;
