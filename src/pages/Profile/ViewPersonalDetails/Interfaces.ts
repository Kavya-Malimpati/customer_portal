export interface PersonalDetailsData {
  firstName: string;
  middleName?: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  maritalStatus: string;
  occupation: string;
  employmentStatus: string;
  preferredLanguage: string;
}

export interface PersonalDetailsProps {
  data: PersonalDetailsData;
}
