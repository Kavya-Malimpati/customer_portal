import {
    Card,
  Typography,
} from '../../../../common/components';

import type {
  PremiumEstimateViewProps,
} from './Interfaces';

import './PremiumEstimate.css';

const PremiumEstimateView = ({
  formData,
}: PremiumEstimateViewProps) => {
  return (
    <Card className="premium-page">
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

            <Typography variant="h2">
              ${formData.monthlyPremium}
            </Typography>
          </div>

          <div className="premium-box">
            <Typography variant="body1">
              Annual Premium
            </Typography>

            <Typography variant="h2">
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
              Dwelling Coverage
            </Typography>

            <Typography variant="body2">
              ${formData.dwellingPremium}
            </Typography>
          </div>

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
              Optional Coverage
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
  );
};

export default PremiumEstimateView;