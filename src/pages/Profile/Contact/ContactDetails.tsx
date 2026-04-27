import { useState } from 'react';
import ViewContactDetailsView from './ContactDetailsView';
import Modal from '../../../common/components/Modal';
import UpdateContactDetails from '../UpdateContactDetails'; // adjust path

const ContactDetails = () => {

  const [isOpen, setIsOpen] = useState(false);

const contactData = {
  primaryPhone: '+1 (212) 555-7890',
  secondaryPhone: '+1 (646) 555-1234',
  email: 'John.smith@gmail.com',
  street: '1600 Broadway',
  city: 'New York',
  state: 'NY',
  zipCode: '10019',
  preferredCommunication: 'Email',
  mailingSame: true,
  verification: {
    email: true,
    primaryPhone: true,
    secondaryPhone: false
  }
};

  const handleEditClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <ViewContactDetailsView
        contactData={contactData}
        onEditClick={handleEditClick}  
      />

    
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
         maxHeight="90%"
        maxWidth="60%"
        fullScreen
      >
        <UpdateContactDetails />
      </Modal>
    </>
  );
};

export default ContactDetails;