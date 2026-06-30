import type { AgentData } from './Interfaces';

export const getDedicatedAgentApi = async (): Promise<AgentData> => {
  await new Promise(res => setTimeout(res, 500));

  return {
    initials: 'A',
    name: 'Anderson',
    title: 'Senior Principal Agent',
  };
};