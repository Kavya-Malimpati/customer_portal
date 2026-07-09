import type {
  RoadsideStep,
  RoadsideRequestFormData,
  ServiceProviderDetails,
} from './Interface';

export const roadsideSteps: RoadsideStep[] = [
  {
    id: 1,
    title: 'Request Assistance',
  },
  {
    id: 2,
    title: 'Select Service',
  },
  {
    id: 3,
    title: 'Request Details',
  },
  {
    id: 4,
    title: 'Review & Submit',
  },
];

export const initialRoadsideData: RoadsideRequestFormData = {
requestAssistance: {
  currentLocation: '350 5th Ave, New York, NY 10118',
  manualLocation: '',
  selectedVehicle: '2023 Honda City',
},

  selectService: {
    serviceType: '',
  },

  requestDetails: {
    contactNumber: '',
    vehicleCondition: '',
    additionalNotes: '',
  },
};

export const providerDetails: ServiceProviderDetails = {
  requestNumber: 'RSA-203948',
  serviceProvider: 'SwiftTow Recovery Services',
  driverName: 'Mark Robinson',
  driverPhone: '+1 (555) 234-7890',
  estimatedArrival: '12 Minutes',
  vehicleInformation: 'Flatbed Tow Truck',
  currentStatus: 'Driver En Route',
};