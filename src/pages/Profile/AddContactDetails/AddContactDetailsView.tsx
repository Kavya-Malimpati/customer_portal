import { Button, Card, CardContent, Modal, Select, TextField } from '../../../common/components';
import CardFooter from '../../../common/components/Card/CardFooter';
import CardHeader from '../../../common/components/Card/CardHeader';
import Checkbox from '../../../common/components/Checkbox/Checkbox';

import type { AddContactDetailsViewProps } from './interfaces';

function AddContactDetailsView({
  formData,
  handleInputChange,
  handleSubmit,
  navigate,
  showConfirmModal,
  setShowConfirmModal,
  showSuccessModal,
  handleConfirmSubmit,
  handleSuccessModalClose,
}: AddContactDetailsViewProps) {
  return (
    <div className='min-h-screen flex justify-center items-center bg-gray-100 p-4'>
      <Card className='w-[600px] bg-white shadow-xl'>
        <CardHeader title='Add Contact Details' />

        <form onSubmit={handleSubmit}>
          <CardContent className='flex flex-col gap-4 p-6'>
            <TextField
              id={formData.primaryPhone.id}
              label={formData.primaryPhone.label}
              value={formData.primaryPhone.value as string}
              placeholder={formData.primaryPhone.placeholder}
              onChange={handleInputChange}
              hasError={formData.primaryPhone.hasError}
              errorMessage={formData.primaryPhone.errorMessage}
              isRequired={formData.primaryPhone.isRequired}
            />
            <TextField
              id={formData.secondaryPhone.id}
              label={formData.secondaryPhone.label}
              value={formData.secondaryPhone.value as string}
              placeholder={formData.secondaryPhone.placeholder}
              onChange={handleInputChange}
              hasError={formData.secondaryPhone.hasError}
              errorMessage={formData.secondaryPhone.errorMessage}
              isRequired={formData.secondaryPhone.isRequired}
            />
            <TextField
              id={formData.email.id}
              label={formData.email.label}
              value={formData.email.value as string}
              placeholder={formData.email.placeholder}
              onChange={handleInputChange}
              hasError={formData.email.hasError}
              errorMessage={formData.email.errorMessage}
              isRequired={formData.email.isRequired}
            />

            <TextField
              id={formData.street.id}
              label={formData.street.label}
              value={formData.street.value as string}
              placeholder={formData.street.placeholder}
              onChange={handleInputChange}
              hasError={formData.street.hasError}
              errorMessage={formData.street.errorMessage}
              isRequired={formData.street.isRequired}
            />
            <TextField
              id={formData.city.id}
              label={formData.city.label}
              value={formData.city.value as string}
              placeholder={formData.city.placeholder}
              onChange={handleInputChange}
              hasError={formData.city.hasError}
              errorMessage={formData.city.errorMessage}
              isRequired={formData.city.isRequired}
            />
            <Select
              id={formData.state.id}
              label={formData.state.label}
              value={formData.state.value as string}
              options={formData.state.options || []}
              onChange={handleInputChange}
              hasError={formData.state.hasError}
              errorMessage={formData.state.errorMessage}
              isRequired={formData.state.isRequired}
            />
            <TextField
              id={formData.zipCode.id}
              label={formData.zipCode.label}
              value={formData.zipCode.value as string}
              placeholder={formData.zipCode.placeholder}
              onChange={handleInputChange}
              hasError={formData.zipCode.hasError}
              errorMessage={formData.zipCode.errorMessage}
              isRequired={formData.zipCode.isRequired}
            />

            <Checkbox
              id='mailingSame'
              label={formData.mailingSame.label}
              checked={
                typeof formData.mailingSame.value === 'boolean' ? formData.mailingSame.value : false
              }
              onChange={handleInputChange}
              hasError={formData.mailingSame.hasError}
              errorMessage={formData.mailingSame.errorMessage}
            />

            <Select
              id={formData.preferredCommunication.id}
              label={formData.preferredCommunication.label}
              value={formData.preferredCommunication.value as string}
              options={formData.preferredCommunication.options || []}
              onChange={handleInputChange}
              hasError={formData.preferredCommunication.hasError}
              errorMessage={formData.preferredCommunication.errorMessage}
              isRequired={formData.preferredCommunication.isRequired}
            />
          </CardContent>

          <CardFooter className='flex justify-between p-6 border-t'>
            <Button type='button' onClick={() => navigate(-1)} variant='contained' color='primary'>
              Back
            </Button>

            <Button type='submit' variant='contained' color='primary'>
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Confirm Modal */}
      <Modal
        isOpen={showConfirmModal}
        onClose={() => setShowConfirmModal(false)}
        title='Confirm Submission'
        maxWidth='400px'
      >
        <CardContent className='p-6'>
          <p>Are you sure you want to add contact details?</p>
        </CardContent>

        <CardFooter className='flex justify-end gap-3 p-6 border-t'>
          <Button
            type='button'
            onClick={() => setShowConfirmModal(false)}
            className='bg-gray-300 text-gray-800 hover:bg-gray-400'
          >
            Cancel
          </Button>

          <Button
            type='button'
            onClick={handleConfirmSubmit}
            className='bg-[#23a50a] text-white hover:bg-[#1a7a08]'
          >
            Confirm
          </Button>
        </CardFooter>
      </Modal>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        title='Success'
        maxWidth='400px'
      >
        <CardContent className='p-6'>
          <p>Contact details added successfully ✅</p>
        </CardContent>

        <CardFooter className='flex justify-end p-6 border-t'>
          <Button
            type='button'
            onClick={handleSuccessModalClose}
            className='bg-[#23a50a] text-white hover:bg-[#1a7a08]'
          >
            OK
          </Button>
        </CardFooter>
      </Modal>
    </div>
  );
}

export default AddContactDetailsView;
