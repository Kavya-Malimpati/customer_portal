import CoverageSelectionView from './CoverageSelectionView';

import type {
  CoverageSelectionFormData,
  CoverageSelectionProps,
} from './Interfaces';

const defaultFormData: CoverageSelectionFormData = {
  liabilityLimit: '',
  collisionDeductible: '',
  comprehensiveDeductible: '',
  uninsuredMotorist: '',
  medicalCoverage: '',
  roadsideAssistance: '',
};

const STEP_KEY = 'coverage';

const CoverageSelection = ({
  data,
  onDataChange,
}: CoverageSelectionProps) => {
  const currentFormData =
    (data?.[STEP_KEY] as CoverageSelectionFormData) ??
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

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();

    onDataChange?.(currentFormData);
  };

  return (
    <CoverageSelectionView
      formData={currentFormData}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default CoverageSelection;