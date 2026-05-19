import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountSecurityView from './AccountSecurityView';
import { getAccountData } from './account.api';
import type { AccountData } from './account.api';

const AccountSecurity = () => {
  const [data, setData] = useState<AccountData | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAccountData().then(setData);
  }, []);

  const handleChangePassword = () => {
    navigate('/profile-page');
  };

  const handleUpdate2FA = () => {
    navigate('/update-2fa');
  };

  if (!data) return null;

  return (
    <AccountSecurityView
      data={data}
      onChangePassword={handleChangePassword}
      onUpdate2FA={handleUpdate2FA}
    />
  );
};

export default AccountSecurity;