import { Typography } from '../../../../common/components';

import { FaTruckPickup, FaCarBattery, FaGasPump, FaKey } from 'react-icons/fa';

import { GiFlatTire, GiTowTruck } from 'react-icons/gi';

import type { SelectServiceData } from '../Interface';

interface SelectServiceStepProps {
  data: SelectServiceData;
  onChange: (value: SelectServiceData) => void;
}

const services = [
  {
    title: 'Towing',
    icon: <FaTruckPickup />,
  },
  {
    title: 'Flat Tire',
    icon: <GiFlatTire />,
  },
  {
    title: 'Battery Jump Start',
    icon: <FaCarBattery />,
  },
  {
    title: 'Fuel Delivery',
    icon: <FaGasPump />,
  },
  {
    title: 'Lockout Assistance',
    icon: <FaKey />,
  },
  {
    title: 'Winching',
    icon: <GiTowTruck />,
  },
];

const SelectServiceStep = ({ data, onChange }: SelectServiceStepProps) => {
  return (
    <div className='roadside-step'>
      <Typography variant='body2' className='roadside-step-subtitle'>
        Choose the service you need.
      </Typography>

      <hr className='roadside-divider' />

      <div className='roadside-service-grid'>
        {services.map(service => (
          <div
            key={service.title}
            className={`roadside-service-card ${
              data.serviceType === service.title ? 'selected' : ''
            }`}
            onClick={() =>
              onChange({
                serviceType: service.title,
              })
            }
          >
            <div className='roadside-service-icon'>{service.icon}</div>

            <Typography variant='body1' className='roadside-service-title'>
              {service.title}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectServiceStep;
