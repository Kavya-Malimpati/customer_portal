import React from 'react';
import './RecentAlerts.css';
import {Card,Typography,Button} from '../../../common/components';
import { FiAlertTriangle, FiRefreshCw, FiCheckSquare } from 'react-icons/fi';
import type { AlertItem } from './IRecentAlerts';

interface RecentAlertsViewProps {
  alerts: AlertItem[];
  newCount: number;
}

const RecentAlertsView: React.FC<RecentAlertsViewProps> = ({ alerts, newCount }) => {
  return (
    <Card variant="outlined-raised" className="alerts-card">
      <div className="alerts-header">
        <Typography variant="h2" color="primary">Recent Alerts</Typography>
        {newCount > 0 && (
          <span className="alerts-badge">{newCount} NEW</span>
        )}
      </div>

      <div className="alerts-list">
        {alerts.map((alert) => (
          <div key={alert.id} className="alert-item">
            <div className="alert-icon">
              {alert.type === 'warning' && <FiAlertTriangle />}
              {alert.type === 'info' && <FiRefreshCw />}
              {alert.type === 'success' && <FiCheckSquare />}
            </div>

            <div className="alert-content">
              <Typography variant="body1" className="alert-title">
                {alert.title}
              </Typography>

              <Typography variant="body2" color="muted">
                {alert.description}
              </Typography>

              <Typography variant="caption" color="muted">
                {alert.time}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      <div className="alerts-footer">
        <Button variant="text">View All History</Button>
      </div>
    </Card>
  );
};

export default RecentAlertsView;