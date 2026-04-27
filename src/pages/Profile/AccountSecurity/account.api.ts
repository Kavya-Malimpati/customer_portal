export interface AccountData {
  lastLogin: string;
  location: string;
  identityStatus: string;
  legacyContact: string | null;
}

export const getAccountData = async (): Promise<AccountData> => {
  return Promise.resolve({
    lastLogin: 'Today at 10:45 AM',
    location: 'Chicago, IL',
    identityStatus: 'Fully Verified (Level 2)',
    legacyContact: null,
  });
};