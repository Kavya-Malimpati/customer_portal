import { useNavigate } from 'react-router-dom';
import ViewContactDetailsView from './ContactDetailsView';

const ViewContactDetails = () => {
  const navigate = useNavigate();

  const contactData = {
    primaryPhone: '+91 9876543210',
    secondaryPhone: '+91 9123456780',
    email: 'joe@example.com',
    street: '123 Main Street',
    city: 'Hyderabad',
    state: 'Telangana',
    zipCode: '500032',
    preferredCommunication: 'Email',
    mailingSame: true,

    verification: {
      email: true,
      primaryPhone: true,
      secondaryPhone: false
    }
  };

  return (
    <ViewContactDetailsView
      contactData={contactData}
      navigate={navigate}
    />
  );
};

export default ViewContactDetails;