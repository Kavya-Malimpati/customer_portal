import type { Dispatch, SetStateAction } from 'react';

export interface Props {
  policy: 'auto' | 'home';
}

export interface Appointment {
  vehicle: string;
  damage: string;
  date: string;
  slot: string;
  service: string;
}

export interface SelectOption {
  label: string;
  value: string;
}

export interface ScheduleInspectionViewProps {
  policy: 'auto' | 'home';

  vehicle: string;
  damageType: string;
  serviceMethod: 'mobile' | 'shop';
  date: string;
  slot: string;

  appointment: Appointment | null;

  vehicleOptions: SelectOption[];
  damageOptions: SelectOption[];
  dateOptions: SelectOption[];
  timeSlots: string[];

  inspectionTitle: string;
  inspectionDescription: string;
  repairTitle: string;

  setVehicle: Dispatch<SetStateAction<string>>;
  setDamageType: Dispatch<SetStateAction<string>>;
  setServiceMethod: Dispatch<SetStateAction<'mobile' | 'shop'>>;
  setDate: Dispatch<SetStateAction<string>>;
  setSlot: Dispatch<SetStateAction<string>>;

  handleSchedule: () => void;
  handleCancel: () => void;
}
