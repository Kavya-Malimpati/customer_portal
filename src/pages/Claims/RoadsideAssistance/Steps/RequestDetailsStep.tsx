import { FormInput, Typography } from '../../../../common/components';

import type { RequestDetailsData } from '../Interface';

interface RequestDetailsStepProps {
  data: RequestDetailsData;
  onChange: (value: RequestDetailsData) => void;
}

const RequestDetailsStep = ({ data, onChange }: RequestDetailsStepProps) => {
  return (
    <div className='roadside-step'>
      <div className='roadside-form-grid'>
        <FormInput
          id='contact-number'
          type='tel'
          label='Contact Number'
          placeholder='Enter your contact number'
          value={data.contactNumber}
          onChange={e =>
            onChange({
              ...data,
              contactNumber: e.target.value,
            })
          }
        />

        <FormInput
          id='vehicle-condition'
          label='Vehicle Condition'
          placeholder="Example: Won't start, Flat tire..."
          value={data.vehicleCondition}
          onChange={e =>
            onChange({
              ...data,
              vehicleCondition: e.target.value,
            })
          }
        />
      </div>

      <hr className='roadside-divider' />

      <div className='roadside-notes-section'>
        <Typography variant='body1' className='roadside-notes-label'>
          Additional Notes
        </Typography>

        <textarea
          className='roadside-textarea'
          rows={5}
          placeholder='Provide any additional information that may help the service provider...'
          value={data.additionalNotes}
          onChange={e =>
            onChange({
              ...data,
              additionalNotes: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default RequestDetailsStep;
