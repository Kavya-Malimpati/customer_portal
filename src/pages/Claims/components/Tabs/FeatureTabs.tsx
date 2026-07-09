import { Tabs, Tab } from '../../../../common/components/Tabs';

interface Props {
  value: number;
  onChange: (value: number) => void;
}

const FeatureTabs = ({
  value,
  onChange,
}: Props) => {
  return (
    <Tabs
      value={value}
      onChange={(value) => onChange(value as number)}
      variant="full-width"
    >
      <Tab
        value={0}
        label="Claims Tracking"
      />

      <Tab
        value={1}
        label="Schedule Inspection"
      />

      <Tab
        value={2}
        label="Risk Prevention"
      />
    </Tabs>
  );
};

export default FeatureTabs;