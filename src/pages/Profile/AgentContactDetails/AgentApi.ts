import type { Agent, AgentOfficeDetails } from './Interface';

export const fetchAgent = async (): Promise<Agent> => {

  return {
    name: 'Anderson',
    agency: ' Insurance Agency',
    phone: '+1-752-999-8001',
    email: 'Anderson@gmail.com',
  };
};

export const fetchOfficeDetails = async (): Promise<AgentOfficeDetails> => {

  return {
    officeName: ' Office',
    addressLine1: 'Nile Building ',
    addressLine2: ' Embassy Park Pune',
    city: 'Maharashtra',
    state: 'MH',
    zip: '411028',
    officeHours: {
      mondayToFriday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 2:00 PM',
      sunday: 'Closed',
    },
    claimSupport: {
      phone: '+91-8000-123456',
      emergencyInfo: 'Call direct line in emergency.',
    },
  };
};