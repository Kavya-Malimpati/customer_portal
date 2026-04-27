import { Button, Card, CardContent, Typography } from '../../../../common/components';
import type { HomeownersPolicy } from './interfaces';

interface Props {
  policy: HomeownersPolicy;
}

const HomeownersHeaderCardView = ({ policy }: Props) => (
  <Card>
    <CardContent className='py-(--space-3) px-(--space-3)'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-0'>
          <Typography variant='body2' color='body2' className='m-0'>
            {policy.status} • Policy #{policy.policyNumber}
          </Typography>

          <Typography variant='h1' color='primary' className='m-0'>
            {policy.policyType}
          </Typography>

          <Typography variant='body2' color='body2' className='m-0'>
            Effective Until: {policy.endDate}
          </Typography>
        </div>

        <div className='flex items-center gap-(--space-3)'>
          <Button variant='outlined'>Request Change</Button>
          <Button variant='contained'>Renew Now</Button>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default HomeownersHeaderCardView;
