import PaperlessPreferences from '../PaperlessPreferences';
import Settings from '../Settings';

const SettingsTab = () => {
  return (
    <div>
      {/* Add Account Settings related features here */}
      <Settings />
      <PaperlessPreferences />
    </div>
  );
};

export default SettingsTab;
