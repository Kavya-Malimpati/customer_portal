import { Card, CardContent, Typography, Button, Link } from '../../../common/components';
import { FiClock, FiShield, FiUser } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import type { AccountData } from './account.api';

interface AccountSecurityDisplayProps {
  data: AccountData;
  onChangePassword: () => void;
  onUpdate2FA: () => void;
}

const AccountSecurityDisplay = ({
  data,
  onChangePassword,
  onUpdate2FA,
}: AccountSecurityDisplayProps) => {
  const { t } = useTranslation();

  return (
    <main className='min-h-screen w-full  py-3'>

      {/* FULL WIDTH CONTAINER */}
      <div className='w-full space-y-4'>

        {/* HEADER CARD */}
        <Card variant='outlined' className='w-full'>
          <CardContent>
            <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-3'>

              <div>
                <Typography variant='h2' style={{ color: 'var(--text-primary)' }}>
                  {t('accountSecurity.title')}
                </Typography>
                <Typography variant='body2'>
                  {t('accountSecurity.description')}
                </Typography>
              </div>

              <div className='flex gap-2 flex-wrap'>
                <Button variant='outlined' onClick={onChangePassword}>
                  {t('accountSecurity.changePassword')}
                </Button>
                <Button variant='contained' onClick={onUpdate2FA}>
                  {t('accountSecurity.update2FA')}
                </Button>
              </div>

            </div>
          </CardContent>
        </Card>

        {/* INFO CARDS */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px'
          }}
        >

          <Card variant='outlined'>
            <CardContent>
              <div className='space-y-1'>
                <Typography variant='overline' startDecorator={<FiClock />}>
                  {t('accountSecurity.lastLoggedIn')}
                </Typography>

                <Typography variant='body1'>{data.lastLogin}</Typography>
                <Typography variant='body2'>{data.location}</Typography>
              </div>
            </CardContent>
          </Card>

          <Card variant='outlined'>
            <CardContent>
              <div className='space-y-1'>
                <Typography variant='overline' startDecorator={<FiShield />}>
                  {t('accountSecurity.identityStatus')}
                </Typography>

                <Typography variant='body1'>{data.identityStatus}</Typography>
              </div>
            </CardContent>
          </Card>

          <Card variant='outlined'>
            <CardContent>
              <div className='space-y-1'>
                <Typography variant='overline' startDecorator={<FiUser />}>
                  {t('accountSecurity.legacyContact')}
                </Typography>

                {data.legacyContact ? (
                  <Typography variant='body1'>{data.legacyContact}</Typography>
                ) : (
                  <Typography>{t('accountSecurity.addNow')}</Typography>
                )}
              </div>
            </CardContent>
          </Card>

        </div>

        {/* RECENT ACTIVITY */}
        <Card variant='outlined'>
          <CardContent>
            <div className='space-y-3'>

              <Typography variant='h3' style={{ color: 'var(--text-primary)' }}>
                {t('accountSecurity.recentActivity')}
              </Typography>

              <div className='flex items-center justify-between border-b pb-2'>
                <div className='flex items-center gap-2'>
                  <FiClock className='mt-1' />
                  <div>
                    <Typography variant='body1'>
                      {t('accountSecurity.activity1Title')}
                    </Typography>
                    <Typography variant='caption'>
                      {t('accountSecurity.activity1Time')}
                    </Typography>
                  </div>
                </div>

                <Link to='#'>{t('accountSecurity.view')}</Link>
              </div>

              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <FiShield className='mt-1' />
                  <div>
                    <Typography variant='body1'>
                      {t('accountSecurity.activity2Title')}
                    </Typography>
                    <Typography variant='caption'>
                      {t('accountSecurity.activity2Time')}
                    </Typography>
                  </div>
                </div>

                <Link to='#'>{t('accountSecurity.details')}</Link>
              </div>

            </div>
          </CardContent>
        </Card>

      </div>
    </main>
  );
};

export default AccountSecurityDisplay;