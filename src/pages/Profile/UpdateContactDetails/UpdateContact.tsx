import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import contactConfig from '../../../config/updatecontactdetails.json';
import verificationConfig from '../../../config/verificationmethod.json';

import { deepClone } from '../../../scripts/utils';
import { validateFormFields } from '../../../scripts/validationsService';

import type { ContactHistoryItem, FormDataType, VerificationType } from './interfaces';
import { getContactDetailsApi } from './contactDetailsApi';
import UpdateContactView from './UpdateContactView';

const UpdateContact = () => {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState<FormDataType>(() => deepClone(contactConfig));

  // Verification state
  const [verificationData, setVerificationData] = useState<VerificationType>(
    deepClone(verificationConfig),
  );

  // Contact history state
  const [contactHistory, setContactHistory] = useState<ContactHistoryItem[]>(() => {
    const stored = localStorage.getItem('contactHistory');
    return stored ? JSON.parse(stored) : [];
  });

  // Pending contact awaiting verification
  const [pendingContact, setPendingContact] = useState<ContactHistoryItem | null>(null);

  // UI state
  const [showHistory, setShowHistory] = useState(false);
  const [showReverification, setShowReverification] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showClearHistoryModal, setShowClearHistoryModal] = useState(false);

  const mapApiDataToFormData = (
    baseConfig: FormDataType,
    apiData: Partial<ContactHistoryItem>,
  ): FormDataType => {
    const updated = deepClone(baseConfig);

    (Object.keys(apiData) as (keyof ContactHistoryItem)[]).forEach(key => {
      if (updated[key]) {
        updated[key].value = apiData[key] ?? '';
        updated[key].hasError = false;
        updated[key].errorMessage = '';
      }
    });

    return updated;
  };

  useEffect(() => {
    const loadContactDetails = async () => {
      const apiData = await getContactDetailsApi();

      setFormData(mapApiDataToFormData(contactConfig, apiData));

      setContactHistory(prev => (prev.length ? prev : [apiData]));
    };

    loadContactDetails();
  }, []);

  useEffect(() => {
    localStorage.setItem('contactHistory', JSON.stringify(contactHistory));
  }, [contactHistory]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;

    // Verification fields
    if (id in verificationData) {
      setVerificationData(prev => ({
        ...prev,
        [id]: {
          ...prev[id as keyof VerificationType],
          value,
          hasError: false,
          errorMessage: '',
        },
      }));
      return;
    }

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { data, status } = validateFormFields(formData);

    if (!status) {
      setFormData(prev =>
        Object.entries(prev).reduce((acc, [key, field], index) => {
          const validation = data[index] as { isValid: boolean; errorMessage?: string } | undefined;
          return {
            ...acc,
            [key]: {
              ...field,
              hasError: !validation?.isValid,
              errorMessage: validation?.errorMessage || '',
            },
          };
        }, {} as FormDataType),
      );
      return;
    }

    const newContact: ContactHistoryItem = {
      phone: formData.phone.value,
      email: formData.email.value,
      streetAddress: formData.streetAddress.value,
      aptNumber: formData.aptNumber.value,
      city: formData.city.value,
      state: formData.state.value,
      zipcode: formData.zipcode.value,
      country: formData.country.value,
    };

    setPendingContact(newContact);
    setVerificationData(deepClone(verificationConfig));
    setShowReverification(true);
  };

  const handleConfirmVerification = () => {
    if (!pendingContact) return;

    setContactHistory(prev => [pendingContact, ...prev].slice(0, 3));
    setPendingContact(null);
    setShowReverification(false);
    setShowSuccessMessage(true);
    setFormData(deepClone(contactConfig));

    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const handleConfirmClearHistory = () => {
    setContactHistory([]);
    localStorage.removeItem('contactHistory');
    setShowHistory(false);
    setShowClearHistoryModal(false);
  };

  const handleCancelClearHistory = () => {
    setShowClearHistoryModal(false);
  };

  return (
    <UpdateContactView
      formData={formData}
      verificationData={verificationData}
      contactHistory={contactHistory}
      pendingContact={pendingContact}
      showHistory={showHistory}
      showReverification={showReverification}
      showSuccessMessage={showSuccessMessage}
      showClearHistoryModal={showClearHistoryModal}
      onConfirmClearHistory={handleConfirmClearHistory}
      onCancelClearHistory={handleCancelClearHistory}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onToggleHistory={() => {
        setShowHistory(p => !p);
        setShowReverification(false);
      }}
      onClearHistory={() => setShowClearHistoryModal(true)}
      onCancelVerification={() => setShowReverification(false)}
      onConfirmVerification={handleConfirmVerification}
      onBack={() => navigate(-1)}
    />
  );
};

export default UpdateContact;
