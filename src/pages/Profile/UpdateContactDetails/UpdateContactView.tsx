import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Select,
  Modal,
} from '../../../common/components';

import contactConfig from '../../../config/updatecontactdetails.json';

import type { UpdateContactViewProps } from './interfaces';

const UpdateContactView = ({
  formData,
  verificationData,
  contactHistory,
  pendingContact,
  showHistory,
  showReverification,
  showSuccessMessage,
  showClearHistoryModal,
  onInputChange,
  onSubmit,
  onToggleHistory,
  onClearHistory,
  onConfirmClearHistory,
  onCancelClearHistory,
  onCancelVerification,
  onConfirmVerification,
}: UpdateContactViewProps) => {
  const getSelectLabel = (options: { value: string; label: string }[], value: string) =>
    options.find(o => o.value === value)?.label || value;

  return (
    <div className='min-h-screen w-full bg-(--bg-section-alt) text-(--text-primary) p-(--space-4)'>
      <div className='grid grid-cols-12 gap-(--space-6) w-full max-w-(--container-max-width) mx-auto items-start'>
        {/* LEFT COLUMN */}
        <div className='col-span-12 xl:col-span-8 flex flex-col gap-(--space-6)'>
          <Card className='w-full max-w-5xl'>
            <CardContent className='space-y-6'>
              <div className='px-6 pt-6'>
                <Typography variant='h1' className='text-left'>
                  Update Contact Details
                </Typography>
              </div>

              <form onSubmit={onSubmit} noValidate className='space-y-6'>
                <Card>
                  {/* PHONE */}
                  <CardContent className='space-y-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                      <TextField {...formData.phone} onChange={onInputChange} />
                      <TextField {...formData.email} onChange={onInputChange} />
                      <TextField {...formData.streetAddress} onChange={onInputChange} />
                      <TextField {...formData.aptNumber} onChange={onInputChange} />
                      <TextField {...formData.city} onChange={onInputChange} />
                      <Select {...formData.state} onChange={onInputChange} />
                      <TextField {...formData.zipcode} onChange={onInputChange} />
                      <TextField {...formData.country} onChange={onInputChange} />
                    </div>
                  </CardContent>
                </Card>

                {/* ACTIONS */}
                <div className='flex justify-between pt-4'>
                  <Button type='submit' variant='contained' color='primary'>
                    Save Changes
                  </Button>

                  <Button
                    variant='contained'
                    color='primary'
                    type='button'
                    onClick={onToggleHistory}
                  >
                    {showHistory ? 'Hide History' : 'Contact History'}
                  </Button>

                  <Button variant='outlined' color='primary' type='button' onClick={onClearHistory}>
                    Clear History
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className='col-span-12 xl:col-span-4 flex flex-col gap-(--space-6)'>
          {showHistory && contactHistory.length > 0 && (
            <Card className='w-full max-w-5xl'>
              <div className='px-6 py-4'>
                <Typography variant='h1'>Contact History</Typography>
              </div>

              <CardContent className='space-y-6'>
                {contactHistory.map((c, i) => (
                  <div key={i} className='border rounded-md p-4'>
                    <Typography variant='body2'>
                      <strong>Phone:</strong> {c.phone}
                    </Typography>
                    <Typography variant='body2'>
                      <strong>Email:</strong> {c.email}
                    </Typography>
                    <Typography variant='body2'>
                      <strong>Address:</strong> {c.streetAddress}, Apt {c.aptNumber}
                    </Typography>
                    <Typography variant='body2'>
                      {c.city}, {getSelectLabel(contactConfig.state.options, c.state)} {c.zipcode}
                    </Typography>
                    <Typography variant='body2'>
                      <strong>Country:</strong> {c.country}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Modal
        isOpen={showReverification && pendingContact !== null}
        onClose={onCancelVerification}
        title='Re-verify Contact Details'
        maxWidth='500px'
      >
        <div className='space-y-4'>
          <Select {...verificationData.verificationMethod} onChange={onInputChange} />
          <TextField
            {...verificationData.verificationCode}
            onChange={onInputChange}
            disabled={!verificationData.verificationMethod.value}
          />

          <div className='flex justify-end gap-(--space-3)'>
            <Button
              variant='contained'
              disabled={!verificationData.verificationCode}
              onClick={onConfirmVerification}
            >
              Continue
            </Button>
            <Button variant='outlined' onClick={onCancelVerification}>
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showClearHistoryModal}
        onClose={onCancelClearHistory}
        title='Clear Contact History'
        maxWidth='400px'
      >
        <div className='space-y-4'>
          <Typography className='text-(--text-secondary)'>
            Are you sure you want to permanently delete all contact history? This action cannot be
            undone.
          </Typography>

          <div className='flex justify-end gap-(--space-3)'>
            <Button variant='outlined' onClick={onCancelClearHistory}>
              Cancel
            </Button>
            <Button variant='contained' color='error' onClick={onConfirmClearHistory}>
              Clear History
            </Button>
          </div>
        </div>
      </Modal>

      {/* SUCCESS TOAST */}
      {showSuccessMessage && (
        <div className='fixed top-6 right-6'>
          <div className='bg-(--color-success) px-5 py-3 rounded-lg text-white'>
            Contact details updated successfully.
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateContactView;
