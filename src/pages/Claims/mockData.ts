import type { Claim } from './types';

export const autoClaims: Claim[] = [
  {
    id: '1',

    policyType: 'auto',

    title: '2023 Toyota Camry',

    vehicle: '2023 Toyota Camry',

    claimNumber: 'PC-9902',

    incidentType: 'Rear End Collision',

    incidentDate: '12 Jun 2026',

    status: 'Inspection Scheduled',

    timeline: [
      {
        label: 'Claim Filed',
        status: 'completed',
        date: '12 Jun',
      },
      {
        label: 'Adjuster Assigned',
        status: 'completed',
        date: '13 Jun',
      },
      {
        label: 'Inspection',
        status: 'current',
      },
      {
        label: 'Estimate',
        status: 'pending',
      },
      {
        label: 'Settlement',
        status: 'pending',
      },
    ],

    inspection: {
      status: 'Scheduled',
      date: '18 Jun 2026',
      time: '11:00 AM',
      adjuster: 'John Smith',
    },

    settlement: {
      estimateStatus: 'Pending',
      settlementStatus: 'Pending',
      paymentStatus: 'Not Released',
    },

    adjusterMessage: {
      adjuster: 'John Smith',
      date: '15 Jun',

      message: 'Inspection has been scheduled. Repair estimate will be prepared after inspection.',
    },
  },

  {
    id: '2',

    policyType: 'auto',

    title: 'Honda Civic',

    vehicle: 'Honda Civic',

    claimNumber: 'PC-9903',

    incidentType: 'Glass Damage',

    incidentDate: '04 Jun 2026',

    status: 'Estimate Pending',

    timeline: [
      {
        label: 'Claim Filed',
        status: 'completed',
        date: '04 Jun',
      },
      {
        label: 'Adjuster Assigned',
        status: 'completed',
        date: '05 Jun',
      },
      {
        label: 'Inspection',
        status: 'completed',
        date: '08 Jun',
      },
      {
        label: 'Estimate',
        status: 'current',
      },
      {
        label: 'Settlement',
        status: 'pending',
      },
    ],

    inspection: {
      status: 'Completed',

      date: '08 Jun',

      time: '9:00 AM',

      adjuster: 'Michael Brown',
    },

    settlement: {
      estimateStatus: 'In Progress',

      settlementStatus: 'Pending',

      paymentStatus: 'Pending',
    },

    adjusterMessage: {
      adjuster: 'Michael Brown',

      date: '08 Jun',

      message:
        'Inspection completed successfully. Your repair estimate is currently being prepared.',
    },
  },
];

export const homeClaims: Claim[] = [
  {
    id: '3',

    policyType: 'home',

    title: '142 Willow Creek',

    address: '142 Willow Creek Drive',

    claimNumber: 'PC-5544',

    incidentType: 'Storm Damage',

    incidentDate: '10 May 2026',

    status: 'Inspection Scheduled',

    timeline: [
      {
        label: 'Claim Filed',
        status: 'completed',
        date: '10 May',
      },
      {
        label: 'Adjuster Assigned',
        status: 'completed',
        date: '11 May',
      },
      {
        label: 'Inspection',
        status: 'current',
      },
      {
        label: 'Estimate',
        status: 'pending',
      },
      {
        label: 'Settlement',
        status: 'pending',
      },
    ],

    inspection: {
      status: 'Scheduled',

      date: '15 May',

      time: '2:00 PM',

      adjuster: 'Sarah Lee',
    },

    settlement: {
      estimateStatus: 'Pending',

      settlementStatus: 'Pending',

      paymentStatus: 'Pending',
    },

    adjusterMessage: {
      adjuster: 'Sarah Lee',

      date: '11 May',

      message:
        'Roof inspection has been scheduled. Our adjuster will assess the storm damage and prepare an estimate.',
    },
  },
];
