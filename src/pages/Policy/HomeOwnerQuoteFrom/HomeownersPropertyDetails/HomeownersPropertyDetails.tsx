import React from 'react';

import propertyDetailsConfigJson from '../../../../config/propertyDetailsConfig.json';

import { deepClone } from '../../../../scripts/utils';

import HomeownersPropertyDetailsView from './HomeownersPropertyDetailsView';

import type {
  FormDataType,
  HomeownersPropertyDetailsProps,
} from './Interfaces';

const STEP_KEY = 'property';

const HomeownersPropertyDetails = ({
  data,
  onDataChange,
}: HomeownersPropertyDetailsProps) => {
  const currentFormData =
    (data?.[STEP_KEY] as FormDataType) ||
    (deepClone(
      propertyDetailsConfigJson,
    ) as FormDataType);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >,
  ) => {
    const {
      id,
      value,
      type,
    } = e.target;

    const fieldValue =
      type === 'checkbox'
        ? (
            e.target as HTMLInputElement
          ).checked
        : value;

    const updatedData = {
      ...currentFormData,
      [id]: {
        ...currentFormData[id],
        value: fieldValue,
        hasError: false,
        errorMessage: '',
      },
    };

    onDataChange?.(updatedData);
  };

  return (
    <HomeownersPropertyDetailsView
      formData={currentFormData}
      onChange={handleChange}
    />
  );
};

export default HomeownersPropertyDetails;