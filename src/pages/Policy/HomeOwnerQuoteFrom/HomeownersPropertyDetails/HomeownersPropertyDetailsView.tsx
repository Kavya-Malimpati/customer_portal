import {
  Card,
  Typography,
  FormInput,
  Select,
  Checkbox,
  TextField,
} from '../../../../common/components';

import type {
  HomeownersPropertyDetailsViewProps,
} from './Interfaces';

import './HomeownersPropertyDetails.css';

const HomeownersPropertyDetailsView = ({
  formData,
  onChange,
}: HomeownersPropertyDetailsViewProps) => {
  return (
    <div className="property-page">
      <Card
        variant="elevation"
        className="property-card"
      >
        <form id="property-details-form">
          <div className="section">
            <div className="full-width">
              <TextField
                {...formData.propertyAddress}
                onChange={onChange}
              />
            </div>

            <div className="form-grid">
              <Select
                {...formData.propertyType}
                onChange={onChange}
              />

              <Select
                {...formData.constructionType}
                onChange={onChange}
              />

              <FormInput
                {...formData.yearBuilt}
                onChange={onChange}
              />

              <FormInput
                {...formData.roofAge}
                onChange={onChange}
              />

              <FormInput
                {...formData.squareFootage}
                onChange={onChange}
              />

              <FormInput
                {...formData.stories}
                onChange={onChange}
              />

              <Select
                {...formData.roofType}
                onChange={onChange}
              />

              <Select
                {...formData.occupancyType}
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
              Safety Features
            </Typography>

            <div className="checkbox-grid">
              <Checkbox
                id="smokeDetector"
                label="Smoke Detector"
                checked={Boolean(
                  formData.smokeDetector.value,
                )}
                onChange={onChange}
              />

              <Checkbox
                id="fireAlarm"
                label="Fire Alarm System"
                checked={Boolean(
                  formData.fireAlarm.value,
                )}
                onChange={onChange}
              />

              <Checkbox
                id="sprinklerSystem"
                label="Sprinkler System"
                checked={Boolean(
                  formData.sprinklerSystem.value,
                )}
                onChange={onChange}
              />

              <Checkbox
                id="burglarAlarm"
                label="Burglar Alarm"
                checked={Boolean(
                  formData.burglarAlarm.value,
                )}
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
              Coverage Information
            </Typography>

            <div className="form-grid">
              <FormInput
                {...formData.estimatedValue}
                onChange={onChange}
              />

              <FormInput
                {...formData.replacementCost}
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
              Claims Information
            </Typography>

            <Checkbox
              id="priorClaims"
              label="Prior Claims"
              checked={Boolean(
                formData.priorClaims.value,
              )}
              onChange={onChange}
            />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default HomeownersPropertyDetailsView;