import React, { useEffect, useState } from 'react';
import RecentAlertsView from './RecentAlertsView';
import type { RecentAlertsProps, AlertItem } from './IRecentAlerts';

const RecentAlerts: React.FC<RecentAlertsProps> = ({ alerts, newCount = 3 }) => {
  const [alertList, setAlertList] = useState<AlertItem[]>([]);

  useEffect(() => {
    if (alerts?.length) {
      setAlertList(alerts);
    } else {
      setAlertList([
        {
          id: 1,
          title: 'Severe Storm Alert',
          description: 'Hail storm predicted in your area tonight. Park vehicles under cover if possible.',
          time: '10 mins ago',
          type: 'warning',
        },
        {
          id: 2,
          title: 'Claim Status Update',
          description: 'Claim #MC-8821: Adjuster assigned and scheduled for inspection on Thursday.',
          time: '2 hours ago',
          type: 'info',
        },
        {
          id: 3,
          title: 'Policy Renewal',
          description: 'Your Premium Auto policy is up for renewal in 15 days. Review your rates.',
          time: 'Yesterday',
          type: 'success',
        },
      ]);
    }
  }, [alerts]);

  return <RecentAlertsView alerts={alertList} newCount={newCount} />;
};

export default RecentAlerts;