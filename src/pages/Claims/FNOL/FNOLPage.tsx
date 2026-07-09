import { useNavigate, useParams } from 'react-router-dom';

import PageEngine from '../../../common/components/PageEngine/PageEngine';

import PolicyLossTypeStep from './PolicyLossType';
import IncidentDetailsStep from './IncidentDetails';
import PartiesAndDamageStep from './PartiesAndDamage';
import UploadEvidence from './UploadEvidence';
import ReviewAndSubmit from './ReviewAndSubmit';

const FNOLPage = () => {
  const navigate = useNavigate();

  const { claimType } = useParams();

  const steps = [
    {
      id: 'claimDetails',
      title: 'Policy & Loss Type',
      component: PolicyLossTypeStep,
    },
    {
      id: 'incidentDetails',
      title: 'Incident Details',
      component: IncidentDetailsStep,
    },
    {
      id: 'partiesAndDamage',
      title: 'Parties & Damage',
      component: PartiesAndDamageStep,
    },
    {
      id: 'uploadEvidence',
      title: 'Upload Evidence',
      component: UploadEvidence,
    },
    {
      id: 'reviewAndSubmit',
      title: 'Review & Submit',
      component: ReviewAndSubmit,
    },
  ];

  const handleSubmit = (data: unknown) => {
    const claimNumber = `CLM-${Math.floor(100000 + Math.random() * 900000)}`;

    const adjuster = 'John Smith';

    navigate('/claims/fnol/success', {
      state: {
        claimNumber,
        adjuster,
        claimData: data,
      },
    });
  };

  return (
    <PageEngine
      steps={steps}
      submitButtonName='Submit Claim'
      initialData={{
        claimDetails: {
          claimType: claimType === 'home' ? 'home' : 'auto',
        },
      }}
      onSubmit={handleSubmit}
      onFirstStepBack={() => navigate(-1)}
    />
  );
};

export default FNOLPage;
