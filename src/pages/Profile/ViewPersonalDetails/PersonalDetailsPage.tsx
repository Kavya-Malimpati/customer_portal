import PersonalDetails from '.';
import type { PersonalDetailsData } from '.';

const sampleData: PersonalDetailsData = {
  firstName: 'Kanhaiya',
  middleName: '',
  lastName: 'Bhavsar',
  dateOfBirth: '2000-01-01',
  gender: 'male',
  maritalStatus: 'single',
  occupation: 'Software Engineer',
  employmentStatus: 'employed',
  preferredLanguage: 'english',
};

const PersonalDetailsPage = () => {
  return <PersonalDetails data={sampleData} />;
};

export default PersonalDetailsPage;
