import { FiTruck, FiMapPin, FiPhone } from 'react-icons/fi';
import { Typography, Button, Card, CardContent } from '../../../common/components';
import type { RoadsideAssistanceViewProps } from './Interface';
import './Roadside.css';

const RoadsideAssistanceView = ({
  provider,
  roadsideStatus,
  onCancelRequest,
}: RoadsideAssistanceViewProps) => {
  return (
    <Card variant='outlined-raised' className='roadside-card'>
      <CardContent>
        <div className='roadside-header'>
          <div className='roadside-title-wrap'>
            <FiTruck className='roadside-header-icon' />
            <Typography variant='h3' color='primary' className='roadside-title'>
              Roadside Assistance
            </Typography>
          </div>

          <span className='roadside-status-badge'>{roadsideStatus.status}</span>
        </div>

        <div className='roadside-content'>
          <div className='roadside-map-section'>
            <div className='roadside-location'>
              <span className='roadside-location-label'>Your Location</span>
              <FiMapPin className='roadside-location-icon' />
            </div>

            <div className='roadside-tracking-card'>
              <div className='roadside-truck-icon'>
                <FiTruck />
              </div>

              <div className='time'>
                <Typography variant='body1' className='roadside-arrival'>
                  {roadsideStatus.arrivalTime}
                </Typography>

                <Typography variant='body2'>{roadsideStatus.trackingText}</Typography>
              </div>
            </div>
          </div>

          <div className='roadside-provider-section'>
            <Typography variant='body2' className='roadside-provider-label'>
              SERVICE PROVIDER
            </Typography>

            <div className='roadside-provider-box'>
              <div className='roadside-provider-logo'>S</div>

              <div>
                <Typography variant='body1' color='primary' className='roadside-provider-name'>
                  {provider.name}
                </Typography>

                <Typography variant='body2' className='roadside-provider-partner'>
                  {provider.partner}
                </Typography>
              </div>
            </div>

            <div className='roadside-details'>
              <div className='roadside-detail-row'>
                <Typography variant='body2' color='secondary' className='roadside-detail-label'>
                  Driver Name
                </Typography>
                <Typography variant='body2' color='primary' className='roadside-detail-value'>
                  {provider.driverName}
                </Typography>
              </div>

              <div className='roadside-detail-row'>
                <Typography variant='body2' color='secondary' className='roadside-detail-label'>
                  Vehicle Type
                </Typography>
                <Typography variant='body2' color='primary' className='roadside-detail-value'>
                  {provider.vehicleType}
                </Typography>
              </div>

              <div className='roadside-detail-row'>
                <Typography variant='body2' color='secondary' className='roadside-detail-label'>
                  Plate Number
                </Typography>
                <Typography variant='body2' color='primary' className='roadside-detail-value'>
                  {provider.plateNumber}
                </Typography>
              </div>
            </div>

            <a href='tel:+18005550123' className='call-link'>
              <Button variant='contained' fullWidth className='roadside-call-btn'>
                <span className='call-btn-content'>
                  <FiPhone className='call-icon' />
                  Call Driver
                </span>
              </Button>
            </a>

            <Button variant='outlined' fullWidth onClick={onCancelRequest}>
              Cancel Request
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoadsideAssistanceView;
