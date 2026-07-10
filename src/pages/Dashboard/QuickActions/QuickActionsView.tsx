import { FiFileText } from 'react-icons/fi';

import { Card, CardContent, Typography } from '../../../common/components';

import './QuickActionsUi.css';

import type { QuickActionsUiProps, QuickActionItem } from './Interfaces';

interface QuickActionsViewWithHandlerProps extends QuickActionsUiProps {
  onActionClick: (route: string) => void;
}

const QuickActionsView = ({ actions, onActionClick }: QuickActionsViewWithHandlerProps) => {
  return (
    <div className='quick-actions-grid'>
      {actions.map((action: QuickActionItem) => (
        <Card
          key={action.id}
          className='quick-action-card'
          onClick={() => onActionClick(action.route)}
        >
          <CardContent className='quick-action-content'>
            <div className='quick-action-icon'>
              {<FiFileText size={34} />}
            </div>

            <Typography variant='body1' className='quick-action-title'>
              {action.title}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickActionsView;
