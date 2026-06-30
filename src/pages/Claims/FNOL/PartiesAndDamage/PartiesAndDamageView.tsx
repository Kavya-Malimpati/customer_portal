import {
  Card,
  CardContent,
  FormInput,
  Select,
  TextField,
  Typography,
} from '../../../../common/components';

import type { PartiesAndDamageViewProps } from './interfaces';

import './PartiesAndDamage.css';

const PartiesAndDamageView = ({ formData, claimType, onChange }: PartiesAndDamageViewProps) => {
  return (
    <Card variant='outlined' className='parties-container'>
      <CardContent>
        {claimType === 'auto' ? (
          <>
            <div className='parties-section'>
              <div className='parties-grid'>
                <FormInput {...formData.otherDriverName} onChange={onChange} />

                <FormInput {...formData.otherDriverContact} onChange={onChange} />

                <FormInput {...formData.insuranceCompany} onChange={onChange} />

                <FormInput {...formData.vehicleInformation} onChange={onChange} />
              </div>
            </div>

            <hr className='section-divider' />

            <div className='parties-section'>
              <TextField {...formData.witnessInformation} onChange={onChange} />
            </div>

            <hr className='section-divider' />

            <div className='parties-section'>
              <div className='parties-grid'>
                <Select {...formData.injuries} onChange={onChange} />

                <FormInput {...formData.policeReportNumber} onChange={onChange} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='parties-section'>
              <Typography variant='body1' color='primary' className='section-title'>
                Property Damage
              </Typography>

              <div className='parties-grid'>
                <FormInput {...formData.damagedArea} onChange={onChange} />

                <Select {...formData.propertyHabitable} onChange={onChange} />
              </div>

              <div className='full-width'>
                <TextField {...formData.damagedProperty} onChange={onChange} />
              </div>
            </div>

            <hr className='section-divider' />

            <div className='parties-section'>
              <Typography variant='body1' color='primary' className='section-title'>
                Emergency Information
              </Typography>

              <div className='parties-grid'>
                <Select {...formData.emergencyServices} onChange={onChange} />

                <Select {...formData.thirdPartyInvolved} onChange={onChange} />

                <FormInput {...formData.firePoliceReportNumber} onChange={onChange} />
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default PartiesAndDamageView;
