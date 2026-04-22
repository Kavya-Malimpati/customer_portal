import PaperlessPreferences from '../PaperlessPreferences';
import Settings from '../Settings';

const SettingsTab = () => {
  return (
    <div>
      {/* Add Account Settings related features here */}
      <PaperlessPreferences />
      <Settings />
    </div>
  );
};

export default SettingsTab;
