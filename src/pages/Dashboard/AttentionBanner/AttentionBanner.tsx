import { Typography, Button } from '../../../common/components';
import { FiAlertTriangle } from 'react-icons/fi';
import './AttentionBanner.css';

const AttentionBanner = () => {
  return (
    <div className="attention-banner">
      <div className="attention-banner-left">
        <div className="attention-icon">
          <FiAlertTriangle size={22} />
        </div>

        <div className="attention-content">
          <Typography
            variant="body1"
            className="attention-label"
          >
            ATTENTION REQUIRED
          </Typography>

          <Typography
            variant="body1"
            className="attention-message"
          >
            Evidence requested for Claim #PC-9902 (Rear-End Collision)
          </Typography>
        </div>
      </div>

      <Button
        variant="contained"
        className="resolve-button"
      >
        Resolve Now
      </Button>
    </div>
  );
};

export default AttentionBanner;