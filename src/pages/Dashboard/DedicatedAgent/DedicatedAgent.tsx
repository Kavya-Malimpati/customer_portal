import { useEffect, useState } from 'react';

import DedicatedAgentView from './DedicatedAgentView';
import { getDedicatedAgentApi } from './DedicatedAgentApi';

import type { AgentData } from './Interfaces';

const DedicatedAgent = () => {
  const [agent, setAgent] = useState<AgentData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDedicatedAgentApi().then(data => {
      setAgent(data);
      setLoading(false);
    });
  }, []);

  if (loading || !agent) {
    return null;
  }

  return <DedicatedAgentView agent={agent} />;
};

export default DedicatedAgent;