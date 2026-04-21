import { useState, type ChangeEvent, type FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import personalDetailsConfigJson from '../../../config/personalDetailsConfig.json';
import { deepClone } from '../../../scripts/utils';
import { validateFormFields } from '../../../scripts/validationsService';
import { getPersonalDetailsApi } from './personalDetailsApi';
import EditPersonalDetailsUi from './EditPersonalDetailsView';
import type { ValidationResult,FormDataType } from './Interfaces';


const personalDetailsConfig = personalDetailsConfigJson as FormDataType;

const EditPersonalDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormDataType>(
    deepClone(personalDetailsConfig)
  );

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPersonalDetailsApi();

      const updated = Object.entries(personalDetailsConfig).reduce(
        (acc, [key, field]) => ({
          ...acc,
          [key]: {
            ...field,
            value: data[key as keyof typeof data] || '',
          }
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
        errorMessage: ''
      }
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
      const updated = { ...prev };

      (Object.keys(prev) as Array<keyof FormDataType>).forEach(key => {
        const result = validationResults.find(i => i.id === key);

        updated[key] = {
          ...prev[key],
          hasError: !result?.isValid,
          errorMessage: result?.errorMessage || ''
        };
      });

      return updated;
    });
  };

  return (
    <EditPersonalDetailsUi
      formData={formData}
      onChange={handleInputChange}
      onSubmit={handleSubmit}
      onBack={() => navigate(-1)}
      isConfirmOpen={isConfirmOpen}
      onCloseModal={() => setIsConfirmOpen(false)}
      onConfirm={() => navigate('/home')}
    />
  );
};

export default EditPersonalDetails;