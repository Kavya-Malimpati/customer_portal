import RegisterFNOLView from './RegisterFNOLView';
import type { ClaimInfo, FNOLStep, RepairCardInfo } from './Interface';

const RegisterFNOL = () => {
  const selectedClaim: ClaimInfo = {
    claimNumber: 'Claim #PC-9902',
    vehicle: 'Rear-End Collision',
  };

  const steps: FNOLStep[] = [
    { id: 1, title: 'Incident Details' },
    { id: 2, title: 'Vehicle Info' },
    { id: 3, title: 'Damage Photos' },
    { id: 4, title: 'Review & Summary' },
  ];

  const repairInfo: RepairCardInfo = {
    title: 'Glass & Windshield',
    badge: 'FAST-TRACK',
    description: 'Quick 2-minute entry for chips or cracks. $0 deductible eligible.',
    benefit: 'Direct billing to shop',
  };

  const handleChangeClaim = () => {
    alert('Change claim clicked');
  };

  const handleStartReporting = () => {
    alert('Start reporting FNOL');
  };

  const handleRequestRepair = () => {
    alert('Request repair clicked');
  };

  return (
    <RegisterFNOLView
      customerName='Alexander'
      activeClaimsCount={2}
      selectedClaim={selectedClaim}
      steps={steps}
      currentStep={1}
      repairInfo={repairInfo}
      onChangeClaim={handleChangeClaim}
      onStartReporting={handleStartReporting}
      onRequestRepair={handleRequestRepair}
    />
  );
};

export default RegisterFNOL;