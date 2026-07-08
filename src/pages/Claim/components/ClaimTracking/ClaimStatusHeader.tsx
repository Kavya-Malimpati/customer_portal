import { Typography } from '../../../../common/components';
import '../../Claim.css'
interface Props {
  title: string;
  incidentDate: string;
}

const ClaimStatusHeader = ({
  title,
}: Props) => {
  return (
    <div className="claim-status-header">
      <div className="claim-status-left">
        <Typography
          variant="body1"
        >
          TRACK PIPELINE STATUS
        </Typography>

        <Typography
          variant="body1"
          className="claim-status-title"
        >
          {title}
        </Typography>
      </div>
    </div>
  );
};

export default ClaimStatusHeader;