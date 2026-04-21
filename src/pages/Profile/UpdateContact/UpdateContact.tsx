import { useEffect, useState } from 'react';
import contactConfig from '../../../config/contact.json';
import verificationConfig from '../../../config/verification.json';

import { deepClone } from '../../../scripts/utils';
import { validateFormFields } from '../../../scripts/validationsService';

import type { ContactHistoryItem, FormDataType, VerificationType } from './interfaces';
import UpdateContactView from './UpdateContactView';

const UpdateContact = () => {
  const [formData, setFormData] = useState<FormDataType>(() => deepClone(contactConfig));

  const [verificationData, setVerificationData] = useState<VerificationType>(
    deepClone(verificationConfig),
  );

  const [contactHistory, setContactHistory] = useState<ContactHistoryItem[]>(() => {
    const stored = localStorage.getItem('contactHistory');
    return stored ? JSON.parse(stored) : [];
  });

  const [pendingContact, setPendingContact] = useState<ContactHistoryItem | null>(null);

  const [showHistory, setShowHistory] = useState(false);
  const [showReverification, setShowReverification] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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

    // City → State auto-map
    if (id === 'city') {
      const selectedCity = contactConfig.city.options.find(o => o.value === value);

      setFormData(prev => ({
        ...prev,
        city: { ...prev.city, value, hasError: false, errorMessage: '' },
        state: {
          ...prev.state,
          value: selectedCity?.stateValue || '',
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

  const startUpdateFlow = (
    fields: (keyof FormDataType)[],
    buildContact: () => ContactHistoryItem,
  ) => {
    const subset = Object.fromEntries(fields.map(k => [k, formData[k]])) as FormDataType;

    const { data, status } = validateFormFields(subset);

    if (!status) {
      setFormData(prevData =>
        Object.entries(prevData).reduce((acc, [key, field]) => {
          if (!(key in subset)) {
            return {
              ...acc,
              [key]: field,
            };
          }

          const index = Object.keys(subset).indexOf(key);
          const validationResult = data[index] as
            | { isValid: boolean; errorMessage?: string }
            | undefined;

          return {
            ...acc,
            [key]: {
              ...field,
              hasError: !validationResult?.isValid,
              errorMessage: validationResult?.errorMessage || '',
            },
          };
        }, {} as FormDataType),
      );

      return;
    }

    setPendingContact(buildContact());
    setVerificationData(deepClone(verificationConfig));
    setShowReverification(true);
  };

  const handleConfirmVerification = () => {
    if (!pendingContact) return;

    const code = verificationData.verificationCode.value;
    if (!/^\d{6}$/.test(code)) {
      setVerificationData(prev => ({
        ...prev,
        verificationCode: {
          ...prev.verificationCode,
          hasError: true,
          errorMessage: 'Enter a valid 6-digit code',
        },
      }));
      return;
    }

    setContactHistory(prev => [pendingContact, ...prev].slice(0, 5));
    setPendingContact(null);
    setShowReverification(false);
    setShowSuccessMessage(true);

    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  const handleClearHistory = () => {
    if (!window.confirm('Are you sure you want to clear contact history?')) return;
    setContactHistory([]);
    localStorage.removeItem('contactHistory');
    setShowHistory(false);
  };

  // View
  return (
    <UpdateContactView
      formData={formData}
      verificationData={verificationData}
      contactHistory={contactHistory}
      pendingContact={pendingContact}
      showHistory={showHistory}
      showReverification={showReverification}
      showSuccessMessage={showSuccessMessage}
      onInputChange={handleInputChange}
      onSubmit={e => e.preventDefault()}
      onToggleHistory={() => setShowHistory(p => !p)}
      onClearHistory={handleClearHistory}
      onCancelVerification={() => setShowReverification(false)}
      onConfirmVerification={handleConfirmVerification}
      onUpdatePhone={() =>
        startUpdateFlow(['phone'], () => ({
          phone: formData.phone.value,
          email: '',
          streetAddress: '',
          aptNumber: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
        }))
      }
      onUpdateEmail={() =>
        startUpdateFlow(['email'], () => ({
          phone: '',
          email: formData.email.value,
          streetAddress: '',
          aptNumber: '',
          city: '',
          state: '',
          zipcode: '',
          country: '',
        }))
      }
      onUpdateAddress={() =>
        startUpdateFlow(
          ['streetAddress', 'aptNumber', 'city', 'state', 'zipcode', 'country'],
          () => ({
            phone: '',
            email: '',
            streetAddress: formData.streetAddress.value,
            aptNumber: formData.aptNumber.value,
            city: formData.city.value,
            state: formData.state.value,
            zipcode: formData.zipcode.value,
            country: formData.country.value,
          }),
        )
      }
    />
  );
};

export default UpdateContact;
