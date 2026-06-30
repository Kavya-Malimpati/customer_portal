import { useState } from 'react';
import Modal from '../../../common/components/Modal';
import ClaimTypeSelector from '../ClaimType/ClaimTypeSelector';
import RegisterFNOLView from './RegisterFNOLView';
import type { ClaimInfo, FNOLStep, RepairCardInfo } from './Interface';

const RegisterFNOL = () => {
  const [openClaimModal, setOpenClaimModal] = useState(false);

  const selectedClaim: ClaimInfo = {
    claimNumber: 'Claim #PC-9902',
    vehicle: 'Rear-End Collision',
  };

  const steps: FNOLStep[] = [
    { id: 1, title: 'Policy & Loss Type' },
    { id: 2, title: 'Incident Details' },
    { id: 3, title: 'Parties & Damage' },
    { id: 4, title: 'Upload Evidence' },
    { id: 5, title: 'Review & Submit' },
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
    setOpenClaimModal(true);
  };

  const handleRequestRepair = () => {
    alert('Request repair clicked');
  };

  return (
    <>
      <RegisterFNOLView
        customerName='Alexander'
        activeClaimsCount={2}
        selectedClaim={selectedClaim}
        steps={steps}
        currentStep={0}
        repairInfo={repairInfo}
        onChangeClaim={handleChangeClaim}
        onStartReporting={handleStartReporting}
        onRequestRepair={handleRequestRepair}
      />

      <Modal
        isOpen={openClaimModal}
        onClose={() => setOpenClaimModal(false)}
        title='Select Claim Type'
        maxWidth='500px'
      >
        <ClaimTypeSelector onClose={() => setOpenClaimModal(false)} />
      </Modal>
    </>
  );
};

export default RegisterFNOL;
