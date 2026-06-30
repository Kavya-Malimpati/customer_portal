import HomeownersCoverageView from './HomeownersCoverageView';

import type {
  HomeownersCoverageFormData,
  HomeownersCoverageProps,
} from './Interfaces';

const defaultFormData: HomeownersCoverageFormData = {
  dwellingCoverage: '',
  otherStructuresCoverage: '',
  personalPropertyCoverage: '',
  lossOfUseCoverage: '',
  personalLiabilityCoverage: '',
  medicalPaymentsCoverage: '',
  floodCoverage: '',
  earthquakeCoverage: '',
  theftProtection: '',
};

const STEP_KEY = 'coverage';

const HomeownersCoverage = ({
  data,
  onDataChange,
}: HomeownersCoverageProps) => {
  const currentFormData =
    (data?.[STEP_KEY] as HomeownersCoverageFormData) ??
    defaultFormData;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    onDataChange?.({
      ...currentFormData,
      [name]: value,
    });
  };

  return (
    <HomeownersCoverageView
      formData={currentFormData}
      onChange={handleChange}
    />
  );
};

export default HomeownersCoverage;