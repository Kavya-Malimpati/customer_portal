import React from 'react';

import { FormInput, Select } from '../../../../common/components';

import type { RequestAssistanceData } from '../Interface';

interface RequestAssistanceStepProps {
  data: RequestAssistanceData;
  onChange: (value: RequestAssistanceData) => void;
}

const vehicleOptions = [
  {
    label: '2023 Honda City',
    value: '2023 Honda City',
  },
  {
    label: '2022 Hyundai Creta',
    value: '2022 Hyundai Creta',
  },
  {
    label: '2021 Toyota Fortuner',
    value: '2021 Toyota Fortuner',
  },
];

const RequestAssistanceStep = ({ data, onChange }: RequestAssistanceStepProps) => {
  return (
    <div className='roadside-step'>
      <div className='roadside-form-grid'>
        <FormInput
          id='current-location'
          label='Current Location'
          value={data.currentLocation || '350 5th Ave, New York, NY 10118'}
          readOnly
        />

        <FormInput
          id='manual-location'
          label='Manual Location Update'
          placeholder='Enter your current location'
          value={data.manualLocation}
          onChange={e =>
            onChange({
              ...data,
              manualLocation: e.target.value,
            })
          }
        />
      </div>

      <hr className='roadside-divider' />

      <div className='roadside-form-grid'>
        <Select
          label='Vehicle'
          options={vehicleOptions}
          value={data.selectedVehicle}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onChange({
              ...data,
              selectedVehicle: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default RequestAssistanceStep;
