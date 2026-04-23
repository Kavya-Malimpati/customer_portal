import { useState } from 'react';

import tabsConfig from './ProfileTabs/tabs.json';
import type { ProfileTabMetadata, ProfileTabKey } from './ProfileTabs/interface';
import ProfileTab from './ProfileTabs/ProfileTab';
import DocumentsTab from './ProfileTabs/DocumentsTab';
import AgencyTab from './ProfileTabs/AgencyTab';
import SettingsTab from './ProfileTabs/SettingsTab';
import ProfilePageView from './ProfilePageView';


const COMPONENT_MAP: Record<ProfileTabKey, React.ComponentType> = {
  profile: ProfileTab,
  documents: DocumentsTab,
  agency: AgencyTab,
  settings: SettingsTab,
};
const tabs = tabsConfig as ProfileTabMetadata[];
const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<ProfileTabKey>('profile');
  const activeTabMetadata = tabs.find(tab => tab.key === activeTab);
  return (
    <ProfilePageView
      tabs={tabs}
      activeTab={activeTab}
      activeTabMeta={activeTabMetadata}
      components={COMPONENT_MAP}
      onTabChange={setActiveTab}
    />
  );
};
export default ProfilePage;
