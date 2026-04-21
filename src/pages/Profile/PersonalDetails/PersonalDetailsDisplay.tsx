import Card from '../../../common/components/Card';
import CardContent from '../../../common/components/Card/CardContent';
import Typography from '../../../common/components/Typography/Typography';
import Button from '../../../common/components/Button/Button';
import type { PersonalDetailsData } from './Interfaces';

interface PersonalDetailsDisplayProps {
  data: PersonalDetailsData;
  onEditClick: () => void;
}

const PersonalDetailsDisplay = ({
  data,
  onEditClick,
}: PersonalDetailsDisplayProps) => {
  return (
    <main className='min-h-screen w-full p-4'>
      <div className='max-w-4xl mx-auto'>
        <Card variant='outlined-raised' className='w-full'>
          <CardContent>
            <div className='mb-6 flex items-start justify-between'>
              <div>
                <Typography variant='h2' className='mb-2'>
                  Personal Details
                </Typography>
                <Typography variant='body2'>
                  This profile view is read-only and only displays saved customer information.
                </Typography>
              </div>
              <Button
                variant='contained'
                color='primary'
                onClick={onEditClick}
                ariaLabel='Edit personal details'
              >
                Edit
              </Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Typography variant='overline'>First Name</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.firstName}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>Middle Name (optional)</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.middleName || 'Not provided'}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>Last Name</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.lastName}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>Date of Birth</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.dateOfBirth}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>Gender</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.gender}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>Marital Status</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.maritalStatus}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>Occupation</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.occupation}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>Employment Status</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.employmentStatus}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>Preferred Language</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.preferredLanguage}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default PersonalDetailsDisplay;
