import type { ChangeEvent } from 'react';

import partiesAndDamageConfigJson from '../../../../config/PartiesAndDamageConfig.json';

import type { StepContentProps } from '../../../../common/components/MultiStepForm/types';

import { deepClone } from '../../../../scripts/utils';

import type { PartiesAndDamageFormData, ClaimDetails } from './interfaces';

import PartiesAndDamageView from './PartiesAndDamageView';

const STEP_KEY = 'partiesAndDamage';

const partiesAndDamageConfig = partiesAndDamageConfigJson as PartiesAndDamageFormData;

const PartiesAndDamage = ({ data, onDataChange }: StepContentProps) => {
  const currentFormData =
    (data?.[STEP_KEY] as PartiesAndDamageFormData) ??
    (deepClone(partiesAndDamageConfig) as PartiesAndDamageFormData);

  const claimType = (data?.claimDetails as ClaimDetails)?.claimType ?? 'auto';

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    const key = id as keyof PartiesAndDamageFormData;

    const nextFormData: PartiesAndDamageFormData = {
      ...currentFormData,

      [key]: {
        ...currentFormData[key],
        value,
        hasError: false,
        errorMessage: '',
      },
    };

    onDataChange?.(nextFormData);
  };

  return (
    <PartiesAndDamageView
      formData={currentFormData}
      claimType={claimType}
      onChange={handleChange}
    />
  );
};

export default PartiesAndDamage;
