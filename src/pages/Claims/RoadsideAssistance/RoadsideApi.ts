import type { DriverProvider, RoadsideStatus } from './Interface';

export const getRoadsideProvider = async (): Promise<DriverProvider> => {
  return {
    name: 'SwiftTow Recovery Services',
    partner: 'AUTHORIZED PARTNER',
    driverName: 'Mark R.',
    vehicleType: 'Flatbed Tow',
    plateNumber: '80GT922',
  };
};

export const getRoadsideStatus = async (): Promise<RoadsideStatus> => {
  return {
    status: 'ACTIVE REQUEST',
    arrivalTime: 'Tow truck arriving in 12 min',
    trackingText: 'Tracking WGH-45383',
  };
};