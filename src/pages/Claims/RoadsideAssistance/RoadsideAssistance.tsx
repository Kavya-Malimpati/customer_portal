import { useEffect, useState } from 'react';
import RoadsideAssistanceView from './RoadsideAssistanceView';
import type { DriverProvider, RoadsideStatus } from './Interface';
import { getRoadsideProvider, getRoadsideStatus } from './RoadsideApi';

const RoadsideAssistance = () => {
  const [provider, setProvider] = useState<DriverProvider | null>(null);
  const [roadsideStatus, setRoadsideStatus] = useState<RoadsideStatus | null>(null);

  useEffect(() => {
    const fetchRoadsideData = async () => {
      const providerData = await getRoadsideProvider();
      const statusData = await getRoadsideStatus();

      setProvider(providerData);
      setRoadsideStatus(statusData);
    };

    fetchRoadsideData();
  }, []);

  const handleCancelRequest = () => {
    alert('Roadside assistance request cancelled');
  };

  if (!provider || !roadsideStatus) {
    return null;
  }

  return (
    <RoadsideAssistanceView
      provider={provider}
      roadsideStatus={roadsideStatus}
      onCancelRequest={handleCancelRequest}
    />
  );
};

export default RoadsideAssistance;