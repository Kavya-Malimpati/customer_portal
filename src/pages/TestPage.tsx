// pages/TestPage.tsx

import PageEngine from '../common/components/PageEngine/PageEngine';

const CustomerStep = () => {
  return <div>Customer Step</div>;
};

const PolicyStep = () => {
  return <div>Policy Step</div>;
};

const TestStep = () => {
  return <div>Test Step</div>;
};

const TestPage = () => {
  return (
    <PageEngine
      steps={[
        {
          id: 'customer',
          title: 'Customer Details',
          component: CustomerStep,
        },
        {
          id: 'policy',
          title: 'Policy Details',
          component: PolicyStep,
        },
        {
          id: 'test',
          title: 'Test Details',
          component: TestStep,
        },
      ]}
      onSubmit={data => {
        console.log(data);
      }}
      showStepLabels
    />
  );
};

export default TestPage;
