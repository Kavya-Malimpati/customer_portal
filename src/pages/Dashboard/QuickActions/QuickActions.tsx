import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QuickActionsView from './QuickActionsView';
import { getQuickActionsApi } from './QuickActionsApi';

import type { QuickActionItem } from './Interfaces';

const QuickActions = () => {
  const navigate = useNavigate();
  const [actions, setActions] = useState<QuickActionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuickActionsApi().then(data => {
      setActions(data);
      setLoading(false);
    });
  }, []);

  const handleActionClick = (route: string) => {
    navigate(route);
  };

  if (loading) {
    return null;
  }

  return <QuickActionsView actions={actions} onActionClick={handleActionClick} />;
};

export default QuickActions;
