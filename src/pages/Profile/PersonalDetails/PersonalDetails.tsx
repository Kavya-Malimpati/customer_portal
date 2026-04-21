import { useNavigate } from 'react-router-dom';
import PersonalDetailsDisplay from './PersonalDetailsDisplay';
import type { PersonalDetailsProps } from './Interfaces';

const PersonalDetails = ({ data }: PersonalDetailsProps) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/profile/edit');
  };

  return (
    <PersonalDetailsDisplay
      data={data}
      onEditClick={handleEditClick}
    />
  );
};

export default PersonalDetails;

