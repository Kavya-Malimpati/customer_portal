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
    <div className='p-(--space-6)' style={{ backgroundColor: 'var(--bg-page)' }}>
      {/* Heading & Subheading */}
      {activeTabMeta && (
        <div className='mb-(--space-6)'>
          <Typography variant='h2' className='text-(--text-heading)'>
            {activeTabMeta.heading}
          </Typography>
          <Typography className='text-(--text-secondary) mt-(--space-2)'>
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