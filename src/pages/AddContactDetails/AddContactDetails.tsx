import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import contactDetailsConfig from '../../config/addcontactdetails.json';
import { validateFormFields } from '../../scripts/validationsService';
import AddContactDetailsView from './AddContactDetailsView';

import type { FormField, FormDataType } from './interfaces';

const AddContactDetails = () => {
  const navigate = useNavigate();

  const clonedConfig = { ...contactDetailsConfig } as FormDataType;

  const [formData, setFormData] = useState<FormDataType>(clonedConfig);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { id, value, type } = target;

    setFormData((prev: FormDataType) => {
      const field = prev[id as keyof FormDataType];
      if (!field) return prev;

      return {
        ...prev,
        [id]: {
          ...field,
          value: type === 'checkbox' ? target.checked : value,
          hasError: false,
          errorMessage: '',
        },
      };
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, status } = validateFormFields(formData);

    if (status) {
      setShowConfirmModal(true);
    } else {
      setFormData(prev => {
        const updatedData: FormDataType = {};
        let dataIndex = 0;

        Object.entries(prev).forEach(([key, field]) => {
          const validationResult = data[dataIndex] as
            | { isValid: boolean; errorMessage?: string }
            | undefined;

          updatedData[key] = {
            ...(field as FormField),
            hasError: !validationResult?.isValid,
            errorMessage: validationResult?.errorMessage || '',
          };
          dataIndex++;
        });

        return updatedData;
      });
    }
  };

  const handleConfirmSubmit = () => {
    setShowConfirmModal(false);
    console.log('Submitted Contact Details:', formData);
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    setFormData(clonedConfig);
    navigate(-1);
  };

  return (
    <AddContactDetailsView
      formData={formData}
      handleInputChange={handleInputChange}
      handleSubmit={handleSubmit}
      navigate={navigate}
      showConfirmModal={showConfirmModal}
      setShowConfirmModal={setShowConfirmModal}
      showSuccessModal={showSuccessModal}
      handleConfirmSubmit={handleConfirmSubmit}
      handleSuccessModalClose={handleSuccessModalClose}
    />
  );
};

export default AddContactDetails;
