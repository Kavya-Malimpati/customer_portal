import { Tabs, Tab } from '../../common/components/Tabs';
import Typography from '../../common/components/Typography/Typography';
import type { ProfileTabKey } from './ProfileTabs/interface';
import type { ProfilePageViewProps } from './interfaces';

const ProfilePageView = ({
  tabs,
  activeTab,
  activeTabMeta,
  components,
  onTabChange,
}: ProfilePageViewProps) => {
  return (
    <div style={{ padding: 'var(--space-6)', backgroundColor: 'var(--bg-page)' }}>
      {/* Heading & Subheading */}
      {activeTabMeta && (
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <Typography variant='h2' color='heading'>
            {activeTabMeta.heading}
          </Typography>
          <Typography 
            color='secondary' 
            style={{ marginTop: 'var(--space-2)' }}
          >
            {activeTabMeta.subheading}
          </Typography>
        </div>
      )}

      {/* Tabs Navigation */}
      <Tabs
        value={activeTab}
        onChange={value => onTabChange(value as ProfileTabKey)}
        variant='basic'
      >
        {tabs.map(tab => (
          <Tab key={tab.key} value={tab.key} label={tab.label} />
        ))}
      </Tabs>

      {/*Tab content */}
      <div>
        {tabs.map(tab => {
          const Component = components[tab.key];
          return activeTab === tab.key && <Component key={tab.key} />;
        })}
      </div>
    </div>
  );
};
export default ProfilePageView;