import type { PolicyTabMetadata, PolicyTabKey } from './PolicyTabs/interfaces';

export interface PolicyPageViewProps {
  tabs: PolicyTabMetadata[];
  activeTab: PolicyTabKey;
  activeTabMeta?: PolicyTabMetadata;
  components: Record<PolicyTabKey, React.ComponentType>;
  onTabChange: (tab: PolicyTabKey) => void;
}
