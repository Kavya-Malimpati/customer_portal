import type { GlassClaimStep, GlassClaimFormData } from './Interface';

export const glassClaimSteps: GlassClaimStep[] = [
  {
    id: 1,
    title: 'Verify Policy',
  },
  {
    id: 2,
    title: 'Damage Details',
  },
  {
    id: 3,
    title: 'Upload Evidence',
  },
  {
    id: 4,
    title: 'Repair Shop',
  },
  {
    id: 5,
    title: 'Review & Submit',
  },
];

export const initialGlassClaimData: GlassClaimFormData = {
  verifyPolicy: {
    policyNumber: 'AUTO-2026-45981',
    vehicle: '2023 Honda City',
    coverageEligibility: 'Covered',
    deductible: '$0',
  },

  damageDetails: {
    glassType: '',
    damageType: '',
    damageDate: '',
    incidentLocation: '',
    description: '',
  },

  uploadEvidence: {
    photos: [],
    videos: [],
  },

  repairShop: {
    searchLocation: '',
    selectedShop: '',
    appointmentDate: '',
    mobileRepair: false,
  },
};

export const glassRepairInfo = {
  title: 'Glass & Windshield',
  badge: '$0 Deductible Eligible',
  description:
    'Quick 2-minute entry for chips or cracks. Schedule a repair or replacement.',
  benefit: 'Direct billing to repair shop',
};