import vehicleDriverConfigJson from '../../../../config/vehicleDriverConfig.json';

import { deepClone } from '../../../../scripts/utils';

import VehicleDriverDetailsView from './VehicleDriverDetailsView';

import type { FormDataType } from './Interfaces';

const vehicleDriverConfig =
  vehicleDriverConfigJson as any;

const STEP_KEY = 'vehicle';

const VehicleDriverDetails = ({
  data,
  onDataChange,
}: {
  data?: Record<string, unknown>;
  onDataChange?: (
    data: FormDataType,
  ) => void;
}) => {
  const currentFormData =
    (data?.[STEP_KEY] as FormDataType) ||
    (deepClone(
      vehicleDriverConfig,
    ) as FormDataType);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement
    >,
  ) => {
    const { id, value, type } =
      e.target;

    const fieldValue =
      type === 'checkbox'
        ? (
            e.target as HTMLInputElement
          ).checked
        : value;

    const nextFormData = {
      ...currentFormData,
      [id]: {
        ...currentFormData[id],
        value: fieldValue,
        hasError: false,
        errorMessage: '',
      },
    };

    onDataChange?.(
      nextFormData,
    );
  };

  return (
    <VehicleDriverDetailsView
      formData={currentFormData}
      onChange={handleChange}
    />
  );
};

export default VehicleDriverDetails;