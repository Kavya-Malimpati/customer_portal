import { useState } from 'react';
import PersonalDetailsDisplay from './PersonalDetailsDisplay';
import EditPersonalDetails from '../EditPersonalDetails/EditPersonalDetails';
import Modal from '../../../common/components/Modal'; 
import type { PersonalDetailsProps } from './Interfaces';

const PersonalDetails = ({ data }: PersonalDetailsProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleEditClick = () => {
    setIsOpen(true); 
  };

  return (
    <>
      <PersonalDetailsDisplay
        data={data}
        onEditClick={handleEditClick}
      />

      <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          maxHeight="90%"
          maxWidth="60%"
          fullScreen
        >
        <EditPersonalDetails onClose={() => setIsOpen(false)} />
      </Modal>
    </>
  );
};

export default PersonalDetails;