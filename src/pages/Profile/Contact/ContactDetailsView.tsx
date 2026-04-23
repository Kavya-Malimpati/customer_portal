import {
  Card,
  CardContent,
  Typography,
  Button,
  CardHeader,
  CardFooter,
} from '../../../common/components';

import type { ViewContactDetailsProps } from './interfaces';
import { FiBarChart2, FiBox, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';

function ContactDetailsView({ contactData, navigate }: ViewContactDetailsProps) {
  return (
    <div className='w-full flex justify-center items-center bg-gray-100'>
      <Card className='w-full' variant='elevation'>
        <CardHeader
          title={
            <Typography variant='h3' className='text-left'>
              Contact Details
            </Typography>
          }
        />
        <CardContent className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-6'>
          <div className='flex flex-col gap-1'>
            <Typography variant='caption' color='textSecondary' startDecorator={<FiPhone />}>
              Primary Phone Number
            </Typography>
            <Typography variant='body1'>{contactData.primaryPhone}</Typography>
          </div>

          <div className='flex flex-col gap-1'>
            <Typography variant='caption' color='textSecondary' startDecorator={<FiPhone />}>
              Secondary Phone Number
            </Typography>
            <Typography variant='body1'>{contactData.secondaryPhone}</Typography>
          </div>

          <div className='flex flex-col gap-1'>
            <Typography variant='caption' startDecorator={<FiUser />}>
              Email
            </Typography>
            <Typography variant='body1'>{contactData.email}</Typography>
          </div>

          <div className='flex flex-col gap-1'>
            <Typography variant='caption' startDecorator={<FiMapPin />}>
              Street
            </Typography>
            <Typography variant='body1'>{contactData.street}</Typography>
          </div>

          <div className='flex flex-col gap-1'>
            <Typography variant='caption' startDecorator={<FiBox />}>
              City
            </Typography>
            <Typography variant='body1'>{contactData.city}</Typography>
          </div>

          <div className='flex flex-col gap-1'>
            <Typography variant='caption' startDecorator={<FiMapPin />}>
              State
            </Typography>
            <Typography variant='body1'>{contactData.state}</Typography>
          </div>

          <div className='flex flex-col gap-1'>
            <Typography variant='caption' startDecorator={<FiBarChart2 />}>
              ZIP Code
            </Typography>
            <Typography variant='body1'>{contactData.zipCode}</Typography>
          </div>

          <div className='flex flex-col gap-1'>
            <Typography variant='caption'>Preferred Communication</Typography>
            <Typography variant='body1'>{contactData.preferredCommunication}</Typography>
          </div>
        </CardContent>

        <CardFooter className='flex justify-end p-6 border-t'>
          <Button
            type='button'
            variant='contained'
            color='primary'
            onClick={() => navigate('/update-contact')}
          >
            Edit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ContactDetailsView;
