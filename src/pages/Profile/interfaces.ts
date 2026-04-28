import type { ProfileTabMetadata, ProfileTabKey } from './ProfileTabs/interface';

export interface ProfilePageViewProps {
  tabs: ProfileTabMetadata[];
  activeTab: ProfileTabKey;
  activeTabMeta?: ProfileTabMetadata;
  components: Record<ProfileTabKey, React.ComponentType>;
  onTabChange: (tab: ProfileTabKey) => void;
}
