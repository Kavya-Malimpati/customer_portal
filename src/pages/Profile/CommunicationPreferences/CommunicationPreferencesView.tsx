import Card from '../../../common/components/Card';
import Typography from '../../../common/components/Typography/Typography';
import CardContent from '../../../common/components/Card/CardContent';
import Button from '../../../common/components/Button';
import Toggle from '../../../common/components/Toggle';

import { useCommunicationPreferences } from './useCommunicationPreferences';

const CommunicationPreferences = () => {
  const { prefs, saved, handleSave, handleToggle } = useCommunicationPreferences();

  return (
    <main
      className="flex-1 w-full px-6 py-12"
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      <div className="max-w-xl mx-auto">
        <Typography variant="h1" className="mb-2">
          Communication Preferences
        </Typography>

        <Card >
          <CardContent className="p-8 flex flex-col gap-6">
            <Toggle
             label="Email"
              id="email"
              checked={prefs.email}
              onChange={() => handleToggle('email')}
              aria-Label="Email communication preference"
             
            />
            <Toggle label="SMS"
              id="sms"
              checked={prefs.sms}
              onChange={() => handleToggle('sms')}
              aria-Label="SMS communication preference"
              
            />

          
            <Toggle
              
              id="portal"
              checked={prefs.portal}
              onChange={() => handleToggle('portal')}
              aria-Label="Portal communication preference"
              label="Portal"
            />

            <div className="mt-6">
              <Button
                variant="contained"
                color="primary"
                size="large"
                ariaLabel="Save communication preferences"
                type="button"
                onClick={handleSave}
              >
                Save
              </Button>
        
              {saved && (
                <Typography
                  variant="body2"
                  className="mt-2"
                  style={{ color: 'var(--color-success)' }}
                >
                  Preferences saved!
                </Typography>
              )}
            </div>

          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default CommunicationPreferences;