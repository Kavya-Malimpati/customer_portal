export const getPersonalDetailsApi = async () => {
    await new Promise(res => setTimeout(res, 500));

    return {
        firstName: 'John',
        middleName: 'Michael',
        lastName: 'Smith',
        dateOfBirth: '1995-06-15',
        gender: 'male',
        maritalStatus: 'single',
        occupation: 'Software Engineer',
        employmentStatus: 'employed',
        preferredLanguage: 'english'
    };
};