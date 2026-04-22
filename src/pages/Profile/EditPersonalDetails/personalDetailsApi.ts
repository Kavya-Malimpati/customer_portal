export const getPersonalDetailsApi = async () => {
    await new Promise(res => setTimeout(res, 500));

    return {
        firstName: 'Kanhaiya',
        middleName: '',
        lastName: 'Bhavsar',
        dateOfBirth: '2000-01-01',
        gender: 'male',
        maritalStatus: 'single',
        occupation: 'Software Engineer',
        employmentStatus: 'employed',
        preferredLanguage: 'english'
    };
};