export const autoCoverageConfig = [
  {
    title: 'Coverage Options',
    fields: [
      {
        name: 'liabilityCoverage',
        label: 'Liability Coverage',
        options: [
          {
            label: 'Bodily Injury Liability',
            value: 'BI',
          },
          {
            label: 'Property Damage Liability',
            value: 'PD',
          },
          {
            label: 'Combined Single Limit',
            value: 'CSL',
          },
          {
            label: 'Split Limit Liability',
            value: 'SPLIT',
          },
        ],
      },
      {
        name: 'collisionDeductible',
        label: 'Collision Deductible',
        options: [
          {
            label: 'Standard Deductible',
            value: 'Standard',
          },
          {
            label: 'Low Deductible',
            value: 'Low',
          },
          {
            label: 'High Deductible',
            value: 'High',
          },
          {
            label: 'Vanishing Deductible',
            value: 'Vanishing',
          },
        ],
      },
      {
        name: 'comprehensiveDeductible',
        label: 'Comprehensive Deductible',
        options: [
          {
            label: 'Standard Comprehensive',
            value: 'Standard',
          },
          {
            label: 'Glass Coverage Included',
            value: 'Glass',
          },
          {
            label: 'Glass Coverage Excluded',
            value: 'NoGlass',
          },
          {
            label: 'High Deductible',
            value: 'High',
          },
        ],
      },
      {
        name: 'uninsuredMotorist',
        label: 'Uninsured Motorist',
        options: [
          {
            label: 'Bodily Injury Only',
            value: 'UMBI',
          },
          {
            label: 'Property Damage Only',
            value: 'UMPD',
          },
          {
            label: 'Bodily Injury & Property Damage',
            value: 'FullUM',
          },
          {
            label: 'Underinsured Motorist Coverage',
            value: 'UIM',
          },
        ],
      },
      {
        name: 'medicalCoverage',
        label: 'Medical Coverage',
        options: [
          {
            label: 'Medical Payments (MedPay)',
            value: 'MedPay',
          },
          {
            label: 'Personal Injury Protection (PIP)',
            value: 'PIP',
          },
          {
            label: 'Enhanced Medical Coverage',
            value: 'Enhanced',
          },
          {
            label: 'No Medical Coverage',
            value: 'None',
          },
        ],
      },
      {
        name: 'roadsideAssistance',
        label: 'Roadside Assistance',
        options: [
          {
            label: 'Basic Roadside Assistance',
            value: 'Basic',
          },
          {
            label: 'Standard Roadside Assistance',
            value: 'Standard',
          },
          {
            label: 'Premium Roadside Assistance',
            value: 'Premium',
          },
          {
            label: 'Towing Only',
            value: 'Towing',
          },
          {
            label: 'Roadside Assistance Not Included',
            value: 'None',
          },
        ],
      },
      {
        name: 'glassCoverage',
        label: 'Glass Coverage',
        options: [
          {
            label: 'Full Glass Coverage',
            value: 'FullGlass',
          },
          {
            label: 'Windshield Repair',
            value: 'WindshieldRepair',
          },
          {
            label: 'Windshield Replacement',
            value: 'WindshieldReplacement',
          },
          {
            label: 'Side Window Glass',
            value: 'SideWindow',
          },
          {
            label: 'Rear Window Glass',
            value: 'RearWindow',
          },
          {
            label: 'Sunroof/Moonroof Glass',
            value: 'Sunroof',
          },
          {
            label: 'OEM Glass Replacement',
            value: 'OEM',
          },
          {
            label: 'Mobile Glass Repair',
            value: 'MobileRepair',
          },
          {
            label: 'ADAS Calibration',
            value: 'ADAS',
          },
          {
            label: 'Glass Deductible Waiver',
            value: 'DeductibleWaiver',
          },
        ],
      },
    ],
  },
];
