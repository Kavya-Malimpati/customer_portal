import { Button, Card, CardContent, Typography } from '../../../../common/components';
import { FiDownload } from 'react-icons/fi';
import type { HomeownersPolicy } from './interfaces';

interface Props {
  policy: HomeownersPolicy;
}

const DigitalIdCardView = ({ policy }: Props) => (
  <Card>
    <CardContent className='flex flex-col gap-(--space-4)'>
      <div className='policy-card-header'>
        <Typography variant='h3' color='secondary'>
          Digital ID Card
        </Typography>
        <Button variant='text' size='small' startIcon={<FiDownload />}>
          Save PDF
        </Button>
      </div>

      <div className='bg-(--color-gray-100) text-(--text-inverse) rounded-(--rounded-lg) p-(--space-5) flex flex-col gap-(--space-3)'>
        <Typography variant='h6'>Homeowners Insurance ID</Typography>
        <Typography variant='body2'>Policy Holder: {policy.policyHolder}</Typography>
        <Typography variant='body2'>Policy #{policy.policyNumber}</Typography>
        <Typography variant='body2'>
          Property: {policy.property.address.street}, {policy.property.address.city},{' '}
          {policy.property.address.state} {policy.property.address.zipCode}
        </Typography>
        <Typography variant='body2'>
          Valid {policy.startDate} – {policy.endDate}
        </Typography>
      </div>

      <Button variant='outlined' className='justify-center'>
        Add to Apple Wallet
      </Button>
    </CardContent>
  </Card>
);

export default DigitalIdCardView;
