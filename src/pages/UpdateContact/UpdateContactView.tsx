import Card from '../../common/components/Card';
import CardContent from '../../common/components/Card/CardContent';
import Typography from '../../common/components/Typography/Typography';
import TextField from '../../common/components/TextField/TextField';
import Select from '../../common/components/Select';
import Button from '../../common/components/Button/Button';

import contactConfig from '../../config/contact.json';
import type { UpdateContactViewProps } from './interfaces';

type ExtendedProps = UpdateContactViewProps & {
  onUpdatePhone: () => void;
  onUpdateEmail: () => void;
  onUpdateAddress: () => void;
};

const UpdateContactView = ({
  formData,
  verificationData,
  contactHistory,
  pendingContact,
  showHistory,
  showReverification,
  showSuccessMessage,
  onInputChange,
  onToggleHistory,
  onClearHistory,
  onCancelVerification,
  onConfirmVerification,
  onUpdatePhone,
  onUpdateEmail,
  onUpdateAddress,
}: ExtendedProps) => {
  const getSelectLabel = (options: { value: string; label: string }[], value: string) =>
    options.find(o => o.value === value)?.label || value;

  const isVerificationCodeValid = /^\d{6}$/.test(verificationData.verificationCode.value || '');

  // Render
  return (
    <div className='min-h-screen w-full bg-(--bg-section-alt) text-(--text-primary) p-(--space-4)'>
      <div className='grid grid-cols-12 gap-(--space-6) w-full max-w-(--container-max-width) mx-auto items-start'>
        {/* LEFT COLUMN */}
        <div className='col-span-12 xl:col-span-8 flex flex-col gap-(--space-6)'>
          <Card
            className='bg-(--bg-surface) rounded-xl shadow-(--shadow-lg) overflow-hidden'
            variant='outlined-raised'
          >
            <div className='px-(--space-6) py-(--space-4) bg-(--bg-muted)'>
              <Typography variant='h2' className='text-(--text-heading) text-center'>
                Update Contact Details
              </Typography>
            </div>

            <CardContent className='p-(--space-6) grid grid-cols-12 gap-(--space-6)'>
              {/* PHONE */}
              <div className='col-span-12 md:col-span-6 flex flex-col gap-(--space-3)'>
                <TextField {...formData.phone} onChange={onInputChange} />
                <Button variant='contained' color='primary' fullWidth onClick={onUpdatePhone}>
                  Update Phone
                </Button>
              </div>

              {/* EMAIL */}
              <div className='col-span-12 md:col-span-6 flex flex-col gap-(--space-3)'>
                <TextField {...formData.email} onChange={onInputChange} />
                <Button variant='contained' color='primary' fullWidth onClick={onUpdateEmail}>
                  Update Email
                </Button>
              </div>

              {/* ADDRESS */}
              <div className='col-span-12 flex flex-col gap-(--space-4)'>
                <div className='grid grid-cols-12 gap-(--space-4)'>
                  <div className='col-span-12 md:col-span-6'>
                    <TextField {...formData.streetAddress} onChange={onInputChange} />
                  </div>
                  <div className='col-span-12 md:col-span-6'>
                    <TextField {...formData.aptNumber} onChange={onInputChange} />
                  </div>
                  <div className='col-span-12 md:col-span-6'>
                    <Select {...formData.city} onChange={onInputChange} />
                  </div>
                  <div className='col-span-12 md:col-span-6'>
                    <Select {...formData.state} disabled />
                  </div>
                  <div className='col-span-12 md:col-span-6'>
                    <TextField {...formData.zipcode} onChange={onInputChange} />
                  </div>
                  <div className='col-span-12 md:col-span-6'>
                    <TextField {...formData.country} onChange={onInputChange} />
                  </div>
                </div>

                <Button variant='contained' color='primary' fullWidth onClick={onUpdateAddress}>
                  Update Address
                </Button>
              </div>
            </CardContent>

            {/* FOOTER */}
            <CardContent className='border-t border-(--border-color) bg-(--bg-page) px-(--space-6) py-(--space-5)'>
              <div className='grid grid-cols-1 gap-(--space-3) md:grid-cols-2'>
                <Button variant='contained' color='primary' fullWidth onClick={onToggleHistory}>
                  {showHistory ? 'Hide History' : 'Show History'}
                </Button>

                <Button variant='outlined' color='primary' fullWidth onClick={onClearHistory}>
                  Clear History
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className='col-span-12 xl:col-span-4'>
          {showHistory && contactHistory.length > 0 && (
            <Card
              className='bg-(--bg-surface) rounded-xl shadow-(--shadow-lg) overflow-hidden'
              variant='outlined-raised'
            >
              <div className='px-(--space-6) py-(--space-4) bg-(--bg-muted)'>
                <Typography variant='h2' className='text-(--text-heading) text-center'>
                  Contact History
                </Typography>
              </div>

              <CardContent className='p-(--space-5) flex flex-col gap-(--space-4)'>
                {contactHistory.map((c, i) => (
                  <div
                    key={i}
                    className='border border-(--border-color) rounded-md p-(--space-4) bg-(--bg-section-alt)'
                  >
                    {c.phone && (
                      <Typography variant='body2' className='mb-(--space-2)'>
                        <strong>Phone:</strong> {c.phone}
                      </Typography>
                    )}
                    {c.email && (
                      <Typography variant='body2' className='mb-(--space-2)'>
                        <strong>Email:</strong> {c.email}
                      </Typography>
                    )}
                    {c.streetAddress && (
                      <>
                        <Typography variant='body2' className='mb-(--space-2)'>
                          <strong>Address:</strong> {c.streetAddress}
                          {c.aptNumber && `, Apt ${c.aptNumber}`}
                        </Typography>
                        <Typography variant='body2'>
                          {getSelectLabel(contactConfig.city.options, c.city)},{' '}
                          {getSelectLabel(contactConfig.state.options, c.state)} {c.zipcode}
                        </Typography>
                      </>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* VERIFICATION */}
      {showReverification && pendingContact && (
        <div className='fixed inset-0 z-(--z-modal) flex items-center justify-center px-(--space-4)'>
          <div
            className='absolute inset-0'
            style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)' }}
            onClick={onCancelVerification}
          />

          <Card
            className='relative z-(--z-modal) w-full max-w-md overflow-hidden'
            variant='outlined-raised'
          >
            <CardContent className='p-(--space-6) flex flex-col gap-(--space-4)'>
              <Typography variant='h3' className='text-(--text-heading) text-center'>
                Re-verify Contact Details
              </Typography>

              <Typography variant='body2' className='text-(--text-secondary) text-center'>
                Please select how you’d like to re-verify your updated contact details.
              </Typography>

              <Select {...verificationData.verificationMethod} onChange={onInputChange} />

              <TextField {...verificationData.verificationCode} onChange={onInputChange} />

              <div className='flex flex-col gap-(--space-3) sm:flex-row sm:justify-end'>
                <Button
                  variant='contained'
                  color='primary'
                  className='w-full sm:w-auto'
                  disabled={!isVerificationCodeValid}
                  onClick={onConfirmVerification}
                >
                  Continue Verification
                </Button>

                <Button
                  variant='outlined'
                  className='w-full sm:w-auto'
                  onClick={onCancelVerification}
                >
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* SUCCESS TOAST */}
      {showSuccessMessage && (
        <div className='fixed top-(--space-6) right-(--space-6) z-(--z-toast)'>
          <div className='flex items-center gap-(--space-3) rounded-lg bg-(--color-success) px-(--space-5) py-(--space-3) text-(--text-inverse) shadow-(--shadow-lg)'>
            <span>Contact details updated successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateContactView;
