import './RecentAlerts.css';

import React from 'react';
import { FiAlertTriangle, FiCheckSquare, FiRefreshCw } from 'react-icons/fi';

import { Button, Typography } from '../../../common/components';

import type { AlertItem } from './interfaces';

interface RecentAlertsViewProps {
  alerts: AlertItem[];
  newCount: number;
  onAlertClick?: (alert: AlertItem) => void;
}

const getAlertIcon = (type: AlertItem['type']) => {
  switch (type) {
    case 'warning':
      return <FiAlertTriangle />;
    case 'info':
      return <FiRefreshCw />;
    case 'success':
      return <FiCheckSquare />;
    default:
      return null;
  }
};

const RecentAlertsView: React.FC<RecentAlertsViewProps> = ({ alerts, newCount, onAlertClick }) => {
  return (
    <div className='alerts-card'>
      <div className='alerts-header'>
        <Typography variant='h3' color='primary'>
          Recent Alerts
        </Typography>

        {newCount > 0 && <span className='alerts-badge'>{newCount} NEW</span>}
      </div>

      <div className='alerts-list'>
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
              <Typography variant='body1' className='alert-title'>
                {alert.title}
              </Typography>

              <Typography variant='body2' color='muted'>
                {alert.description}
              </Typography>

              <Typography variant='caption' color='muted'>
                {alert.time}
              </Typography>
            </div>
          </Button>
        ))}
      </div>

      <div className='alerts-footer'>
        <Button variant='text'>View All History</Button>
      </div>
    </div>
  );
};

export default RecentAlertsView;
