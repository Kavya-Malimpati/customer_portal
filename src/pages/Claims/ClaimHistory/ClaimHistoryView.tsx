import { useState } from 'react';
import { Card, Typography } from '../../../common/components';
import { Table } from '../../../common/components/Table/Table';
import Modal from '../../../common/components/Modal';
import type { ClaimHistoryItem } from './Interface';
import './ClaimHistory.css';

interface Props {
  data: ClaimHistoryItem[];
}

const ClaimHistoryView = ({ data }: Props) => {
  const [selectedClaim, setSelectedClaim] =
    useState<ClaimHistoryItem | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (row: ClaimHistoryItem) => {
    setSelectedClaim(row);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedClaim(null);
  };

  const getClaimRow = (
    row: Record<string, unknown>
  ): ClaimHistoryItem => {
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
          <Typography variant="body2" color="primary">
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

        return (
          <Typography variant="body2">
            {claim.type}
          </Typography>
        );
      },
    },

    {
      field: 'dateFiled',
      headerName: 'DATE FILED',
      align: 'left' as const,

      renderCell: (row: Record<string, unknown>) => {
        const claim = getClaimRow(row);

        return (
          <Typography variant="body2" color="muted">
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

        return (
          <Typography variant="body2">
            {claim.amount}
          </Typography>
        );
      },
    },
{
  field: 'status',
  headerName: 'STATUS',
  align: 'left',
  width: '160px',
  renderCell: (row: ClaimHistoryItem) => (
    <span
      className={`status-badge ${
        row.status.toLowerCase() === 'paid'
          ? 'status-paid'
          : 'status-archived'
      }`}
    >
      {row.status}
    </span>
  ),
},
    {
      field: 'action',
      headerName: 'ACTION',
      align: 'left' as const,

      renderCell: (row: Record<string, unknown>) => {
        const claim = getClaimRow(row);

        return (
          <Typography
            variant="body2"
            className="action"
            onClick={() => handleOpen(claim)}
          >
            Details
          </Typography>
        );
      },
    },
  ];

  return (
    <Card
      variant="outlined-raised"
      className="history-card"
    >
      <Typography
        variant="h2"
        color="primary"
        className="history-title"
      >
        Claim History
      </Typography>

      <Table
        columns={columns}
        rows={data as unknown as Record<string, unknown>[]}
        variant="outlined"
        size="md"
      />

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title="Claim Details"
      >
        {selectedClaim && (
          <div className="modal-content">
            <Typography variant="body2">
              <strong>ID:</strong> {selectedClaim.id}
            </Typography>

            <Typography variant="body2">
              <strong>Type:</strong> {selectedClaim.type}
            </Typography>

            <Typography variant="body2">
              <strong>Date:</strong> {selectedClaim.dateFiled}
            </Typography>

            <Typography variant="body2">
              <strong>Amount:</strong> {selectedClaim.amount}
            </Typography>

            <Typography variant="body2">
              <strong>Status:</strong>{' '}
              <span
                className={`status ${selectedClaim.status.toLowerCase()}`}
              >
                {selectedClaim.status}
              </span>
            </Typography>
          </div>
        )}
      </Modal>
    </Card>
  );
};

export default ClaimHistoryView;