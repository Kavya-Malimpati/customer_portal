import type { Agent } from './Interface';
export async function fetchAgentDetails(): Promise<Agent> {
 
  await new Promise(res => setTimeout(res, 400));
  return {
    name: ' Sharma',
    agency: 'ValueMomentum Insurance Agency',
    phone: '+91-7522-936852',
    email: 'sharma@valuemomentum.com',
  };
}
