import {
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  Modal
} from '../../../common/components';

import { FiArrowLeft } from 'react-icons/fi';
import type { UpdateContactViewProps } from './interfaces';

import './UpdateContactView.css';

const UpdateContactView = ({
  formData,
  onChange,
  onSubmit,
  onBack,
  isConfirmOpen,
  onCloseModal,
  onConfirm
}: UpdateContactViewProps) => {

  const fullName = 'John Michael Smith';

  const handleSubmitClick = () => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    form?.requestSubmit();
  };

  return (
    <div className="edit-container">


      <div className="edit-header">
        <div className="edit-header-left" onClick={onBack}>
          <FiArrowLeft size={16} />
          <Typography variant="body1">Edit Contact</Typography>
        </div>
      </div>


      <div className="edit-content">
        <CardContent>

      
          <div className="profile-section">
            <Typography variant="h2" color='primary' className="profile-name">
             
              {fullName}
            </Typography>

            <Typography className="profile-subtext">
              Policyholder since 2018
            </Typography>
          </div>

    
          <form
            id="contact-form"
            onSubmit={onSubmit}
            noValidate
            className="form-wrapper"
          >
            <div className="form-grid">
              <TextField {...formData.phone} onChange={onChange} />
              <TextField {...formData.email} onChange={onChange} />
              <TextField {...formData.streetAddress} onChange={onChange} />
              <TextField {...formData.aptNumber} onChange={onChange} />
              <TextField {...formData.city} onChange={onChange} />
              <Select {...formData.state} onChange={onChange} />
              <TextField {...formData.zipcode} onChange={onChange} />
              <TextField {...formData.country} onChange={onChange} />
            </div>
          </form>

          <div className="extra-space" />

        </CardContent>
      </div>

  
      <div className="edit-footer">
        <Button variant="outlined" onClick={onBack}  fullWidth>
          Cancel
        </Button>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmitClick}
        >
          Save Changes
        </Button>
      </div>


      <Modal
        isOpen={!!isConfirmOpen}
        onClose={onCloseModal}
        title="Confirm Save"
      >
        <Typography>
          Are you sure you want to save the changes?
        </Typography>

        <div className="modal-actions">
          <Button variant="outlined" onClick={onCloseModal}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            Save Changes
          </Button>
        </div>
      </Modal>

    </div>
  );
};

export default UpdateContactView;