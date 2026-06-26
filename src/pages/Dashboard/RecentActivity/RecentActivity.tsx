import { useEffect, useState } from 'react';

import RecentActivityView from './RecentActivityView';
import { getRecentActivityApi } from './RecentActivityApi';

import type { ActivityItem } from './Interfaces';

const RecentActivity = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecentActivityApi().then(data => {
      setActivities(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return null;
  }

  return <RecentActivityView activities={activities} />;
};

export default RecentActivity;