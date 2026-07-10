import type { CoverageSection } from '../pages/Policy/HomeOwnerQuoteFrom/HomeownersCoverage/Interfaces';

export const homeownersCoverageConfig: CoverageSection[] = [
  {
    title: 'Property Coverage',
    fields: [
      {
        name: 'dwellingCoverage',
        label: 'Dwelling Coverage',
        options: [
          { label: 'Actual Cash Value', value: 'ACV' },
          { label: 'Replacement Cost', value: 'RC' },
          { label: 'Extended Replacement Cost', value: 'ERC' },
          { label: 'Guaranteed Replacement Cost', value: 'GRC' },
        ],
      },
      {
        name: 'otherStructuresCoverage',
        label: 'Other Structures Coverage',
        options: [
          { label: 'Detached Garage', value: 'Garage' },
          { label: 'Storage Shed', value: 'Shed' },
          { label: 'Fence & Gates', value: 'Fence' },
          { label: 'Gazebo', value: 'Gazebo' },
          { label: 'Guest House', value: 'GuestHouse' },
          { label: 'Swimming Pool', value: 'Pool' },
        ],
      },
      {
        name: 'personalPropertyCoverage',
        label: 'Personal Property Coverage',
        options: [
          { label: 'Actual Cash Value', value: 'ACV' },
          { label: 'Replacement Cost', value: 'RC' },
          { label: 'Scheduled Personal Property', value: 'SPP' },
          { label: 'High-Value Property Coverage', value: 'HVP' },
        ],
      },
      {
        name: 'lossOfUseCoverage',
        label: 'Loss of Use Coverage',
        options: [
          {
            label: 'Additional Living Expenses (ALE)',
            value: 'ALE',
          },
          {
            label: 'Fair Rental Value',
            value: 'FRV',
          },
          {
            label: 'Civil Authority Coverage',
            value: 'CAC',
          },
        ],
      },
      {
        name: 'personalLiabilityCoverage',
        label: 'Personal Liability Coverage',
        options: [
          {
            label: 'Basic Personal Liability',
            value: 'Basic',
          },
          {
            label: 'Enhanced Personal Liability',
            value: 'Enhanced',
          },
          {
            label: 'Personal Umbrella Liability',
            value: 'Umbrella',
          },
        ],
      },
      {
        name: 'medicalPaymentsCoverage',
        label: 'Medical Payments Coverage',
        options: [
          {
            label: 'Standard Medical Payments',
            value: 'Standard',
          },
          {
            label: 'Enhanced Medical Payments',
            value: 'Enhanced',
          },
          {
            label: 'Guest Medical Protection',
            value: 'Guest',
          },
        ],
      },
    ],
  },
  {
    title: 'Optional Add-ons',
    fields: [
      {
        name: 'floodCoverage',
        label: 'Flood Coverage',
        options: [
          {
            label: 'No Flood Coverage',
            value: 'None',
          },
          {
            label: 'Building Only',
            value: 'Building',
          },
          {
            label: 'Contents Only',
            value: 'Contents',
          },
          {
            label: 'Building & Contents',
            value: 'Full',
          },
        ],
      },
      {
        name: 'earthquakeCoverage',
        label: 'Earthquake Coverage',
        options: [
          {
            label: 'No Earthquake Coverage',
            value: 'None',
          },
          {
            label: 'Standard Earthquake Protection',
            value: 'Standard',
          },
          {
            label: 'Enhanced Earthquake Protection',
            value: 'Enhanced',
          },
          {
            label: 'Comprehensive Earthquake Protection',
            value: 'Comprehensive',
          },
        ],
      },
      {
        name: 'theftProtection',
        label: 'Enhanced Theft Protection',
        options: [
          {
            label: 'No Theft Protection',
            value: 'None',
          },
          {
            label: 'Standard Theft Protection',
            value: 'Standard',
          },
          {
            label: 'Identity Theft Protection',
            value: 'Identity',
          },
          {
            label: 'High-Value Property Theft Protection',
            value: 'HighValue',
          },
          {
            label: 'Premium Theft Protection',
            value: 'Premium',
          },
        ],
      },
    ],
  },
];