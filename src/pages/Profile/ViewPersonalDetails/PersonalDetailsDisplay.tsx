import { Card, CardContent, Typography, Button } from '../../../common/components';
import { useTranslation } from 'react-i18next';
import type { PersonalDetailsData } from './Interfaces';

interface PersonalDetailsDisplayProps {
  data: PersonalDetailsData;
  onEditClick: () => void;
}

const PersonalDetailsDisplay = ({ data, onEditClick }: PersonalDetailsDisplayProps) => {
  const { t } = useTranslation();

  return (
    <main className='min-h-screen w-full p-4'>
      <div className='max-w-4xl mx-auto'>
        <Card variant='outlined-raised' className='w-full'>
          <CardContent>
            <div className='mb-6 flex items-start justify-between'>
              <div>
                <Typography variant='h2' className='mb-2'>
                  {t('personalDetails.title')}
                </Typography>
                <Typography variant='body2'>{t('personalDetails.description')}</Typography>
              </div>
              <Button
                variant='contained'
                color='primary'
                onClick={onEditClick}
                ariaLabel={t('personalDetails.editButton')}
              >
                {t('personalDetails.editButton')}
              </Button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <Typography variant='overline'>{t('personalDetails.firstName')}</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.firstName}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>{t('personalDetails.middleName')}</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.middleName || t('personalDetails.notProvided')}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>{t('personalDetails.lastName')}</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.lastName}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>{t('personalDetails.dateOfBirth')}</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.dateOfBirth}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>{t('personalDetails.gender')}</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.gender}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>{t('personalDetails.maritalStatus')}</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.maritalStatus}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>{t('personalDetails.occupation')}</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.occupation}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>{t('personalDetails.employmentStatus')}</Typography>
                <Typography variant='body1' className='font-medium'>
                  {data.employmentStatus}
                </Typography>
              </div>

              <div className='space-y-2'>
                <Typography variant='overline'>{t('personalDetails.preferredLanguage')}</Typography>
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
