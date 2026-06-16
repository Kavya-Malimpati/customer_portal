import { Button, Card, CardContent, LabelValue, Typography } from '../../../../common/components';
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
            <LabelValue
              orientation='vertical'
              label='Policy Holder'
              value={policy.policyHolder}
              labelVariant='body2'
              valueVariant='body1'
              labelColor='inverse'
              valueColor='inverse'
            />

            <LabelValue
              orientation='vertical'
              label='Policy #'
              value={policy.policyNumber}
              labelVariant='body2'
              valueVariant='body1'
              labelColor='inverse'
              valueColor='inverse'
            />

            <LabelValue
              orientation='vertical'
              label='Vehicle'
              value={`${policy.vehicle.year} ${policy.vehicle.make} ${policy.vehicle.model} `}
              labelVariant='body2'
              valueVariant='body1'
              labelColor='inverse'
              valueColor='inverse'
            />

            <LabelValue
              orientation='vertical'
              label='Valid'
              value={`${policy.startDate} – ${policy.endDate}`}
              labelVariant='body2'
              valueVariant='body1'
              labelColor='inverse'
              valueColor='inverse'
            />
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
