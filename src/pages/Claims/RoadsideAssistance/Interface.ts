export interface RoadsideStep {
  id: number;
  title: string;
}

export interface RequestAssistanceData {
  currentLocation: string;
  manualLocation: string;
  selectedVehicle: string;
}

export interface SelectServiceData {
  serviceType: string;
}

export interface RequestDetailsData {
  contactNumber: string;
  vehicleCondition: string;
  additionalNotes: string;
}

export interface RoadsideRequestFormData {
  requestAssistance: RequestAssistanceData;
  selectService: SelectServiceData;
  requestDetails: RequestDetailsData;
}

export interface ServiceProviderDetails {
  requestNumber: string;
  serviceProvider: string;
  driverName: string;
  driverPhone: string;
  estimatedArrival: string;
  vehicleInformation: string;
  currentStatus: string;
}

export interface RoadsideAssistanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLocation: string;
}

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
  currentLocation: string;
  onCancelRequest: () => void;
}