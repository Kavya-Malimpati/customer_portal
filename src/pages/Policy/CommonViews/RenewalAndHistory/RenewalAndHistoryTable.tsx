import Table from '../../../../common/components/Table';
import type { RenewalHistoryRow } from '../../Auto/Cards/interfaces';
import { renewalHistoryColumns } from './RenewalAndHistoryColumn';

interface Props {
  rows: RenewalHistoryRow[];
}

const RenewalHistoryTable = ({ rows }: Props) => {
  return (
    <Table<RenewalHistoryRow>
      columns={renewalHistoryColumns}
      rows={rows}
      size='sm'
      variant='outlined'
      dense
      sortable
      aria-label='Renewal and History'
    />
  );
};

export default RenewalHistoryTable;
