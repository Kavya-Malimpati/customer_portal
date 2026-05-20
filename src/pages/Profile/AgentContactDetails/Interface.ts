export interface Agent {
  name: string;
  agency: string;
  phone: string;
  email: string;
}
export interface AgentContactCardProps {
  agent: Agent;
  onMessageClick: () => void;
}
