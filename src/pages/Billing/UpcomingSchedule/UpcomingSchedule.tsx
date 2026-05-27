import { useEffect, useState } from 'react';
import UpcomingScheduleView from './UpcomingScheduleView';
import { getUpcomingScheduleApi } from './UpcomingScheduleApi';

import type { InstallmentData } from './Interfaces';

const UpcomingSchedule = () => {
  const [installments, setInstallments] = useState<InstallmentData[]>([]);

  useEffect(() => {
    getUpcomingScheduleApi().then(setInstallments);
  }, []);

  if (!installments.length) return null;

  return <UpcomingScheduleView installments={installments} />;
};

export default UpcomingSchedule;
