import {
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  Modal
} from '../../../common/components';

import { FiArrowLeft } from 'react-icons/fi';
import type { EditPersonalDetailsUiProps } from './Interfaces';

import './EditPersonalDetailsView.css';

const EditPersonalDetailsUi = ({
  formData,
  onChange,
  onSubmit,
  onBack,
  isConfirmOpen,
  onCloseModal,
  onConfirm
}: EditPersonalDetailsUiProps) => {

  const fullName = `${formData.firstName.value} ${formData.middleName.value} ${formData.lastName.value}`;

  const handleSubmitClick = () => {
    const form = document.getElementById('edit-form') as HTMLFormElement;
    form?.requestSubmit();
  };

  return (
    <div className="edit-container">

      
      <div className="edit-header">
        <div className="edit-header-left" onClick={onBack}>
          <FiArrowLeft size={16} />
          <Typography variant="body1">Edit Profile</Typography>
        </div>
      </div>

      
      <div className="edit-content">
        <CardContent>

          
          <div className="profile-section">
            <Typography variant="h2" className="profile-name">
              {fullName || 'User Name'}
            </Typography>

            <Typography className="profile-subtext">
              Policyholder since 2018
            </Typography>
          </div>

         
          <form
            id="edit-form"
            onSubmit={onSubmit}
            noValidate
            className="form-wrapper"
          >
            <div className="form-grid">
              <TextField {...formData.firstName} onChange={onChange} />
              <TextField {...formData.middleName} onChange={onChange} />
              <TextField {...formData.lastName} onChange={onChange} />

              <TextField {...formData.dateOfBirth} onChange={onChange} />
              <Select {...formData.gender} onChange={onChange} />
              <Select {...formData.maritalStatus} onChange={onChange} />

              <TextField {...formData.occupation} onChange={onChange} />
              <Select {...formData.employmentStatus} onChange={onChange} />
              <Select {...formData.preferredLanguage} onChange={onChange} />
            </div>
          </form>

          <div className="extra-space" />

        </CardContent>
      </div>

    
      <div className="edit-footer">
        <Button variant="outlined" onClick={onBack} fullWidth>
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

export default EditPersonalDetailsUi;