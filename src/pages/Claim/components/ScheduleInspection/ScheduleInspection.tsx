import { useState } from 'react';

import ScheduleInspectionView from './ScheduleInspectionView';

import {
  dateOptions,
  getDamageOptions,
  getInspectionDescription,
  getInspectionTitle,
  getRepairTitle,
  getServiceName,
  getVehicleOptions,
  timeSlots,
} from './ScheduleInspection.data';

import {
type Appointment,
  type Props,
} from './interface';

const ScheduleInspection = ({ policy }: Props) => {
  const [vehicle, setVehicle] = useState('');
  const [damageType, setDamageType] = useState('');
  const [serviceMethod, setServiceMethod] =
    useState<'mobile' | 'shop'>('mobile');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('');

  const [appointment, setAppointment] =
    useState<Appointment | null>(null);

  const vehicleOptions =
    getVehicleOptions(policy);

  const damageOptions =
    getDamageOptions(policy);

  const handleSchedule = () => {
    if (
      !vehicle ||
      !damageType ||
      !date ||
      !slot
    ) {
      return;
    }

    setAppointment({
      vehicle,
      damage: damageType,
      date,
      slot,
      service: getServiceName(
        policy,
        serviceMethod
      ),
    });
  };

  const handleCancel = () => {
    setAppointment(null);
  };

  return (
    <ScheduleInspectionView
      policy={policy}
      vehicle={vehicle}
      damageType={damageType}
      serviceMethod={serviceMethod}
      date={date}
      slot={slot}
      appointment={appointment}
      vehicleOptions={vehicleOptions}
      damageOptions={damageOptions}
      dateOptions={dateOptions}
      timeSlots={timeSlots}
      inspectionTitle={getInspectionTitle(policy)}
      inspectionDescription={getInspectionDescription(policy)}
      repairTitle={getRepairTitle(policy)}
      setVehicle={setVehicle}
      setDamageType={setDamageType}
      setServiceMethod={setServiceMethod}
      setDate={setDate}
      setSlot={setSlot}
      handleSchedule={handleSchedule}
      handleCancel={handleCancel}
    />
  );
};

export default ScheduleInspection;