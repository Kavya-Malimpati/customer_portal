import { useNavigate } from 'react-router-dom';
import { Tabs, Tab } from '../../common/components/Tabs';
import Typography from '../../common/components/Typography/Typography';
import { Button } from '../../common/components';
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
  const navigate = useNavigate();

  return (
    <div className="policy-page-tabs">
      {activeTabMeta && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
          }}
        >
          {/* Heading & Subheading */}
          <div className="policy-page-tab-heading">
            <Typography variant="h2" color='primary'>
              {activeTabMeta.heading}
            </Typography>

            <Typography
              color="secondary"
              className="policy-page-tab-subheading"
            >
              {activeTabMeta.subheading}
            </Typography>
          </div>

         {/* <div>
          {activeTab === 'homeowners' && (
            <Button onClick={() => navigate('/quoteHome')}>
              Get a Quote for Home
            </Button>
          )}

          {activeTab === 'personalAuto' && (
            <Button onClick={() => navigate('/quoteAuto')}>
              Get an Quote for Auto
            </Button>
          )}
        </div> */}

        <div
  style={{
    display: 'flex',
    gap: '12px',
    alignItems: 'center',
  }}
>
  {activeTab === 'homeowners' && (
    <>

      <Button
        onClick={() => navigate('/quoteHome')}
      >
        Get Quote for Home
      </Button>
    </>
  )}

  {activeTab === 'personalAuto' && (
    <>
      <Button
        variant="outlined"
        onClick={() => navigate('/bundle')}
      >
        Bundle
      </Button>

      <Button
        onClick={() => navigate('/quoteAuto')}
      >
        Get Quote for Auto
      </Button>
    </>
  )}
</div>
        </div>
      )}

      <Tabs
        value={activeTab}
        onChange={value => onTabChange(value as PolicyTabKey)}
        variant="basic"
      >
        {tabs.map(tab => (
          <Tab key={tab.key} value={tab.key} label={tab.label} />
        ))}
      </Tabs>

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