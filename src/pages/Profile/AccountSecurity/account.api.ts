export interface AccountData {
  lastLogin: {
    title: string;
    time: string;
    location: string;
  };
  identityStatus: {
    title: string;
    status: string;
  };
  legacyContact: {
    title: string;
    info: string | null;
  };
}

export const getAccountData = async (): Promise<AccountData> => {
  return Promise.resolve({
    lastLogin: {
      title: 'Last Logged In',
      time: 'Today at 10:45 AM',
      location: 'from Chicago',
    },
    identityStatus: {
      title: 'Identity Status',
      status: 'Fully Verified (Level 2)',
    },
    legacyContact: {
      title: 'Legacy Contact',
      info : 'No legacy contact set',
    },
  });
};