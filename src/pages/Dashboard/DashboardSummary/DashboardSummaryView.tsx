import { FiShield, FiDollarSign, FiFileText, FiTrendingUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Card, CardContent, Typography } from '../../../common/components';

import './DashboardSummaryUi.css';

import type { DashboardSummaryUiProps, DashboardSummaryItem } from './Interfaces';

const iconMap = {
  policies: {
    icon: <FiShield size={22} />,
    className: 'summary-icon summary-icon-blue',
  },
  premium: {
    icon: <FiDollarSign size={22} />,
    className: 'summary-icon summary-icon-green',
  },
  claims: {
    icon: <FiFileText size={22} />,
    className: 'summary-icon summary-icon-orange',
  },
  savings: {
    icon: <FiTrendingUp size={22} />,
    className: 'summary-icon summary-icon-purple',
  },
};

const routeMap = {
  policies: '/#active-policies',
  premium: '/billing',
  claims: '/claims',
  savings: '/savings',
};

const DashboardSummaryView = ({ items }: DashboardSummaryUiProps) => {
  const navigate = useNavigate();

  return (
    <div className='dashboard-summary-grid'>
      {items.map((item: DashboardSummaryItem) => {
        const currentIcon = iconMap[item.type];

        return (
          <Card
            key={item.id}
            variant='outlined'
            className='dashboard-summary-card'
            onClick={() => navigate(routeMap[item.type])}
          >
            <CardContent className='dashboard-summary-content'>
              <div className='dashboard-summary-header'>
                <div className={currentIcon.className}>{currentIcon.icon}</div>

                <div className='dashboard-summary-info'>
                  <Typography variant='body2' className='dashboard-summary-title'>
                    {item.title}
                  </Typography>

                  <Typography variant='h3' color='primary' className='dashboard-summary-value'>
                    {item.value}
                  </Typography>

                  <Typography variant='body2' className='dashboard-summary-subtitle'>
                    {item.subtitle}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardSummaryView;
