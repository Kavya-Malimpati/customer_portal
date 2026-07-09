import type { BundleData } from './Interface';

export const bundleData: BundleData = {
  autoPolicy: {
    id: '1',
    type: 'auto',
    title: 'Auto Insurance',
    policyNumber: 'PC-9902',
    monthlyPremium: 120,
  },

  homePolicy: {
    id: '2',
    type: 'home',
    title: 'Homeowners Insurance',
    policyNumber: 'PC-5544',
    monthlyPremium: 95,
  },

  benefits: [
    {
      id: '1',
      title: 'Save on Premium',
      description: 'Get a multi-policy discount.',
      icon: 'discount',
    },
    {
      id: '2',
      title: 'One Renewal Date',
      description: 'Renew all your policies together.',
      icon: 'calendar',
    },
    {
      id: '3',
      title: 'One Payment',
      description: 'Pay all your policies with one payment.',
      icon: 'payment',
    },
    {
      id: '4',
      title: 'Easy Management',
      description: 'Manage everything in one place.',
      icon: 'manage',
    },
  ],

  savings: {
    totalPremium: 215,
    discountPercentage: 15,
    discountAmount: 25,
    estimatedPremium: 190,
    monthlySavings: 25,
    yearlySavings: 300,
  },
};