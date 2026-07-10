import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, Typography } from '../../../../common/components';
import { FiArrowLeft } from 'react-icons/fi';

interface BundleHeaderProps {
  maxSavings: number;
}

const BundleHeader = ({ maxSavings }: BundleHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className='bundle-header'>
  <div className="bundle-header-left">

  <div className="bundle-title-row">
    <Button
      variant="text"
      className="bundle-back-button"
      onClick={() => navigate(-1)}
    >
      <FiArrowLeft />
    </Button>

    <Typography variant="h2" color="primary">
      Bundle &amp; Save
    </Typography>
  </div>

  <Typography
    variant="body1"
    className="bundle-description"
  >
    Bundle your Auto and Home policies together and enjoy bigger savings with one
    easy-to-manage account.
  </Typography>

</div>

      <Card variant='outlined-raised' className='bundle-banner-card'>
        <CardContent>
          <Typography variant='body2' color='success'>
            Save up to
          </Typography>

          <Typography variant='h1' color='success'>
            {maxSavings}%
          </Typography>

          <Typography variant='body2'>by bundling your policies</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default BundleHeader;
