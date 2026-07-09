import { useNavigate } from 'react-router-dom';

import RegisterFNOLView from './RegisterFNOLView';
import type { FNOLStep } from './Interface';

interface RegisterFNOLProps {
  policyType: 'auto' | 'home';
}

const RegisterFNOL = ({
  policyType,
}: RegisterFNOLProps) => {
  const navigate = useNavigate();

  const steps: FNOLStep[] = [
    {
      id: 1,
      title: 'Policy & Loss Type',
    },
    {
      id: 2,
      title: 'Incident Details',
    },
    {
      id: 3,
      title: 'Parties & Damage',
    },
    {
      id: 4,
      title: 'Upload Evidence',
    },
    {
      id: 5,
      title: 'Review & Submit',
    },
  ];

  const handleStartReporting = () => {
    navigate(`/claims/fnol/${policyType}`);
  };

  return (
    <RegisterFNOLView
      customerName="Alexander"
      activeClaimsCount={2}
      steps={steps}
      currentStep={0}
      onStartReporting={handleStartReporting}
    />
  );
};

export default RegisterFNOL;