import { Tabs, Tab } from '../../../../common/components/Tabs';

interface Props {
  value: 'auto' | 'home';
  autoCount: number;
  homeCount: number;
  onChange: (value: 'auto' | 'home') => void;
}

const PolicyTabs = ({
  value,
  autoCount,
  homeCount,
  onChange,
}: Props) => {
  return (
    <Tabs
      value={value}
      onChange={(value) => onChange(value as 'auto' | 'home')}
    >
      <Tab
        value="auto"
        label={`Auto Claims (${autoCount})`}
      />

      <Tab
        value="home"
        label={`Home Claims (${homeCount})`}
      />
    </Tabs>
  );
};

export default PolicyTabs;