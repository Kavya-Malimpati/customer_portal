import type { CoverageSection } from '../pages/Policy/HomeOwnerQuoteFrom/HomeownersCoverage/Interfaces';
export const homeownersCoverageConfig: CoverageSection[] = [
  {
    title: 'Property Coverage',
    fields: [
      {
        name: 'dwellingCoverage',
        label: 'Dwelling Coverage',
        options: [
          { value: '$100,000', label: '$100,000' },
          { value: '$250,000', label: '$250,000' },
          { value: '$500,000', label: '$500,000' },
          { value: '$1,000,000', label: '$1,000,000' },
        ],
      },
      {
        name: 'otherStructuresCoverage',
        label: 'Other Structures Coverage',
        options: [
          { value: '$10,000', label: '$10,000' },
          { value: '$25,000', label: '$25,000' },
          { value: '$50,000', label: '$50,000' },
          { value: '$100,000', label: '$100,000' },
        ],
      },
      {
        name: 'personalPropertyCoverage',
        label: 'Personal Property Coverage',
        options: [
          { value: '$25,000', label: '$25,000' },
          { value: '$50,000', label: '$50,000' },
          { value: '$100,000', label: '$100,000' },
          { value: '$250,000', label: '$250,000' },
        ],
      },
      {
        name: 'lossOfUseCoverage',
        label: 'Loss Of Use Coverage',
        options: [
          { value: '$10,000', label: '$10,000' },
          { value: '$25,000', label: '$25,000' },
          { value: '$50,000', label: '$50,000' },
        ],
      },
      {
        name: 'personalLiabilityCoverage',
        label: 'Personal Liability Coverage',
        options: [
          { value: '$100,000', label: '$100,000' },
          { value: '$300,000', label: '$300,000' },
          { value: '$500,000', label: '$500,000' },
          { value: '$1,000,000', label: '$1,000,000' },
        ],
      },
      {
        name: 'medicalPaymentsCoverage',
        label: 'Medical Payments Coverage',
        options: [
          { value: '$1,000', label: '$1,000' },
          { value: '$5,000', label: '$5,000' },
          { value: '$10,000', label: '$10,000' },
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
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
        ],
      },
      {
        name: 'earthquakeCoverage',
        label: 'Earthquake Coverage',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
        ],
      },
      {
        name: 'theftProtection',
        label: 'Enhanced Theft Protection',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
        ],
      },
    ],
  },
];