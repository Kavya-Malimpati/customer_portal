import React from 'react';
import { useNavigate } from 'react-router-dom';

import RecentAlertsView from './RecentAlertsView';

import type { RecentAlertsProps, AlertItem } from './interfaces';

const RecentAlerts: React.FC<RecentAlertsProps> = ({ alerts, newCount = 3 }) => {
  const navigate = useNavigate();

  const defaultAlerts: AlertItem[] = [
    {
      id: 1,
      title: 'Severe Storm Alert',
      description:
        'Hail storm predicted in your area tonight. Park vehicles under cover if possible.',
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
  ];

  const alertList = alerts?.length ? alerts : defaultAlerts;

  const handleAlertClick = (alert: AlertItem) => {
    const title = alert.title.toLowerCase();

    if (title.includes('storm')) {
      window.dispatchEvent(new CustomEvent('open-notifications'));
      return;
    }

    if (title.includes('claim')) {
      navigate('/claims');
      return;
    }

    if (title.includes('policy')) {
      navigate('/policy');
      return;
    }
  };

  return (
    <RecentAlertsView alerts={alertList} newCount={newCount} onAlertClick={handleAlertClick} />
  );
};

export default RecentAlerts;
