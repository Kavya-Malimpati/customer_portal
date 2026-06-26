import {
  FiFileText,
  FiClipboard,
  FiCheckCircle,
  FiDollarSign,
} from 'react-icons/fi';

import { Card, CardContent, Typography } from '../../../common/components';

import './QuickActionsUi.css';

import type {
  QuickActionsUiProps,
  QuickActionItem,
} from './Interfaces';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'claim':
      return <FiCheckCircle size={34} />;
    case 'idcard':
      return <FiClipboard size={34} />;
    case 'quote':
      return <FiDollarSign size={34} />;
    case 'docs':
      return <FiFileText size={34} />;
    default:
      return <FiFileText size={34} />;
  }
};

const QuickActionsView = ({ actions }: QuickActionsUiProps) => {
  return (
    <div className='quick-actions-grid'>
      {actions.map((action: QuickActionItem) => (
        <Card
          key={action.id}
          className='quick-action-card'
        >
          <CardContent className='quick-action-content'>
            <div className='quick-action-icon'>
              {getIcon(action.icon)}
            </div>

            <Typography
              variant='body1'
              className='quick-action-title'
            >
              {action.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickActionsView;