import { useEffect, useState } from 'react';

import QuickActionsView from './QuickActionsView';
import { getQuickActionsApi } from './QuickActionsApi';

import type { QuickActionItem } from './Interfaces';

const QuickActions = () => {
  const [actions, setActions] = useState<QuickActionItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuickActionsApi().then(data => {
      setActions(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return <QuickActionsView actions={actions} />;
};

export default QuickActions;