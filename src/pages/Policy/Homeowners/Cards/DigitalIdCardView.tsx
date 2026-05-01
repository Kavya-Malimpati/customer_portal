import { Button, Card, CardContent, Typography } from '../../../../common/components';
import { FiDownload } from 'react-icons/fi';
import { BiHome } from 'react-icons/bi';
import type { HomeownersPolicy } from '../interfaces';
import '../../styles/DigitalIdCardView.css';

interface Props {
  policy: HomeownersPolicy;
}

const DigitalIdCardView = ({ policy }: Props) => (
  <Card>
    <CardContent className='digital-id-card-content'>
      <div className='digital-id-card-header'>
        <Typography variant='h3' color='secondary'>
          Digital ID Card
        </Typography>
        <Button variant='text' size='small' startIcon={<FiDownload />}>
          Save PDF
        </Button>
      </div>

      <div className='digital-id-card-body-wrapper'>
        <div className='digital-id-card-body'>
          <div className='digital-id-card-top'>
            <div className='digital-id-card-title'>
              <Typography variant='h5' color='inverse'>
                Homeowners Insurance ID
              </Typography>
            </div>

            {/* Optional icon/logo */}
            <div>
              <BiHome />
            </div>
          </div>

          <div className='digital-id-card-divider' />

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
                Proprty Address
              </Typography>
              <Typography variant='body1' color='inverse'>
                {policy.property.address.street}, {policy.property.address.city},{' '}
                {policy.property.address.state} {policy.property.address.zipCode}
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
