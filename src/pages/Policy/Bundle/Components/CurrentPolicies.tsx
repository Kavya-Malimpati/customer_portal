import {
  Typography,
} from '../../../../common/components';

import PolicyCard from './PolicyCard';

import type { Policy } from '../Interface';

interface CurrentPoliciesProps {
  autoPolicy: Policy;
  homePolicy: Policy;
  onAutoPolicyClick: () => void;
  onHomePolicyClick: () => void;
}

const CurrentPolicies = ({
  autoPolicy,
  homePolicy,
  onAutoPolicyClick,
  onHomePolicyClick,
}: CurrentPoliciesProps) => {
  return (
    <section className="bundle-section">

      <Typography
        variant="h4"
        className="bundle-section-title"
      >
        Current Policies
      </Typography>

      <div className="bundle-policy-grid">

        <PolicyCard
          policy={autoPolicy}
          onClick={onAutoPolicyClick}
        />

        <PolicyCard
          policy={homePolicy}
          onClick={onHomePolicyClick}
        />

      </div>

    </section>
  );
};

export default CurrentPolicies;