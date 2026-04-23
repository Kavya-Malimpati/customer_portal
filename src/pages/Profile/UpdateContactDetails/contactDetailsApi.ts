export const getContactDetailsApi = async () => {
  await new Promise(res => setTimeout(res, 500));

  return {
    phone: '1234567890',
    email: 'john@vam.com',
    streetAddress: '123 Main St',
    aptNumber: '4B',
    city: 'New York City',
    state: 'New York',
    zipcode: '10001',
    country: 'USA',
  };
};
