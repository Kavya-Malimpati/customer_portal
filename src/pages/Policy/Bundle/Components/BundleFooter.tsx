import {
  Card,
  CardContent,
  Typography,
  Button,
} from '../../../../common/components';

interface BundleFooterProps {
  onGetBundleQuote: () => void;
  onBundlePolicies: () => void;
}

const BundleFooter = ({
//   onGetBundleQuote,
  onBundlePolicies,
}: BundleFooterProps) => {
  return (
    <Card
      variant="outlined-raised"
      className="bundle-footer-card"
    >
      <CardContent>

        <Typography
          variant="h4"
          color="primary"
        >
          Ready to Save More?
        </Typography>

        <Typography variant="body2">
          Get a personalized bundle quote or bundle your
          existing Auto and Home policies today.
        </Typography>

        <div className="bundle-footer-actions">

          {/* <Button
            variant="outlined"
            onClick={onGetBundleQuote}
          >
            Get Bundle Quote
          </Button> */}

          <Button
            variant="contained"
            onClick={onBundlePolicies}
          >
            Bundle My Policies
          </Button>

        </div>

      </CardContent>
    </Card>
  );
};

export default BundleFooter;