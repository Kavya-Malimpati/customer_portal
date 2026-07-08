import RiskPreventionView from './RiskPreventionView';

import {
  autoRecommendations,
  homeRecommendations,
} from './RiskPrevention.data';

import type { Props } from './interface';

const RiskPrevention = ({ policy }: Props) => {
  const recommendations =
    policy === 'auto'
      ? autoRecommendations
      : homeRecommendations;

  const title =
    policy === 'auto'
      ? 'Vehicle Risk Prevention'
      : 'Home Risk Prevention';

  return (
    <RiskPreventionView
      title={title}
      recommendations={recommendations}
    />
  );
};

export default RiskPrevention;