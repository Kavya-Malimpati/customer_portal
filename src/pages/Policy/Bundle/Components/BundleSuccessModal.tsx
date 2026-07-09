import {
  Modal,
  Button,
  Typography,
  LabelValue,
} from '../../../../common/components';

interface BundleSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BundleSuccessModal = ({
  isOpen,
  onClose,
}: BundleSuccessModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Bundle Request Submitted"
      maxWidth="650px"
    >
      <div className="bundle-success">

        <div className="bundle-success-icon">
          ✓
        </div>

        <Typography
          variant="h3"
          color="success"
        >
          Request Submitted Successfully!
        </Typography>

        <Typography variant="body2">
          Your bundle request has been submitted successfully.
          Our insurance specialist will review your request and
          contact you within 1–2 business days.
        </Typography>

        <div className="bundle-success-details">

          <LabelValue
            label="Reference Number"
            value="BDL-20260709"
          />

          <LabelValue
            label="Status"
            value="Pending Review"
          />

          <LabelValue
            label="Estimated Savings"
            value="$300 / year"
          />

          <LabelValue
            label="Processing Time"
            value="1–2 Business Days"
          />

        </div>

        <div className="bundle-success-actions">

          <Button
            variant="contained"
            onClick={onClose}
          >
            Done
          </Button>

        </div>

      </div>
    </Modal>
  );
};

export default BundleSuccessModal;