import { Button, Card, CardContent, Typography } from '../../../common/components';
import type { PolicyHeaderData } from './interfaces';
import '../styles/PolicyHeaderCardView.css';
import { FaCheckCircle } from 'react-icons/fa';
import { FiEdit2 } from 'react-icons/fi';

interface Props {
  policy: PolicyHeaderData;
  onRequestChange?: () => void;
  onRenew?: () => void;
}

const PolicyHeaderCardView = ({
  policy,
  onRequestChange,
  onRenew,
}: Props) => (
  <Card className="policy-card">
    <CardContent className="policy-card-content">
      <div className="policy-card-container">

        {/* LEFT */}
        <div className="policy-card-info">
          <div className="policy-card-status-row">
            <div className="policy-card-status-badge">
              <FaCheckCircle />
              <span>{policy.status}</span>
            </div>

            <Typography variant="body2" color="body2">
              • Policy #{policy.policyNumber}
            </Typography>
          </div>

          <Typography
            variant="h1"
            color="primary"
            className="policy-card-title"
          >
            {policy.policyType}
          </Typography>

          <Typography
            variant="body2"
            color="body2"
            className="policy-card-date"
          >
            Effective Until: {policy.endDate}
          </Typography>
        </div>

        {/* RIGHT */}
        <div className="policy-card-actions">
          {onRequestChange && (
            <Button variant="outlined" onClick={onRequestChange}>
              <span className="policy-card-button">
                <FiEdit2 />
                Request Change
              </span>
            </Button>
          )}

          {onRenew && (
            <Button variant="contained" onClick={onRenew}>
              Renew Now
            </Button>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

export default PolicyHeaderCardView;