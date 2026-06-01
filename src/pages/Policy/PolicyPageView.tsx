import { Tabs, Tab } from '../../common/components/Tabs';
import Typography from '../../common/components/Typography/Typography';
import type { PolicyTabKey } from './PolicyTabs/interfaces';
import type { PolicyPageViewProps } from './interfaces';
import '../Policy/styles/PolicyPageView.css';

const PolicyPageView = ({
  tabs,
  activeTab,
  activeTabMeta,
  components,
  onTabChange,
}: PolicyPageViewProps) => {
  return (
    <div className='policy-page-tabs'>
      {/* Heading & Subheading */}
      {activeTabMeta && (
        <div className='policy-page-tab-heading'>
          <Typography variant='h2' color='primary'>
            {activeTabMeta.heading}
          </Typography>
          <Typography color='secondary' className='policy-page-tab-subheading'>
            {activeTabMeta.subheading}
          </Typography>
        </div>
      )}

      {/* Tabs Navigation */}
      <Tabs
        value={activeTab}
        onChange={value => onTabChange(value as PolicyTabKey)}
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
export default PolicyPageView;
