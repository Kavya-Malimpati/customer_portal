import {
  Card,
  CardContent,
  LabelValue,
  Typography,
} from '../../../../common/components';

import type { BundleSavings as BundleSavingsType } from '../Interface';

interface BundleSavingsProps {
  savings: BundleSavingsType;
}

const BundleSavings = ({
  savings,
}: BundleSavingsProps) => {
  return (
    <Card
      variant="outlined-raised"
      className="bundle-savings-card"
    >
      <CardContent>

        <Typography
          variant="h4"
          className="bundle-section-title"
        >
          Bundle Savings
        </Typography>

        <div className="bundle-savings-details">

          <LabelValue
            label="Total Premium"
            value={`$${savings.totalPremium}/month`}
          />

          <LabelValue
            label="Bundle Discount"
            value={`-$${savings.discountAmount}/month`}
          />

          <hr />

          <LabelValue
            label="New Estimated Premium"
            value={`$${savings.estimatedPremium}/month`}
          />

        </div>

        <Card
          variant="outlined"
          className="bundle-summary-card"
        >
          <CardContent>

            <Typography
              variant="body1"
              color="success"
            >
              Estimated Savings
            </Typography>

            <Typography variant="h3">
              ${savings.monthlySavings}/month
            </Typography>

            <Typography variant="body2">
              Save approximately
              {' '}
              <strong>
                ${savings.yearlySavings}
              </strong>
              {' '}
              every year by bundling your policies.
            </Typography>

          </CardContent>
        </Card>

      </CardContent>
    </Card>
  );
};

export default BundleSavings;