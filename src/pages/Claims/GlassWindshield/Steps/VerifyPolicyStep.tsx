import { LabelValue } from '../../../../common/components';

import type { VerifyPolicyData } from '../Interface';

interface VerifyPolicyStepProps {
  data: VerifyPolicyData;
}

const VerifyPolicyStep = ({ data }: VerifyPolicyStepProps) => {
  return (
    <div className='glass-policy-grid'>
      <LabelValue label='Policy Number' value={data.policyNumber} />

      <LabelValue label='Vehicle' value={data.vehicle} />

      <LabelValue label='Coverage Eligibility' value={data.coverageEligibility} />

      <LabelValue label='Deductible' value={data.deductible} />
    </div>
  );
};

export default VerifyPolicyStep;
