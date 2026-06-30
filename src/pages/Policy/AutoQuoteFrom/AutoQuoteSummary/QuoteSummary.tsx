import QuoteSummaryView from './QuoteSummaryView';

import type {
  QuoteSummaryData,
  QuoteSummaryProps,
} from './Interfaces';

const defaultData: QuoteSummaryData = {
  vehicle: {
    vin: { value: '0' },
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

const QuoteSummary = ({
  data,
}: QuoteSummaryProps) => {
  return (
    <QuoteSummaryView
      data={data ?? defaultData}
    />
  );
};

export default QuoteSummary;