import { Card, CardContent, FormInput, Select, TextField } from '../../../../common/components';

import type { IncidentDetailsViewProps } from './interfaces';

import './IncidentDetails.css';

const IncidentDetailsView = ({ formData, claimType, onChange }: IncidentDetailsViewProps) => {
  return (
    <Card variant='outlined' className='incident-container'>
      <CardContent>
        <div className='incident-section'>
          <div className='incident-grid'>
            <FormInput {...formData.dateOfLoss} onChange={onChange} />

            <FormInput {...formData.timeOfLoss} onChange={onChange} />
          </div>
        </div>

        <hr className='section-divider' />

        <div className='incident-section'>
          <FormInput {...formData.location} onChange={onChange} />
        </div>

        <hr className='section-divider' />

        {claimType === 'auto' && (
          <>
            <div className='incident-section'>
              <div className='incident-grid'>
                <Select {...formData.weatherConditions} onChange={onChange} />

                <Select {...formData.roadConditions} onChange={onChange} />
              </div>
            </div>

            <hr className='section-divider' />
          </>
        )}

        <div className='incident-section'>
          <TextField {...formData.description} onChange={onChange} />
        </div>
      </CardContent>
    </Card>
  );
};

export default IncidentDetailsView;
