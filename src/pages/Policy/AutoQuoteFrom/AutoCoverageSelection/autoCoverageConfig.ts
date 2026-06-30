export const autoCoverageConfig = [
  {
    title: 'Coverage Options',
    fields: [
      {
        name: 'liabilityLimit',
        label: 'Liability Coverage',
        options: [
          { value: '', label: 'Select' },
          { value: '25/50/25', label: '25/50/25' },
          { value: '50/100/50', label: '50/100/50' },
          { value: '100/300/100', label: '100/300/100' },
          { value: '250/500/250', label: '250/500/250' },
        ],
      },
      {
        name: 'collisionDeductible',
        label: 'Collision Deductible',
        options: [
          { value: '', label: 'Select' },
          { value: '$250', label: '$250' },
          { value: '$500', label: '$500' },
          { value: '$1000', label: '$1000' },
        ],
      },
      {
        name: 'comprehensiveDeductible',
        label: 'Comprehensive Deductible',
        options: [
          { value: '', label: 'Select' },
          { value: '$250', label: '$250' },
          { value: '$500', label: '$500' },
          { value: '$1000', label: '$1000' },
        ],
      },
      {
        name: 'uninsuredMotorist',
        label: 'Uninsured Motorist',
        options: [
          { value: '', label: 'Select' },
          { value: '50/100', label: '50/100' },
          { value: '100/300', label: '100/300' },
        ],
      },
      {
        name: 'medicalCoverage',
        label: 'Medical Coverage',
        options: [
          { value: '', label: 'Select' },
          { value: '$5,000', label: '$5,000' },
          { value: '$10,000', label: '$10,000' },
          { value: '$25,000', label: '$25,000' },
        ],
      },
      {
        name: 'roadsideAssistance',
        label: 'Roadside Assistance',
        options: [
          { value: '', label: 'Select' },
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' },
        ],
      },
    ],
  },
];