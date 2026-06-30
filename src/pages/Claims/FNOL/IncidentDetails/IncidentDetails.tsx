import type { ChangeEvent } from 'react';

import incidentDetailsConfigJson from '../../../../config/IncidentDetailsConfig.json';

import type { StepContentProps } from '../../../../common/components/MultiStepForm/types';

import { deepClone } from '../../../../scripts/utils';

import type { IncidentDetailsFormData, Option, ClaimDetails } from './interfaces';

import IncidentDetailsView from './IncidentDetailsView';

const STEP_KEY = 'incidentDetails';

const incidentDetailsConfig = incidentDetailsConfigJson as IncidentDetailsFormData;

const WEATHER_OPTIONS: Option[] = [
  {
    value: 'Sunny',
    label: 'Sunny',
  },
  {
    value: 'Rainy',
    label: 'Rainy',
  },
  {
    value: 'Snow',
    label: 'Snow',
  },
  {
    value: 'Fog',
    label: 'Fog',
  },
];

const ROAD_OPTIONS: Option[] = [
  {
    value: 'Dry',
    label: 'Dry',
  },
  {
    value: 'Wet',
    label: 'Wet',
  },
  {
    value: 'Snow',
    label: 'Snow',
  },
  {
    value: 'Ice',
    label: 'Ice',
  },
];

const IncidentDetails = ({ data, onDataChange }: StepContentProps) => {
  const currentFormData =
    (data?.[STEP_KEY] as IncidentDetailsFormData) ??
    (deepClone(incidentDetailsConfig) as IncidentDetailsFormData);

  const claimType = (data?.claimDetails as ClaimDetails)?.claimType ?? 'auto';

  const formData: IncidentDetailsFormData = {
    ...currentFormData,

    weatherConditions: {
      ...currentFormData.weatherConditions,
      options: claimType === 'auto' ? WEATHER_OPTIONS : [],
    },

    roadConditions: {
      ...currentFormData.roadConditions,
      options: claimType === 'auto' ? ROAD_OPTIONS : [],
    },
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;

    const key = id as keyof IncidentDetailsFormData;

    const nextFormData: IncidentDetailsFormData = {
      ...formData,

      [key]: {
        ...formData[key],
        value,
        hasError: false,
        errorMessage: '',
      },
    };

    onDataChange?.(nextFormData);
  };

  return <IncidentDetailsView formData={formData} claimType={claimType} onChange={handleChange} />;
};

export default IncidentDetails;
