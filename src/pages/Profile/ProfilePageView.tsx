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
    <div className='p-(--space-6)'>
      {/* Heading & Subheading */}
      {activeTabMeta && (
        <div className='mb-(--space-6)'>
          <Typography variant='h2'>{activeTabMeta.heading}</Typography>
          <Typography className='text-(--text-secondary)'>{activeTabMeta.subheading}</Typography>
        </div>
      )}
      <Tabs
        value={activeTab}
        onChange={value => onTabChange(value as ProfileTabKey)}
        variant='basic'
      >
        {/* Tab headers */}
        {tabs.map(tab => (
          <Tab key={tab.key} value={tab.key} label={tab.label} />
        ))}
      </Tabs>

      {/* Tab content - rendered outside Tabs */}
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
