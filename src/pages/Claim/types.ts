export interface TimelineStep {
  label: string;
  status: 'completed' | 'current' | 'pending';
  date?: string;
}

export interface Inspection {
  status: string;
  date: string;
  time: string;
  adjuster: string;
}

export interface Settlement {
  estimateStatus: string;
  settlementStatus: string;
  paymentStatus: string;
}

export interface AdjusterMessage {
  adjuster: string;
  date: string;
  message: string;
}

export interface Claim {
  id: string;
  policyType: 'auto' | 'home';

  title: string;

  claimNumber: string;

  incidentType: string;

  incidentDate: string;

  status: string;

  address?: string;

  vehicle?: string;

  timeline: TimelineStep[];

  inspection: Inspection;

  settlement: Settlement;

  adjusterMessage: AdjusterMessage;
}