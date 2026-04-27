import { Card, CardContent, Button, Typography } from '../../../../common/components';
import { FiAlertTriangle } from 'react-icons/fi';

interface Props {
  documentName?: string;
  onSignNow?: () => void;
}

const AwaitingSignatureCardView = ({
  documentName = '2024 Policy Endorsement Form',
  onSignNow,
}: Props) => {
  return (
    <Card
      className='
        rounded-(--rounded-lg)
        border-l-4
        border-l-(--color-error)'
    >
      <CardContent className='flex gap-(--space-4) items-start'>
        {/* Icon */}
        <div className='text-(--color-error) pt-0.5'>
          <FiAlertTriangle size={20} />
        </div>

        {/* Aligned content column */}
        <div className='flex flex-col gap-(--space-2) flex-1'>
          <Typography variant='body1' color='primary'>
            Awaiting Signature
          </Typography>

          <Typography variant='body2' color='body2'>
            {documentName}
          </Typography>

          <Button
            variant='contained'
            color='error'
            className='w-full mt-(--space-2)'
            onClick={onSignNow}
          >
            Sign Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AwaitingSignatureCardView;
