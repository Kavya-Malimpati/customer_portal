import { Card, Typography, Button, Link } from '../../../common/components';
import { FiClock, FiShield, FiUser } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import type { AccountData } from './account.api';

import './Style.css';

interface Props {
  data: AccountData;
  onChangePassword: () => void;
  onUpdate2FA: () => void;
}

const AccountSecurityDisplay = ({ data, onChangePassword, onUpdate2FA }: Props) => {
  const { t } = useTranslation();

  return (
    <main className='account-security'>
      <div className='account-security__container'>
        <Card className='account-security__header'>
          <div className='account-security__banner'>
            <div className='banner-left'>
              <div className='security-icon-box'>
                <FiShield className='security-icon' />
              </div>

              <div>
                <Typography variant='body1' className=' headingunbold heading'>
                  {t('accountSecurity.title')}
                </Typography>

                <Typography variant='body2' className='text-muted'>
                  {t('accountSecurity.description')}
                </Typography>
              </div>
            </div>

            <div className='account-security__actions'>
              <Button variant='outlined' onClick={onChangePassword}>
                {t('accountSecurity.changePassword')}
              </Button>

              <Button variant='contained' onClick={onUpdate2FA}>
                {t('accountSecurity.update2FA')}
              </Button>
            </div>
          </div>

          <div className='account-security__grid'>
            <div className='account-security__card'>
              <div className='account-security__card-content'>
                <FiClock className='icon icon--muted' />

                <Typography variant='body1' className='font-medium'>
                  {data.lastLogin.title}
                </Typography>

                <Typography variant='body2' className='text-muted nowrap'>
                  {`${data.lastLogin.time} from ${data.lastLogin.location}`}
                </Typography>
              </div>
            </div>

            <div className='account-security__card'>
              <div className='account-security__card-content'>
                <FiShield className='icon icon--success' />

                <Typography variant='body1' className='font-medium'>
                  {data.identityStatus.title}
                </Typography>

                <Typography variant='body2' className='text-muted'>
                  {data.identityStatus.status}
                </Typography>
              </div>
            </div>

            <div className='account-security__card'>
              <div className='account-security__card-content'>
                <FiUser className='icon icon--danger' />

                <Typography variant='body1' className='font-medium'>
                  {data.legacyContact.title}
                </Typography>

                <div className='flex-row'>
                  <Typography variant='body2' className='text-muted'>
                    {data.legacyContact.info}
                  </Typography>

                  <Typography className='text-link'>Add now</Typography>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className='account-security__activity'>
          <Typography variant='body1' className='headingunbold heading'>
            {t('accountSecurity.recentActivity')}
          </Typography>

          <Card className='account-security__header'>
            <div className='no-padding'>
              <div className='activity-item'>
                <div className='activity-left'>
                  <FiClock className='icon icon--muted' />

                  <div>
                    <Typography variant='body1'>Auto Policy Renewal Document Uploaded</Typography>

                    <Typography variant='caption' className='text-muted'>
                      Yesterday, 4:30 PM
                    </Typography>
                  </div>
                </div>

                <Link to='#' className='text-link'>
                  View
                </Link>
              </div>

              <div className='activity-divider' />

              <div className='activity-item'>
                <div className='activity-left'>
                  <FiShield className='icon icon--muted' />

                  <div>
                    <Typography variant='body1'>Home Security Discount Applied</Typography>

                    <Typography variant='caption' className='text-muted'>
                      Oct 12, 2023
                    </Typography>
                  </div>
                </div>

                <Link to='#' className='text-link'>
                  Details
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default AccountSecurityDisplay;
