export interface Agent {
  name: string;
  agency: string;
  phone: string;
  email: string;
}

export interface OfficeHours {
  mondayToFriday: string;
  saturday: string;
  sunday: string;
}

export interface ClaimSupport {
  phone: string;
  emergencyInfo: string;
}

export interface AgentOfficeDetails {
  officeName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  officeHours: OfficeHours;
  claimSupport: ClaimSupport;
}