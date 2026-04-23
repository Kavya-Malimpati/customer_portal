import{Card, CardContent,Typography,Select,Button,Toggle }from '../../../common/components';
import type { SettingsUIProps } from './Interface';

const SettingsUI = ({
  preferences,
  handleSavePreferences,
  handlePreferenceChange,
}: SettingsUIProps) => {
  return (
    <main className='flex-1 w-full px-4 py-6 md:px-6 md:py-10 lg:px-8 lg:py-12'>
      <div className='mx-auto max-w-4xl space-y-6'>
        <section className='mb-10 text-center'>
          <Typography
            variant='h1'
            className='text-lg md:text-xl font-semibold mb-2'
            style={{ color: 'var(--text-heading)' }}
          >
            Settings
          </Typography>
        </section>

        <Card variant='outlined-raised' size='lg'>
          <CardContent>
            <div className='space-y-4'>
              <Typography variant='h2' style={{ color: 'var(--text-heading)' }}>
                Notification Settings
              </Typography>

              <div className='grid gap-4'>
                <Toggle
                  id='notification-policies'
                  checked={preferences.notifications.policies}
                  onChange={e =>
                    handlePreferenceChange({
                      notifications: {
                        ...preferences.notifications,
                        policies: e.target.checked,
                      },
                    })
                  }
                  aria-label='Policy Updates'
                  label='Policy Updates'
                />

                <Toggle
                  id='notification-billing'
                  checked={preferences.notifications.billing}
                  onChange={e =>
                    handlePreferenceChange({
                      notifications: {
                        ...preferences.notifications,
                        billing: e.target.checked,
                      },
                    })
                  }
                  aria-label='Billing Alerts'
                  label='Billing Alerts'
                />

                <Toggle
                  id='notification-claims'
                  checked={preferences.notifications.claims}
                  onChange={e =>
                    handlePreferenceChange({
                      notifications: {
                        ...preferences.notifications,
                        claims: e.target.checked,
                      },
                    })
                  }
                  aria-label='Claims Updates'
                  label='Claims Updates'
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card variant='outlined-raised' size='lg'>
          <CardContent>
            <div className='space-y-4'>
              <Typography variant='h2' style={{ color: 'var(--text-heading)' }}>
                Communication Channels
              </Typography>

              <div className='grid gap-4'>
                <Toggle
                  id='alert-email'
                  checked={preferences.alerts.email}
                  onChange={e =>
                    handlePreferenceChange({
                      alerts: {
                        ...preferences.alerts,
                        email: e.target.checked,
                      },
                    })
                  }
                  aria-label='Email Alerts'
                  label='Email Alerts'
                />

                <Toggle
                  id='alert-sms'
                  checked={preferences.alerts.sms}
                  disabled={!preferences.smsEnrollment.textEnrollment}
                  onChange={e =>
                    handlePreferenceChange({
                      alerts: {
                        ...preferences.alerts,
                        sms: e.target.checked,
                      },
                    })
                  }
                  aria-label='SMS Alerts'
                  label='SMS Alerts'
                />

                <Toggle
                  id='alert-portal'
                  checked={preferences.alerts.portal}
                  onChange={e =>
                    handlePreferenceChange({
                      alerts: {
                        ...preferences.alerts,
                        portal: e.target.checked,
                      },
                    })
                  }
                  aria-label='Portal Notifications'
                  label='Portal Notifications'
                />
              </div>
            </div>
          </CardContent>
        </Card>

       <Card variant='outlined-raised' size='lg'>
  <CardContent>
    <div className='space-y-4'>
      <Typography variant='h2' style={{ color: 'var(--text-heading)' }}>SMS Enrollment</Typography>

      <Toggle
        id='sms-enroll-main'
        checked={preferences.smsEnrollment.textEnrollment}
        onChange={e =>
          handlePreferenceChange({
            smsEnrollment: {
              ...preferences.smsEnrollment,
              textEnrollment: e.target.checked,
            },
          })
        }
        label='Enable Text Enrollment'
      />


      {!preferences.smsEnrollment.textEnrollment && (
        <Typography variant='body2' style={{ color: 'gray' }}>
          Enable Text Enrollment to configure SMS settings
        </Typography>
      )}
    </div>
  </CardContent>
</Card>

        <Card variant='outlined-raised' size='lg'>
          <CardContent>
            <div className='space-y-6'>
              <Typography variant='h2' style={{ color: 'var(--text-heading)' }}>
                Display Settings
              </Typography>

              <div className='space-y-6'>
                <div className='w-full max-w-md'>
                  <Select
                    id='language-select'
                    label='Language'
                    value={preferences.display.language}
                    options={[
                      { label: 'English', value: 'english' },
                      { label: 'Spanish', value: 'spanish' }
                    ]}
                    onChange={e =>
                      handlePreferenceChange({
                        display: {
                          ...preferences.display,
                          language: e.target.value,
                        },
                      })
                    }
                  />
                </div>

                <div>
                  <Typography variant='subtitle1' style={{ color: 'var(--text-heading)' }}>
                    Theme
                  </Typography>

                  <div className='mb-4 flex flex-wrap gap-3'>
                    {(['light', 'dark', 'system'] as const).map(themeOption => (
                      <Button
                        key={themeOption}
                        variant={
                          preferences.display.theme === themeOption ? 'contained' : 'outlined'
                        }
                        onClick={() =>
                          handlePreferenceChange({
                            display: {
                              ...preferences.display,
                              theme: themeOption,
                            },
                          })
                        }
                      >
                        {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                      </Button>
                    ))}
                  </div>

                  <Button onClick={handleSavePreferences}>Save preferences</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {preferences.saved && (
          <div>
            <Typography variant='body2' style={{ color: 'var(--success-color)' }}>
              ✓ Your settings are saved
            </Typography>
          </div>
        )}
      </div>
    </main>
  );
};

export default SettingsUI;