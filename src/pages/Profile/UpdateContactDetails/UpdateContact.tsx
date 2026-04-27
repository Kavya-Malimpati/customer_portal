import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import contactConfigJson from '../../../config/updatecontactdetails.json';
import { deepClone } from '../../../scripts/utils';
import { validateFormFields } from '../../../scripts/validationsService';
import UpdateContactView from './UpdateContactView';
import { getContactDetailsApi } from './contactDetailApi';

import type { ChangeEvent, FormEvent } from 'react';
import type { ValidationResult, FormDataType } from './interfaces';

const contactConfig = contactConfigJson as FormDataType;

const UpdateContact = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormDataType>(
    deepClone(contactConfig)
  );

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

 
  useEffect(() => {
    const fetchData = async () => {
      const data = await getContactDetailsApi();

      const updated = Object.entries(contactConfig).reduce(
        (acc, [key, field]) => ({
          ...acc,
          [key]: {
            ...field,
            value: data[key as keyof typeof data] || '',
          },
        }),
        {} as FormDataType
      );

      setFormData(updated);
    };

    fetchData();
  }, []);


  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [id]: {
        ...prev[id as keyof FormDataType],
        value,
        hasError: false,
        errorMessage: '',
      },
    }));
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, status } = validateFormFields(formData);

    if (status) {
      setIsConfirmOpen(true);
      return;
    }

    const validationResults = data as ValidationResult[];

   
    setFormData(prev => {
      const updated: FormDataType = { ...prev };

      (Object.keys(prev) as Array<keyof FormDataType>).forEach(key => {
        const result = validationResults.find(i => i.id === key);

        (updated as any)[key] = {
  ...prev[key],
  hasError: !result?.isValid,
  errorMessage: result?.errorMessage || '',
};
      });

      return updated;
    });
  };

  return (
    <UpdateContactView
      formData={formData}
      onChange={handleInputChange}
      onSubmit={handleSubmit}
      isConfirmOpen={isConfirmOpen}
      onBack={() => navigate(-1)}
      onCloseModal={() => setIsConfirmOpen(false)}
      onConfirm={() => navigate('/home')}
    />
  );
};

export default UpdateContact;