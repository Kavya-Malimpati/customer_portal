import { useState } from 'react';
import { Card, LabelValue, Typography } from '../../../common/components';
import { Table } from '../../../common/components/Table/Table';
import Modal from '../../../common/components/Modal';
import type { ClaimHistoryItem } from './Interface';
import './ClaimHistory.css';

interface Props {
  data: ClaimHistoryItem[];
}

const ClaimHistoryView = ({ data }: Props) => {
  const [selectedClaim, setSelectedClaim] = useState<ClaimHistoryItem | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (row: ClaimHistoryItem) => {
    setSelectedClaim(row);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedClaim(null);
  };

  const getClaimRow = (row: Record<string, unknown>): ClaimHistoryItem => {
    return row as unknown as ClaimHistoryItem;
  };

  const columns = [
    {
      field: 'id',
      headerName: 'CLAIM ID',
      align: 'left' as const,

      renderCell: (row: Record<string, unknown>) => {
        const claim = getClaimRow(row);

        return (
          <Typography variant='body2' color='primary'>
            {claim.id}
          </Typography>
        );
      },
    },

    {
      field: 'type',
      headerName: 'TYPE',
      align: 'left' as const,

      renderCell: (row: Record<string, unknown>) => {
        const claim = getClaimRow(row);

        return <Typography variant='body2'>{claim.type}</Typography>;
      },
    },

    {
      field: 'dateFiled',
      headerName: 'DATE FILED',
      align: 'left' as const,

      renderCell: (row: Record<string, unknown>) => {
        const claim = getClaimRow(row);

        return (
          <Typography variant='body2' color='muted'>
            {claim.dateFiled}
          </Typography>
        );
      },
    },

    {
      field: 'amount',
      headerName: 'AMOUNT PAID',
      align: 'left' as const,

      renderCell: (row: Record<string, unknown>) => {
        const claim = getClaimRow(row);

        return <Typography variant='body2'>{claim.amount}</Typography>;
      },
    },
    {
      field: 'status',
      headerName: 'STATUS',
      align: 'left' as const,
      width: '160px',
      renderCell: (row: Record<string, unknown>) => {
        const claim = getClaimRow(row);
        return (
          <span
            className={`status-badge ${
              claim.status.toLowerCase() === 'paid' ? 'status-paid' : 'status-archived'
            }`}
          >
            {claim.status}
          </span>
        );
      },
    },
    {
      field: 'action',
      headerName: 'ACTION',
      align: 'left' as const,

      renderCell: (row: Record<string, unknown>) => {
        const claim = getClaimRow(row);

        return (
          <Typography variant='body2' className='action' onClick={() => handleOpen(claim)}>
            Details
          </Typography>
        );
      },
    },
  ];

  return (
    <Card variant='outlined-raised' className='history-card'>
      <Typography variant='h3' color='primary' className='history-title'>
        Claim History
      </Typography>

      <Table
        columns={columns}
        rows={data as unknown as Record<string, unknown>[]}
        variant='outlined'
        size='md'
      />
      <Modal isOpen={isOpen} onClose={handleClose} title='Claim Details'>
        {selectedClaim && (
          <div className='claim-details-modal'>
            <LabelValue label='Claim ID' value={selectedClaim.id} />

            <LabelValue label='Claim Type' value={selectedClaim.type} />

            <LabelValue label='Date Filed' value={selectedClaim.dateFiled} />

            <LabelValue label='Claim Amount' value={selectedClaim.amount} />

            <LabelValue
              label='Status'
              value={
                <span
                  className={`status-chip ${selectedClaim.status
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                >
                  {selectedClaim.status}
                </span>
              }
            />
          </div>
        )}
      </Modal>
    </Card>
  );
};

export default ClaimHistoryView;
