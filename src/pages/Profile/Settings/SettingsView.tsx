import {Card,CardContent,Typography,Select,Button,Toggle,Checkbox} from '../../../common/components';
import type { SettingsUIProps } from './Interface';
import {FiSun,FiMoon,FiChevronRight,FiKey,FiSmartphone,FiShield,FiSettings,FiClipboard,FiLock} from 'react-icons/fi';
import { MdOutlinePalette } from 'react-icons/md';
import PaperlessPreferences from '../PaperlessPreferences';
import './SettingsView.css';

const SettingsUI = ({
  preferences,
  handleSavePreferences,
  handleDiscardPreferences,
  handlePreferenceChange,
}: SettingsUIProps) => {
  return (
    <main className='settings-page'>
      <div className='settings-container'>
        <div className='settings-grid'>
          <div className='settings-left'>
            <PaperlessPreferences />
            <Card variant='outlined-raised' size='lg'>
              <CardContent>
                <div className='settings-card-section'>
                  <div className='notification-header'>
                    <div>
                      <Typography variant='h4' color='primary'>
                        Notification Preferences
                      </Typography>
                      <Typography variant='body2' color='secondary'>
                        How we should contact you for different updates.
                      </Typography>
                    </div>
                    <FiSettings size={22} className='settings-muted-icon' />
                  </div>

                  <div className='notification-list'>
                    <div className='notification-row'>
                      <div className='notification-info'>
                        <FiShield size={20} className='settings-muted-icon notification-icon' />

                        <div>
                          <Typography variant='h5' color='primary'>
                            Policy Updates
                          </Typography>
                          <Typography
                            variant='subtitle2'
                            color='secondary'
                          >
                            Renewals, policy changes, and coverage alerts.
                          </Typography>
                        </div>
                      </div>

                      <div className='notification-actions'>
                        <Checkbox
                          id='policy-email'
                          checked={preferences.alerts.policyEmail}
                          onChange={e =>
                            handlePreferenceChange({
                              alerts: {
                                ...preferences.alerts,
                                policyEmail: e.target.checked,
                              },
                            })
                          }
                          label='Email'
                        />

                        <Checkbox
                          id='policy-sms'
                          checked={preferences.alerts.policySms}
                          onChange={e =>
                            handlePreferenceChange({
                              alerts: {
                                ...preferences.alerts,
                                policySms: e.target.checked,
                              },
                            })
                          }
                          label='SMS'
                        />
                      </div>
                    </div>

                    <div className='notification-row'>
                      <div className='notification-info'>
                        <FiClipboard size={20} className='settings-muted-icon notification-icon' />

                        <div>
                          <Typography variant='h5' color='primary'>
                            Claims Alerts
                          </Typography>
                          <Typography
                            variant='body2'
                            color='secondary'   
                            style={{
                              fontSize: 'var(--font-size-xs)',
                            }}
                          >
                            Status changes, payment confirmations, and requests.
                          </Typography>
                        </div>
                      </div>

                      <div className='notification-actions'>
                        <Checkbox
                          id='claims-email'
                          checked={preferences.alerts.claimsEmail}
                          onChange={e =>
                            handlePreferenceChange({
                              alerts: {
                                ...preferences.alerts,
                                claimsEmail: e.target.checked,
                              },
                            })
                          }
                          label='Email'
                        />

                        <Checkbox
                          id='claims-sms'
                          checked={preferences.alerts.claimsSms}
                          onChange={e =>
                            handlePreferenceChange({
                              alerts: {
                                ...preferences.alerts,
                                claimsSms: e.target.checked,
                              },
                            })
                          }
                          label='SMS'
                        />
                      </div>
                    </div>

                    <div className='notification-row'>
                      <div className='notification-info'>
                        <FiLock size={20} className='settings-muted-icon notification-icon' />

                        <div>
                          <Typography variant='h5' color='primary'>
                            Security & Billing
                          </Typography>
                          <Typography
                            variant='body2'
                            color='secondary'
                            style={{
                              fontSize: 'var(--font-size-xs)',
                            }}
                          >
                            Login alerts, password resets, and invoice reminders.
                          </Typography>
                        </div>
                      </div>

                      <div className='notification-actions'>
                        <Checkbox
                          id='billing-email'
                          checked={preferences.alerts.billingEmail}
                          onChange={e =>
                            handlePreferenceChange({
                              alerts: {
                                ...preferences.alerts,
                                billingEmail: e.target.checked,
                              },
                            })
                          }
                          label='Email'
                        />

                        <Checkbox
                          id='billing-sms'
                          checked={preferences.alerts.billingSms}
                          onChange={e =>
                            handlePreferenceChange({
                              alerts: {
                                ...preferences.alerts,
                                billingSms: e.target.checked,
                              },
                            })
                          }
                          label='SMS'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className='settings-right'>
            <Card variant='outlined-raised' size='sm'>
              <CardContent>
                <div className='settings-card-section'>
                  <div className='section-title'>
                    <MdOutlinePalette size={20} />
                    <Typography variant='h4' color='primary'>
                      Display
                    </Typography>
                  </div>

                  <Select
                    id='language-select'
                    label='Primary Language'
                    value={preferences.display.language}
                    options={[
                      { label: 'English (US)', value: 'english' },
                      { label: 'Spanish', value: 'spanish' },
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
                  <div className='theme-section'>
                    <Typography variant='subtitle1' color='secondary'>
                      Interface Theme
                    </Typography>

                    <div className='theme-grid'>
                      <Button
                        fullWidth
                        variant='outlined'
                        color='primary'
                        disableElevation
                        className={`theme-btn ${preferences.display.theme === 'light' ? 'theme-btn-active' : ''}`}
                        onClick={() =>
                          handlePreferenceChange({
                            display: {
                              ...preferences.display,
                              theme: 'light',
                            },
                          })
                        }
                        style={{
                          border:
                            preferences.display.theme === 'light'
                              ? '3px solid var(--color-primary)'
                              : '1px solid var(--color-black)',
                          color:
                            preferences.display.theme === 'light'
                              ? 'var(--text-primary)'
                              : 'var(--color-primary)',
                        }}
                      >
                        <div className='theme-btn-inner'>
                          <FiSun size={18} />
                          <span>Light</span>
                        </div>
                      </Button>

                      <Button
                        fullWidth
                        variant='outlined'
                        color='primary'
                        disableElevation
                        className={`theme-btn ${preferences.display.theme === 'dark' ? 'theme-btn-active' : ''}`}
                        onClick={() =>
                          handlePreferenceChange({
                            display: {
                              ...preferences.display,
                              theme: 'dark',
                            },
                          })
                        }
                        style={{
                          border:
                            preferences.display.theme === 'dark'
                              ? '3px solid var(--color-primary)'
                              : '1px solid var(--color-black)',
                          color:
                            preferences.display.theme === 'dark'
                              ? 'var(--text-primary)'
                              : 'var(--color-primary)',
                        }}
                      >
                        <div className='theme-btn-inner'>
                          <FiMoon size={18} />
                          <span>Dark</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className='account-card'>
              <CardContent>
                <div className='account-content'>
                  <div className='account-header'>
                    <FiShield size={20} className='account-icon' />
                    <Typography
                      variant='h4'
                      color='inverse'
                      className='account-title'
                    >
                      Account Security
                    </Typography>
                  </div>

                  <Button fullWidth className='account-btn'>
                    <div className='account-btn-inner'>
                      <FiKey size={16} />
                      <span className='account-btn-text'>Change Password</span>
                      <FiChevronRight size={16} />
                    </div>
                  </Button>

                  <Button fullWidth className='account-btn'>
                    <div className='account-btn-inner'>
                      <FiSmartphone size={16} />
                      <span className='account-btn-text'>Two-Factor Auth</span>
                      <FiChevronRight size={16} />
                    </div>
                  </Button>
                </div>
              </CardContent>
            </div>

            <Card variant='outlined-raised' size='md' className='sms-card'>
              <CardContent>
                <div className='sms-content'>
                  <div className='sms-header'>
                    <Typography
                      variant='h4'
                      color='primary'
                      className='sms-title'
                    >
                      SMS Enrollment
                    </Typography>

                    <FiSettings size={20} className='sms-icon' />
                  </div>

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
                    <Typography
                      variant='body2'
                      style={{
                        fontSize: 'var(--font-size-xs)',
                      }}
                      className='sms-disabled-text'
                    >
                      Enable Text Enrollment to configure SMS settings
                    </Typography>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className='settings-footer'>
          <Button variant='outlined' onClick={handleDiscardPreferences}>
            Discard Changes
          </Button>

          <Button onClick={handleSavePreferences}>Save Preferences</Button>
        </div>

        {preferences.saved && (
          <Typography variant='body2' color='success'>
            ✓ Your settings are saved
          </Typography>
        )}

        {preferences.discarded && (
          <Typography variant='body2' color='error'>
            X Changes discarded
          </Typography>
        )}
      </div>
    </main>
  );
};
export default SettingsUI;
