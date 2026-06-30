import {
  Card,
  Typography,
  FormInput,
  Select,
  Checkbox,
  TextField,
} from '../../../../common/components';

import type { VehicleDriverDetailsViewProps } from './Interfaces';

import './VehicleDriverDetails.css';

const VehicleDriverDetailsView = ({
  formData,
  onChange,
}: VehicleDriverDetailsViewProps) => {
  return (
    <div className="vehicle-driver-page">
      <Card
        variant="elevation"
        className="vehicle-driver-card"
      >
        <form id="vehicle-driver-form">
          <div className="section">
            <div className="full-width">
              <TextField
                {...formData.garagingAddress}
                onChange={onChange}
              />
            </div>

            <div className="form-grid">
              <FormInput
                {...formData.vin}
                onChange={onChange}
              />
               <FormInput
                {...formData.year}
                onChange={onChange}
              />

              <Select
                {...formData.usageType}
                onChange={onChange}
              />
               <Select
                {...formData.ownershipStatus}
                onChange={onChange}
              />
             

              <FormInput
                {...formData.make}
                onChange={onChange}
              />

              <FormInput
                {...formData.model}
                onChange={onChange}
              />

              <FormInput
                {...formData.trim}
                onChange={onChange}
              />

              <FormInput
                {...formData.annualMileage}
                onChange={onChange}
              />
            </div>
          </div>

          <div className="section">
            <Typography
              variant="h3"
              color="primary"
              className="section-title"
            >
              Driver Information
            </Typography>

            <div className="form-grid">
              <FormInput
                {...formData.driverFirstName}
                onChange={onChange}
              />

              <FormInput
                {...formData.driverLastName}
                onChange={onChange}
              />

              <FormInput
                {...formData.driverDob}
                onChange={onChange}
              />

              <FormInput
                {...formData.licenseNumber}
                onChange={onChange}
              />

              <Select
                {...formData.licenseState}
                onChange={onChange}
              />
               <Select
                {...formData.maritalStatus}
                onChange={onChange}
              />

              <FormInput
                {...formData.yearsLicensed}
                onChange={onChange}
              />

             
            </div>
          </div>

          <div className="section">
            <Typography
              variant="h3"
              color="primary"
              className="section-title"
            >
              Driver History
            </Typography>

            <div className="checkbox-grid">
              <Checkbox
                id="priorClaims"
                label="Prior Claims"
                checked={Boolean(formData.priorClaims.value)}
                onChange={onChange}
              />

              <Checkbox
                id="priorViolations"
                label="Prior Violations"
                checked={Boolean(formData.priorViolations.value)}
                onChange={onChange}
              />
            </div>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default VehicleDriverDetailsView;