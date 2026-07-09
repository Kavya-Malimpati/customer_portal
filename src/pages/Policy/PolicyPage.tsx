import { useState } from 'react';
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import tabsConfig from './PolicyTabs/tabs.json';
import type {
  PolicyTabMetadata,
  PolicyTabKey,
} from './PolicyTabs/interfaces';

import PersonalAutoTab from './PolicyTabs/PersonalAutoTab';
import HomeownersTab from './PolicyTabs/HomeownersTab';
import PolicyPageView from './PolicyPageView';

const COMPONENT_MAP: Record<
  PolicyTabKey,
  React.ComponentType
> = {
  personalAuto: PersonalAutoTab,
  homeowners: HomeownersTab,
};

const tabs = tabsConfig as PolicyTabMetadata[];

const PolicyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const locationState = location.state as
    | { activeTab?: PolicyTabKey }
    | null;

  const initialTab =
    locationState?.activeTab ??
    (searchParams.get('tab') as PolicyTabKey) ??
    'personalAuto';

  const [activeTab, setActiveTab] =
    useState<PolicyTabKey>(initialTab);

  const handleTabChange = (
    tab: PolicyTabKey,
  ) => {
    setActiveTab(tab);

    navigate(`/policy?tab=${tab}`, {
      replace: true,
    });
  };

  const activeTabMetadata = tabs.find(
    tab => tab.key === activeTab,
  );

  return (
    <PolicyPageView
      tabs={tabs}
      activeTab={activeTab}
      activeTabMeta={activeTabMetadata}
      components={COMPONENT_MAP}
      onTabChange={handleTabChange}
    />
  );
};

export default PolicyPage;