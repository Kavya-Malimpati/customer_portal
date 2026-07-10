import {
  Card,
  CardContent,
  Typography,
  LabelValue,
} from '../../../../common/components';

import {
  FiHome,
  FiTruck,
  FiChevronRight,
} from 'react-icons/fi';

import type { Policy } from '../Interface';

interface PolicyCardProps {
  policy: Policy;
  onClick: () => void;
}

const PolicyCard = ({
  policy,
  onClick,
}: PolicyCardProps) => {
  return (
    <Card
      variant="outlined-raised"
      className="bundle-policy-card"
      onClick={onClick}
    >
      <CardContent>

        <div className="bundle-policy-header">

          <div className="bundle-policy-icon">

            {policy.type === 'auto' ? (
              <FiTruck size={28} />
            ) : (
              <FiHome size={28} />
            )}

          </div>

          <div className="bundle-policy-title">

            <Typography
              variant="h5"
              color="primary"
            >
              {policy.title}
            </Typography>

            <Typography variant="body2">
              Active Policy
            </Typography>

          </div>

          <FiChevronRight
            size={20}
            className="bundle-policy-arrow"
          />

        </div>

        <div className="bundle-policy-details">

          <LabelValue
            label="Policy Number"
            value={policy.policyNumber}
          />

          <LabelValue
            label="Monthly Premium"
            value={`$${policy.monthlyPremium}/month`}
          />

        </div>

      </CardContent>
    </Card>
  );
};

export default PolicyCard;