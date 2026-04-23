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
  onBack,
}: UpdateContactViewProps) => {
  const getSelectLabel = (options: { value: string; label: string }[], value: string) =>
    options.find(o => o.value === value)?.label || value;

  return (
    <div className='min-h-screen w-full bg-(--bg-section-alt) text-(--text-primary) p-(--space-4)'>
      <div className='grid grid-cols-12 gap-(--space-6) w-full max-w-(--container-max-width) mx-auto items-start'>
        {/* LEFT COLUMN – FORM */}
        <div className='col-span-12 xl:col-span-8 flex flex-col gap-(--space-6)'>
          <Card>
            <CardContent className='flex flex-col gap-(--space-6)'>
              <div className='px-(--space-6) pt-(--space-6)'>
                <Typography variant='h1'>Update Contact Details</Typography>
              </div>

              <form onSubmit={onSubmit} noValidate className='flex flex-col gap-(--space-6)'>
                <Card>
                  <CardContent className='p-(--space-6)'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-(--space-4)'>
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
                <div className='grid grid-cols-1 sm:grid-cols-4 gap-(--space-3) pt-(--space-6)'>
                  <Button type='button' variant='outlined' onClick={onBack}>
                    Back
                  </Button>

                  <Button type='submit' variant='contained' color='primary'>
                    Save Changes
                  </Button>

                  <Button type='button' variant='contained' onClick={onToggleHistory}>
                    {showHistory ? 'Hide History' : 'Show History'}
                  </Button>

                  <Button
                    type='button'
                    variant='contained'
                    color='secondary'
                    onClick={onClearHistory}
                  >
                    Clear History
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN – CONTACT HISTORY */}
        <div className='col-span-12 xl:col-span-4 flex flex-col gap-(--space-6)'>
          {showHistory && contactHistory.length > 0 && (
            <Card className='w-full'>
              <div className='px-(--space-6) py-(--space-4)'>
                <Typography variant='h2' className='text-(--text-heading)'>
                  Contact History
                </Typography>
              </div>

              <CardContent className='flex flex-col gap-(--space-6)'>
                {contactHistory.map((c, i) => (
                  <div
                    key={i}
                    className='
                      border
                      border-(--border-color)
                      rounded-(--rounded-lg)
                      p-(--space-4)
                      bg-(--bg-surface)
                    '
                  >
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

      {/* RE-VERIFICATION MODAL */}
      <Modal
        isOpen={showReverification && pendingContact !== null}
        onClose={onCancelVerification}
        title='Re-verify Contact Details'
      >
        <div className='flex flex-col gap-(--space-4)'>
          <Select {...verificationData.verificationMethod} onChange={onInputChange} />
          <TextField
            {...verificationData.verificationCode}
            onChange={onInputChange}
            disabled={!verificationData.verificationMethod.value}
          />

          <div className='flex justify-end gap-(--space-3)'>
            <Button variant='outlined' onClick={onCancelVerification}>
              Cancel
            </Button>
            <Button
              variant='contained'
              disabled={!verificationData.verificationCode}
              onClick={onConfirmVerification}
            >
              Continue
            </Button>
          </div>
        </div>
      </Modal>

      {/* CLEAR HISTORY MODAL */}
      <Modal
        isOpen={showClearHistoryModal}
        onClose={onCancelClearHistory}
        title='Clear Contact History'
      >
        <div className='flex flex-col gap-(--space-4)'>
          <Typography className='text-(--text-secondary)'>
            Are you sure you want to permanently delete all contact history? This action cannot be
            undone.
          </Typography>

          <div className='flex justify-end gap-(--space-3)'>
            <Button variant='outlined' onClick={onCancelClearHistory}>
              Cancel
            </Button>
            <Button variant='contained' color='secondary' onClick={onConfirmClearHistory}>
              Clear History
            </Button>
          </div>
        </div>
      </Modal>

      {/* SUCCESS TOAST */}
      {showSuccessMessage && (
        <div className='fixed top-(--space-6) right-(--space-6) z-(--z-toast)'>
          <div
            className='
              bg-(--color-success)
              text-(--text-inverse)
              px-(--space-5)
              py-(--space-3)
              rounded-(--rounded-lg)
              shadow-(--shadow-md)
            '
          >
            Contact details updated successfully.
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateContactView;