import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  Modal
} from '../../../common/components';

import type { EditPersonalDetailsUiProps } from './Interfaces';

const EditPersonalDetailsUi = ({
  formData,
  onChange,
  onSubmit,
  onBack,
  isConfirmOpen,
  onCloseModal,
  onConfirm
}: EditPersonalDetailsUiProps) => {
  return (
    <div className='flex items-center justify-center p-4'>
      <div className='w-full max-w-2xl'>
        <Card>
          <Typography variant='h1'>Edit Personal Details</Typography>

          <form onSubmit={onSubmit} noValidate>
            <CardContent className='space-y-6'>

              <TextField {...formData.firstName} onChange={onChange} />
              <TextField {...formData.middleName} onChange={onChange} />
              <TextField {...formData.lastName} onChange={onChange} />
              <TextField {...formData.dateOfBirth} onChange={onChange} />
              <Select {...formData.gender} onChange={onChange} />
              <Select {...formData.maritalStatus} onChange={onChange} />
              <TextField {...formData.occupation} onChange={onChange} />
              <Select {...formData.employmentStatus} onChange={onChange} />
              <Select {...formData.preferredLanguage} onChange={onChange} />

              <div className="flex gap-3">
                <Button type="button" variant="outlined" onClick={onBack}>
                  Back
                </Button>

                <Button type="submit" variant="contained" color="primary">
                  Save Changes
                </Button>
              </div>

            </CardContent>
          </form>
        </Card>
      </div>

      <Modal
        isOpen={!!isConfirmOpen}
        onClose={onCloseModal}
        title="Confirm Save"
        slots={{
          actions: (
            <div className="flex gap-3 justify-end">
              <Button variant="outlined" onClick={onCloseModal}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={onConfirm}>
                Save Changes
              </Button>
            </div>
          )
        }}
      >
        <Typography>
          Are you sure you want to save the changes?
        </Typography>
      </Modal>
    </div>
  );
};

export default EditPersonalDetailsUi;