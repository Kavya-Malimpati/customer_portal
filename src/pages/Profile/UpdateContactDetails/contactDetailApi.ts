export const getContactDetailsApi = async () => {
  await new Promise(res => setTimeout(res, 500));

  return {
    phone: '5557890111',
    email: 'john.smith@gmail.com',
    streetAddress: '742 Evergreen Terrace',
    aptNumber: '4B',
    city: 'New York',
    state: 'NY',
    zipcode: '10001',
    country: 'USA',
  };
};