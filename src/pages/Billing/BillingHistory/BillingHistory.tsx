import { useEffect, useState } from 'react';
import { Card } from '../../../common/components';
import BillingHistoryView from './BillingHistoryView';
import { getBillingHistoryApi } from './BillingHistoryApi';
import type { Transaction } from './Interfaces';
import './BillingHistory.css';

const BillingHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBillingHistoryApi().then(data => {
      setTransactions(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="billing-history-wrapper">
      <Card className="billing-history-card">
        {loading ? (
          <div className="loading">Loading history...</div>
        ) : (
          <BillingHistoryView transactions={transactions} />
        )}
      </Card>
    </div>
  );
};

export default BillingHistory;
