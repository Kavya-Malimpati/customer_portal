import type {
  StepContentProps,
} from '../../../common/components/MultiStepForm/types';

import QuoteSummaryView from './QuoteSummaryView';

const QuoteSummary = ({
  data,
}: StepContentProps) => {
  return (
    <QuoteSummaryView
      data={data || {}}
    />
  );
};

export default QuoteSummary;