import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import tabsConfig from './PolicyTabs/tabs.json';
import type { PolicyTabMetadata, PolicyTabKey } from './PolicyTabs/interfaces';
import PersonalAutoTab from './PolicyTabs/PersonalAutoTab';
import HomeownersTab from './PolicyTabs/HomeownersTab';
import PolicyPageView from './PolicyPageView';


const COMPONENT_MAP: Record<PolicyTabKey, React.ComponentType> = {
  personalAuto: PersonalAutoTab,
  homeowners: HomeownersTab,
};
const tabs = tabsConfig as PolicyTabMetadata[];
const PolicyPage = () => {
  const location = useLocation();
  const locationState = location.state as { activeTab?: PolicyTabKey } | null;
  
  const [activeTab, setActiveTab] = useState<PolicyTabKey>(
    locationState?.activeTab || 'personalAuto'
  );

  useEffect(() => {
    if (locationState?.activeTab) {
      setActiveTab(locationState.activeTab);
    }
  }, [locationState?.activeTab]);

  const activeTabMetadata = tabs.find(tab => tab.key === activeTab);
  return (
    <PolicyPageView
      tabs={tabs}
      activeTab={activeTab}
      activeTabMeta={activeTabMetadata}
      components={COMPONENT_MAP}
      onTabChange={setActiveTab}
    />
  );
};
export default PolicyPage;
