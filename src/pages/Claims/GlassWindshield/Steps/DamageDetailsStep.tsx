import { FormInput, RadioGroup, Typography } from '../../../../common/components';

import type { DamageDetailsData } from '../Interface';

interface DamageDetailsStepProps {
  data: DamageDetailsData;
  onChange: (value: DamageDetailsData) => void;
}

const glassOptions = [
  { label: 'Windshield', value: 'Windshield' },
  { label: 'Side Window', value: 'Side Window' },
  { label: 'Rear Window', value: 'Rear Window' },
  { label: 'Sunroof', value: 'Sunroof' },
  { label: 'Other Glass', value: 'Other Glass' },
];

const damageOptions = [
  { label: 'Chip', value: 'Chip' },
  { label: 'Crack', value: 'Crack' },
  { label: 'Shattered', value: 'Shattered' },
];

const DamageDetailsStep = ({ data, onChange }: DamageDetailsStepProps) => {
  return (
    <div className='glass-step'>
      <div className='glass-form-grid'>
        <div>
          <Typography variant='body1' className='glass-section-title'>
            Glass Type
          </Typography>

          <RadioGroup label='' aria-orientation='vertical'>
            <div className='glass-radio-grid'>
              {glassOptions.map(option => (
                <label key={option.value} className='glass-radio-option'>
                  <input
                    type='radio'
                    name='glassType'
                    value={option.value}
                    checked={data.glassType === option.value}
                    onChange={e =>
                      onChange({
                        ...data,
                        glassType: e.target.value,
                      })
                    }
                  />

                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </RadioGroup>
        </div>

        <div>
          <Typography variant='body1' className='glass-section-title'>
            Damage Type
          </Typography>

          <RadioGroup label='' aria-orientation='vertical'>
            <div className='damage-radio-grid'>
              {damageOptions.map(option => (
                <label key={option.value} className='glass-radio-option'>
                  <input
                    type='radio'
                    name='damageType'
                    value={option.value}
                    checked={data.damageType === option.value}
                    onChange={e =>
                      onChange({
                        ...data,
                        damageType: e.target.value,
                      })
                    }
                  />

                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>

      <hr className='glass-divider' />

      <div className='glass-form-grid'>
        <FormInput
          type='date'
          label='Date of Damage'
          value={data.damageDate}
          onChange={e =>
            onChange({
              ...data,
              damageDate: e.target.value,
            })
          }
        />

        <FormInput
          label='Incident Location'
          placeholder='Enter incident location'
          value={data.incidentLocation}
          onChange={e =>
            onChange({
              ...data,
              incidentLocation: e.target.value,
            })
          }
        />
      </div>

      <hr className='glass-divider' />

      <div className='glass-description-box'>
        <Typography variant='body1' className='glass-description-label'>
          Brief Description
        </Typography>

        <textarea
          className='glass-textarea'
          rows={5}
          placeholder='Describe what happened...'
          value={data.description}
          onChange={e =>
            onChange({
              ...data,
              description: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
};

export default DamageDetailsStep;
