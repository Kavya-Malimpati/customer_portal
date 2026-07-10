import './RecentAlerts.css';

import React, { useState } from 'react';
import { FiAlertTriangle, FiCheckSquare, FiRefreshCw } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Button, Typography } from '../../../common/components';

import type { AlertItem } from './interfaces';

interface RecentAlertsViewProps {
  alerts: AlertItem[];
  newCount: number;
  onAlertClick?: (alert: AlertItem) => void;
}

const historyItems = [
  { id: 101, title: 'Payment Reminder',   description: 'Your premium payment is due in 3 days.',      time: 'Jun 25, 2026', type: 'warning' as const, path: '/billing' },
  { id: 102, title: 'Payment Successful', description: 'Your payment has been received successfully.', time: 'Jun 22, 2026', type: 'success' as const, path: '/billing' },
  { id: 103, title: 'Policy Renewal',     description: 'Your policy renewal starts in 30 days.',       time: 'Jun 18, 2026', type: 'info' as const,    path: '/policy' },
  { id: 104, title: 'Policy Issued',      description: 'Your new policy has been issued.',             time: 'Jun 10, 2026', type: 'success' as const, path: '/policy' },
  { id: 105, title: 'Claim Submitted',    description: 'Your claim has been successfully submitted.',  time: 'Jun 05, 2026', type: 'info' as const,    path: '/claims' },
  { id: 106, title: 'Claim Approved',     description: 'Your claim has been approved.',                time: 'May 30, 2026', type: 'success' as const, path: '/claims' },
  { id: 107, title: 'Claim Closed',       description: 'Your claim has been closed successfully.',     time: 'May 20, 2026', type: 'success' as const, path: '/claims' },
];

const getAlertIcon = (type: AlertItem['type']) => {
  switch (type) {
    case 'warning': return <FiAlertTriangle />;
    case 'info':    return <FiRefreshCw />;
    case 'success': return <FiCheckSquare />;
    default:        return null;
  }
};

const RecentAlertsView: React.FC<RecentAlertsViewProps> = ({ alerts, newCount, onAlertClick }) => {
  const [showHistory, setShowHistory] = useState(false);
  const navigate = useNavigate();

  return (
    <div className='alerts-card'>
      <div className='alerts-header'>
        <Typography variant='h3' color='primary'>Recent Alerts</Typography>
        {newCount > 0 && <span className='alerts-badge'>{newCount} NEW</span>}
      </div>

      <div className={`alerts-list${showHistory ? ' alerts-list-scroll' : ''}`}>
        {alerts.map(alert => (
          <Button
            key={alert.id}
            type='button'
            variant='text'
            color='inherit'
            className='alert-item'
            onClick={() => onAlertClick?.(alert)}
          >
            <div className={`alert-icon ${alert.type}`}>{getAlertIcon(alert.type)}</div>
            <div className='alert-content'>
              <Typography variant='body1' className='alert-title'>{alert.title}</Typography>
              <Typography variant='body2' color='muted'>{alert.description}</Typography>
              <Typography variant='caption' color='muted'>{alert.time}</Typography>
            </div>
          </Button>
        ))}

        {showHistory && historyItems.map(item => (
          <Button
            key={item.id}
            type='button'
            variant='text'
            color='inherit'
            className='alert-item'
            onClick={() => navigate(item.path)}
          >
            <div className={`alert-icon ${item.type}`}>{getAlertIcon(item.type)}</div>
            <div className='alert-content'>
              <Typography variant='body1' className='alert-title'>{item.title}</Typography>
              <Typography variant='body2' color='muted'>{item.description}</Typography>
              <Typography variant='caption' color='muted'>{item.time}</Typography>
            </div>
          </Button>
        ))}
      </div>

      <div className='alerts-footer'>
        <Button variant='text' onClick={() => setShowHistory(prev => !prev)}>
          {showHistory ? 'Show Less' : 'View All History'}
        </Button>
      </div>
    </div>
  );
};

export default RecentAlertsView;
