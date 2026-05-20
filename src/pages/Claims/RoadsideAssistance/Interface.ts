export interface DriverProvider {
  name: string;
  partner: string;
  driverName: string;
  vehicleType: string;
  plateNumber: string;
}

export interface RoadsideStatus {
  status: string;
  arrivalTime: string;
  trackingText: string;
}

export interface RoadsideAssistanceViewProps {
  provider: DriverProvider;
  roadsideStatus: RoadsideStatus;
  onCancelRequest: () => void;
}