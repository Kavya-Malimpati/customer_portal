import PersonalDetails from '.';
import type { PersonalDetailsData } from '.';

const sampleData: PersonalDetailsData = {
  firstName: 'John',
  middleName: 'Michael',
  lastName: 'Smith',
  dateOfBirth: '1995-06-15',
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
