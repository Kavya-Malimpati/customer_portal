import { Card, CardContent, RadioGroup, Select, Typography } from '../../../../common/components';

import type { PolicyLossTypeViewProps } from './interfaces';

import './PolicyLossType.css';

const PolicyLossTypeView = ({
  formData,
  claimType,
  coverageNote,
  onChange,
}: PolicyLossTypeViewProps) => {
  return (
    <Card variant='outlined' className='policy-container'>
      <CardContent>
        <div className='policy-section'>
          <Typography variant='h3' color='primary'>
            Claim Type
          </Typography>

          <Typography variant='body1'>
            {claimType === 'auto' ? 'Auto Insurance' : 'Home Insurance'}
          </Typography>
        </div>

        <hr className='section-divider' />

        <div className='policy-section'>
          <Typography variant='body1' className='section-title'>
            Select Policy
          </Typography>

          <Select {...formData.policy} onChange={onChange} />
        </div>

        <hr className='section-divider' />

        <div className='policy-section'>
          <Typography variant='body1' className='section-title'>
            Loss Type
          </Typography>

          <RadioGroup id='lossTypeGroup' aria-orientation='horizontal'>
            <div className='loss-type-grid'>
              {formData.lossType.options.map(option => (
                <label key={option.value} className='loss-type-option'>
                  <input
                    id='lossType'
                    name='lossType'
                    type='radio'
                    value={option.value}
                    checked={formData.lossType.value === option.value}
                    onChange={onChange}
                  />

                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </RadioGroup>
        </div>

        <hr className='section-divider' />

        <div className='policy-section'>
          <Typography variant='body1' className='section-title'>
            Coverage Note
          </Typography>

          <Typography variant='body2'>{coverageNote}</Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default PolicyLossTypeView;
