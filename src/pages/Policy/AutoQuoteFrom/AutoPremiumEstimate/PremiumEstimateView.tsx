import {
  Card,
  Typography,
} from '../../../../common/components';

import type {
  PremiumEstimateViewProps,
} from './Interfaces';

import './AutoPremium.css';

const PremiumEstimateView = ({
  formData,
}: PremiumEstimateViewProps) => {
  return (
    <div className="premium-page">
      <Card
        variant="elevation"
        className="premium-card"
      >
        <div className="section">
          <Typography
            variant="h3"
            color="primary"
            className="section-title"
          >
            Estimated Premium
          </Typography>

          <div className="premium-summary">
            <div className="premium-box">
              <Typography variant="body1">
                Monthly Premium
              </Typography>

              <Typography variant="h2"  color='primary'>
                ${formData.monthlyPremium}
              </Typography>
            </div>

            <div className="premium-box">
              <Typography variant="body1">
                Annual Premium
              </Typography>

              <Typography variant="h2" color='primary'>
                ${formData.annualPremium}
              </Typography>
            </div>
          </div>
        </div>

        <div className="section">
          <Typography
            variant="h3"
            color="primary"
            className="section-title"
          >
            Premium Breakdown
          </Typography>

          <div className="breakdown">
            <div className="row">
              <Typography variant="body2">
                Liability Coverage
              </Typography>

              <Typography variant="body2">
                ${formData.liabilityPremium}
              </Typography>
            </div>

            <div className="row">
              <Typography variant="body2">
                Collision Coverage
              </Typography>

              <Typography variant="body2">
                ${formData.collisionPremium}
              </Typography>
            </div>

            <div className="row">
              <Typography variant="body2">
                Additional Risk
              </Typography>

              <Typography variant="body2">
                ${formData.optionalPremium}
              </Typography>
            </div>
          </div>
        </div>

        <div className="section">
          <Typography
            variant="h3"
            color="primary"
            className="section-title"
          >
            Quote Validity
          </Typography>

          <div className="validity">
            <Typography variant="body1">
              Valid Until
            </Typography>

            <Typography variant="body2">
              {formData.validUntil}
            </Typography>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PremiumEstimateView;