import { Card, CardContent, Typography, Button, Select } from '../../../../common/components';

import {
  MdCalendarToday,
  MdDirectionsCar,
  MdHome,
  MdBuild,
  MdCheckCircle,
  MdAccessTime,
} from 'react-icons/md';

import { type ScheduleInspectionViewProps } from './interface';

import './ScheduleInspection.css';

const ScheduleInspectionView = ({
  policy,
  vehicle,
  damageType,
  serviceMethod,
  date,
  slot,
  appointment,
  vehicleOptions,
  damageOptions,
  dateOptions,
  timeSlots,
  inspectionTitle,
  inspectionDescription,
  repairTitle,
  setVehicle,
  setDamageType,
  setServiceMethod,
  setDate,
  setSlot,
  handleSchedule,
  handleCancel,
}: ScheduleInspectionViewProps) => {
  return (
    <div className='inspection-layout'>
      <Card className='inspection-card'>
        <CardContent>
          <div className='inspection-header'>
            <div className='inspection-icon'>
              {policy === 'auto' ? <MdDirectionsCar size={30} /> : <MdHome size={30} />}
            </div>

            <div>
              <Typography variant='h4' color='primary'>
                {inspectionTitle}
              </Typography>

              <Typography variant='body1'>{inspectionDescription}</Typography>
            </div>
          </div>

          <div className='inspection-divider' />

          <div className='inspection-grid'>
            <Select
              label={policy === 'auto' ? 'Covered Vehicle' : 'Covered Property'}
              value={vehicle}
              options={vehicleOptions}
              onChange={e => setVehicle(e.target.value)}
            />

            <Select
              label={policy === 'auto' ? 'Damage Type' : 'Inspection Type'}
              value={damageType}
              options={damageOptions}
              onChange={e => setDamageType(e.target.value)}
            />
          </div>

          <Typography variant='body2' className='service-title'>
            Service Method
          </Typography>

          <div className='service-options'>
            <div
              className={serviceMethod === 'mobile' ? 'service-card active' : 'service-card'}
              onClick={() => setServiceMethod('mobile')}
            >
              <Typography variant='subtitle2' className='service-card-title'>
                {policy === 'auto' ? (
                  <>
                    <MdDirectionsCar />
                    Mobile Service
                  </>
                ) : (
                  <>
                    <MdHome />
                    On-site Inspection
                  </>
                )}
              </Typography>

              <Typography variant='body2'>We come to your location.</Typography>
            </div>

            <div
              className={serviceMethod === 'shop' ? 'service-card active' : 'service-card'}
              onClick={() => setServiceMethod('shop')}
            >
              <Typography variant='subtitle2' className='service-card-title'>
                <MdBuild />

                {policy === 'auto' ? 'In-Shop Service' : 'Virtual Inspection'}
              </Typography>

              <Typography variant='body2'>Visit one of our approved centers.</Typography>
            </div>
          </div>
          <div className='inspection-grid'>
            <Select
              label='Preferred Date'
              value={date}
              options={dateOptions}
              onChange={e => setDate(e.target.value)}
            />
          </div>

          <Typography variant='body2' className='service-title'>
            Available Time Slots
          </Typography>

          <div className='time-slots'>
            {timeSlots.map(item => (
              <Button
                key={item}
                type='button'
                className={slot === item ? 'slot-card active' : 'slot-card'}
                onClick={() => setSlot(item)}
              >
                {item}
              </Button>
            ))}
          </div>

          <div className='coverage-card'>
            <div className='coverage-header'>
              <div className='coverage-check'>
                <MdCheckCircle size={18} />
              </div>

              <Typography variant='body1'>
                {policy === 'auto'
                  ? '100% Covered - No Deductible Due!'
                  : 'Covered Under Your Homeowners Policy'}
              </Typography>
            </div>

            <Typography variant='body2'>
              {policy === 'auto'
                ? 'Auto glass repairs are fully subsidized under your Comprehensive plan. Scheduling this appointment does not affect your auto premium rates or count as a negative incident surcharge.'
                : 'Your homeowners policy covers eligible property damage caused by covered events such as storms, fire, water damage, or theft. Scheduling an inspection helps assess the damage and begin the claims process without affecting your policy benefits.'}
            </Typography>
          </div>

          <Button
            fullWidth
            className='schedule-button'
            onClick={handleSchedule}
            disabled={!vehicle || !damageType || !date || !slot}
          >
            Schedule Appointment
          </Button>
        </CardContent>
      </Card>

      <Card className='repair-status-card'>
        <CardContent>
          <Typography variant='caption' className='status-title'>
            Scheduled Repairs
          </Typography>

          {!appointment ? (
            <div className='empty-state'>
              <div className='empty-icon'>
                <MdCalendarToday size={38} />
              </div>

              <Typography variant='h5'>No Scheduled Repairs</Typography>

              <Typography variant='body2'>
                Schedule an inspection to see your upcoming appointment here.
              </Typography>
            </div>
          ) : (
            <div className='repair-item'>
              <div className='repair-status'>
                <MdCalendarToday size={16} />
                Scheduled
              </div>

              <Typography variant='h5'>{repairTitle}</Typography>

              <div className='repair-divider' />
              <Typography variant='caption' color='secondary'>
                Vehicle / Property
              </Typography>

              <Typography variant='subtitle2'>{appointment.vehicle}</Typography>

              <Typography variant='caption' color='secondary' className='caption-icon'>
                <MdBuild size={14} />
                Inspection Type
              </Typography>

              <Typography variant='subtitle2'>{appointment.damage}</Typography>

              <Typography variant='caption' color='secondary' className='caption-icon'>
                <MdCalendarToday size={14} />
                Date
              </Typography>

              <Typography variant='subtitle2'>{appointment.date}</Typography>

              <Typography variant='caption' color='secondary' className='caption-icon'>
                <MdAccessTime size={14} />
                Time
              </Typography>

              <Typography variant='subtitle2'>{appointment.slot}</Typography>

              <Typography variant='caption' color='secondary' className='caption-icon'>
                <MdBuild size={14} />
                Service
              </Typography>

              <Typography variant='subtitle2'>{appointment.service}</Typography>

              <div className='repair-actions'>
                <Button variant='text' color='error' onClick={handleCancel}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleInspectionView;
