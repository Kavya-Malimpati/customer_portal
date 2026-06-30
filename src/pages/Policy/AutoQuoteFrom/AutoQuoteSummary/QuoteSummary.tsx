import QuoteSummaryView from './QuoteSummaryView';

import type {
  QuoteSummaryData,
  VehicleData,
  CoverageData,
  PremiumData,
} from './Interfaces';

import type { StepContentProps } from '../../../../common/components/MultiStepForm';

const defaultData: QuoteSummaryData = {
  vehicle: {
    vin: { value: '' },
    year: { value: '' },
    make: { value: '' },
    model: { value: '' },
    usageType: { value: '' },
    annualMileage: { value: '' },
    driverFirstName: { value: '' },
    driverLastName: { value: '' },
    licenseNumber: { value: '' },
    yearsLicensed: { value: '' },
    maritalStatus: { value: '' },
  },
  coverage: {
    liabilityLimit: '',
    collisionDeductible: '',
    comprehensiveDeductible: '',
    uninsuredMotorist: '',
    medicalCoverage: '',
    roadsideAssistance: '',
  },
  premium: {
    monthlyPremium: 0,
    annualPremium: 0,
    liabilityPremium: 0,
    collisionPremium: 0,
    optionalPremium: 0,
    validUntil: '',
  },
};

const QuoteSummary = ({ data }: StepContentProps) => {
  const summaryData: QuoteSummaryData = {
    vehicle: (data.vehicle as VehicleData) ?? defaultData.vehicle,
    coverage: (data.coverage as CoverageData) ?? defaultData.coverage,
    premium: (data.premium as PremiumData) ?? defaultData.premium,
  };

  return <QuoteSummaryView data={summaryData} />;
};

export default QuoteSummary;