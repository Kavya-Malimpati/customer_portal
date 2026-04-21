import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import paperlessConfig from '../../../config/paperlesspreferences.json';
import PaperlessPreferencesView from './PaperlessPreferencesView';

import type { PaperlessOptions } from './interfaces';

const defaultState = {
  enabled: paperlessConfig.enabledState,
  options: {
    email: paperlessConfig.options[0].value,
    sms: paperlessConfig.options[1].value,
    documents: paperlessConfig.options[2].value,
  },
};

const PaperlessPreferences: React.FC = () => {
  const navigate = useNavigate();

  const [enabled, setEnabled] = useState<boolean>(defaultState.enabled);
  const [options, setOptions] = useState<PaperlessOptions>(defaultState.options);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleToggle = (): void => {
    setEnabled(prev => !prev);
  };

  const handleOptionChange = (key: keyof PaperlessOptions): void => {
    setOptions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const resetToDefault = (): void => {
    setEnabled(defaultState.enabled);
    setOptions(defaultState.options);
  };

  const handleSave = (): void => {
    console.log('Preferences saved:', { enabled, options });
    setShowSuccessModal(true);
  };

  const handleSuccessModalClose = (): void => {
    setShowSuccessModal(false);
    resetToDefault();
    navigate(-1);
  };

  const handleCancel = (): void => {
    resetToDefault();
  };

  return (
    <PaperlessPreferencesView
      enabled={enabled}
      options={options}
      showSuccessModal={showSuccessModal}
      onToggle={handleToggle}
      onOptionChange={handleOptionChange}
      onSave={handleSave}
      onCancel={handleCancel}
      onSuccessModalClose={handleSuccessModalClose}
    />
  );
};

export default PaperlessPreferences;
