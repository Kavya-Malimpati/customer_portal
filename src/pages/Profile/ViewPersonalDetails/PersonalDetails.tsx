import { useNavigate } from 'react-router-dom';
import PersonalDetailsDisplay from './PersonalDetailsView';
import type { PersonalDetailsProps } from './Interfaces';

const PersonalDetails = ({ data }: PersonalDetailsProps) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/edit-personal-details');
  };

  return (
    <PersonalDetailsDisplay
      data={data}
      onEditClick={handleEditClick}
    />
  );
};

export default PersonalDetails;

