import { Button, Card, CardContent, Typography } from '../../../../common/components';
import { FiDownload } from 'react-icons/fi';
import type { AutoPolicy } from '../interfaces';
import '../../styles/DigitalIdCardView.css';
import { IoCarSportOutline } from 'react-icons/io5';

interface Props {
  policy: AutoPolicy;
}

const DigitalIdCardView = ({ policy }: Props) => (
  <Card variant='outlined'>
    <CardContent className='digital-id-card-content'>
      <div className='digital-id-card-header'>
        <Typography variant='h3' color='secondary'>
          Digital ID Card
        </Typography>
        <Button variant='text' size='small' startIcon={<FiDownload />}>
          Save PDF
        </Button>
      </div>

{/* you can use common component for displaying the key and value for this and Ashish/Aryshian is already doing it just coordinate with him and update here */}
      <div className='digital-id-card-body-wrapper'>
        <div className='digital-id-card-body'>
          {/* Top Row */}
          <div className='digital-id-card-top'>
            <div className='digital-id-card-title'>
              <Typography variant='h5' color='inverse'>
                Auto Insurance ID
              </Typography>
            </div>

            {/* Optional icon/logo */}
            <div>
              <IoCarSportOutline />
            </div>
          </div>

          {/* Divider */}
          <div className='digital-id-card-divider' />

          {/* Details */}
          <div className='digital-id-card-details'>
            <div>
              <Typography variant='body2' color='inverse'>
                Policy Holder
              </Typography>
              <Typography variant='body1' color='inverse'>
                {policy.policyHolder}
              </Typography>
            </div>

            <div>
              <Typography variant='body2' color='inverse'>
                Policy #
              </Typography>
              <Typography variant='body1' color='inverse'>
                {policy.policyNumber}
              </Typography>
            </div>

            <div>
              <Typography variant='body2' color='inverse'>
                Vehicle
              </Typography>
              <Typography variant='body1' color='inverse'>
                {policy.vehicle.year} {policy.vehicle.make} {policy.vehicle.model}
              </Typography>
            </div>

            <div>
              <Typography variant='body2' color='inverse'>
                Valid
              </Typography>
              <Typography variant='body1' color='inverse'>
                {policy.startDate} – {policy.endDate}
              </Typography>
            </div>
          </div>
        </div>

        <Button variant='outlined' className='digital-id-card-wallet'>
          Add to Apple Wallet
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default DigitalIdCardView;
