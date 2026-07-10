import type { SelectOption } from './interface';

export const autoVehicleOptions: SelectOption[] = [
  {
    label: '2023 Toyota Camry',
    value: 'Toyota Camry',
  },
  {
    label: '2021 Honda Accord',
    value: 'Honda Accord',
  },
  {
    label: '2022 Honda CR-V',
    value: 'Honda CR-V',
  },
];

export const homePropertyOptions: SelectOption[] = [
  {
    label: 'Primary Residence',
    value: 'Primary Residence',
  },
  {
    label: 'Rental Property',
    value: 'Rental Property',
  },
];

export const autoDamageOptions: SelectOption[] = [
  {
    label: 'Windshield Chip',
    value: 'Windshield Chip',
  },
  {
    label: 'Windshield Crack',
    value: 'Windshield Crack',
  },
  {
    label: 'Rear Glass',
    value: 'Rear Glass',
  },
  {
    label: 'Side Window',
    value: 'Side Window',
  },
];

export const homeInspectionOptions: SelectOption[] = [
  {
    label: 'Roof Inspection',
    value: 'Roof Inspection',
  },
  {
    label: 'Water Damage',
    value: 'Water Damage',
  },
  {
    label: 'Fire Damage',
    value: 'Fire Damage',
  },
  {
    label: 'Foundation Inspection',
    value: 'Foundation Inspection',
  },
];

export const dateOptions: SelectOption[] = [
  {
    label: '08 July 2026',
    value: '08 Jul 2026',
  },
  {
    label: '09 July 2026',
    value: '09 Jul 2026',
  },
  {
    label: '10 July 2026',
    value: '10 Jul 2026',
  },
  {
    label: '11 July 2026',
    value: '11 Jul 2026',
  },
];

export const timeSlots = ['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM'];

export const getVehicleOptions = (policy: 'auto' | 'home') =>
  policy === 'auto' ? autoVehicleOptions : homePropertyOptions;

export const getDamageOptions = (policy: 'auto' | 'home') =>
  policy === 'auto' ? autoDamageOptions : homeInspectionOptions;

export const getServiceName = (policy: 'auto' | 'home', serviceMethod: 'mobile' | 'shop') => {
  if (serviceMethod === 'mobile') {
    return policy === 'auto' ? 'Mobile Service' : 'On-site Inspection';
  }

  return policy === 'auto' ? 'In-Shop Service' : 'Virtual Inspection';
};

export const getInspectionTitle = (policy: 'auto' | 'home') =>
  policy === 'auto' ? 'Fast Glass Repair Scheduler' : 'Property Inspection Scheduler';

export const getInspectionDescription = (policy: 'auto' | 'home') =>
  policy === 'auto'
    ? 'Schedule windshield repair with certified technicians.'
    : 'Book a certified property inspection.';

export const getRepairTitle = (policy: 'auto' | 'home') =>
  policy === 'auto' ? 'Glass Repair' : 'Property Inspection';
