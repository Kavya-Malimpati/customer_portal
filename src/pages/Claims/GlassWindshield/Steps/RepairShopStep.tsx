import React from 'react';
import { FormInput, RadioGroup, Select } from '../../../../common/components';

import type { RepairShopData } from '../Interface';

interface RepairShopStepProps {
  data: RepairShopData;
  onChange: (value: RepairShopData) => void;
}

const repairShops = [
  {
    label: 'Safelite AutoGlass',
    value: 'Safelite AutoGlass',
  },
  {
    label: 'Glass Doctor',
    value: 'Glass Doctor',
  },
  {
    label: 'Auto Glass Now',
    value: 'Auto Glass Now',
  },
  {
    label: 'Speedy Glass',
    value: 'Speedy Glass',
  },
];

const RepairShopStep = ({ data, onChange }: RepairShopStepProps) => {
  return (
    <div className='glass-step'>
      <div className='glass-form-grid'>
        <FormInput
          label='Search Nearby Repair Shops'
          placeholder='Enter your city or ZIP code'
          value={data.searchLocation}
          onChange={e =>
            onChange({
              ...data,
              searchLocation: e.target.value,
            })
          }
        />

        <Select
          label='Preferred Repair Shop'
          options={repairShops}
          value={data.selectedShop}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            onChange({
              ...data,
              selectedShop: e.target.value,
            })
          }
        />

        <FormInput
          type='date'
          label='Appointment Date'
          value={data.appointmentDate}
          onChange={e =>
            onChange({
              ...data,
              appointmentDate: e.target.value,
            })
          }
        />

        <RadioGroup label='Mobile Repair Available' aria-orientation='horizontal'>
          <label>
            <input
              type='radio'
              name='mobileRepair'
              value='true'
              checked={data.mobileRepair === true}
              onChange={() =>
                onChange({
                  ...data,
                  mobileRepair: true,
                })
              }
            />
            Yes
          </label>

          <label>
            <input
              type='radio'
              name='mobileRepair'
              value='false'
              checked={data.mobileRepair === false}
              onChange={() =>
                onChange({
                  ...data,
                  mobileRepair: false,
                })
              }
            />
            No
          </label>
        </RadioGroup>
      </div>
    </div>
  );
};

export default RepairShopStep;
