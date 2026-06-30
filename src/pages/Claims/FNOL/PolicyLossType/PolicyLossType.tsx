import type { ChangeEvent } from 'react';
import policyLossTypeConfigJson from '../../../../config/PolicyLossTypeConfig.json';
import type { StepContentProps } from '../../../../common/components/MultiStepForm/types';
import { deepClone } from '../../../../scripts/utils';

import type { PolicyLossTypeFormData, ClaimDetails } from './interfaces';

import PolicyLossTypeView from './PolicyLossTypeView';
import {
  AUTO_LOSS_TYPES,
  AUTO_POLICIES,
  HOME_LOSS_TYPES,
  HOME_POLICIES,
} from '../PolicyLossType/constants';

const STEP_KEY = 'claimDetails';

const policyLossTypeConfig = policyLossTypeConfigJson as PolicyLossTypeFormData;

const PolicyLossType = ({ data, onDataChange }: StepContentProps) => {
  const defaultData = deepClone(policyLossTypeConfig) as PolicyLossTypeFormData;

  const currentFormData: PolicyLossTypeFormData = {
    ...defaultData,
    ...(data?.[STEP_KEY] as Partial<PolicyLossTypeFormData>),

    policy: {
      ...defaultData.policy,
      ...(data?.[STEP_KEY] as Partial<PolicyLossTypeFormData>)?.policy,
    },

    lossType: {
      ...defaultData.lossType,
      ...(data?.[STEP_KEY] as Partial<PolicyLossTypeFormData>)?.lossType,
    },
  };

  const claimType = (data?.claimDetails as ClaimDetails)?.claimType ?? 'auto';

  const formData: PolicyLossTypeFormData = {
    ...currentFormData,

    policy: {
      ...currentFormData.policy,
      options: claimType === 'auto' ? AUTO_POLICIES : HOME_POLICIES,
    },

    lossType: {
      ...currentFormData.lossType,
      options: claimType === 'auto' ? AUTO_LOSS_TYPES : HOME_LOSS_TYPES,
    },
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, name, value } = e.target;

    const key = (name || id) as 'policy' | 'lossType';

    const nextData: PolicyLossTypeFormData = {
      ...formData,

      [key]: {
        ...formData[key],
        value,
        hasError: false,
        errorMessage: '',
      },
    };

    if (key === 'policy') {
      nextData.lossType = {
        ...nextData.lossType,
        value: '',
        hasError: false,
        errorMessage: '',
      };
    }

    onDataChange(nextData);
  };

  const selectedLossType = formData.lossType.value;

  const coverageNotes: Record<string, string> = {
    Collision:
      'Your policy typically covers vehicle damage caused by a collision, subject to your deductible and policy limits.',

    Theft: 'Your policy typically covers theft of the insured vehicle, subject to policy terms.',

    Vandalism: 'Your policy typically covers damage caused by vandalism after verification.',

    Glass: 'Glass and windshield damage may be covered depending on your deductible and coverage.',

    Weather: 'Weather-related damage is generally covered under comprehensive coverage.',

    Fire: 'Fire damage to your home is generally covered under your homeowners policy.',

    'Water / Plumbing': 'Sudden and accidental water damage is generally covered. Gradual damage may not be covered.',

    Storm: 'Storm damage is generally covered according to your policy coverage.',

    'Theft / Burglary': 'Loss due to theft or burglary may be covered after claim verification.',

    Liability: 'Liability coverage helps protect you against covered third-party claims.',

    Other: 'Coverage for this loss type depends on your policy terms and claim assessment.',
  };

  const coverageNote =
    coverageNotes[selectedLossType] ??
    'Select a loss type to view the applicable coverage information.';

  return (
    <PolicyLossTypeView
      formData={formData}
      claimType={claimType}
      coverageNote={coverageNote}
      onChange={handleChange}
    />
  );
};

export default PolicyLossType;
