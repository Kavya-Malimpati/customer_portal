import { useEffect, useState } from 'react';
import PaperlessPreferencesView from './PaperlessPreferencesView';
import type { PaperlessPreferencesState } from './interfaces';

const defaultPaperlessPreferences: PaperlessPreferencesState = {
  enabled: true,
  email: true,
  sms: false,
  documents: true,
  emailAddress: 'alex.walker@gmail.com',
};

const getInitialPaperlessPreferences = (): PaperlessPreferencesState => {
  try {
    const saved = localStorage.getItem('paperlessPreferences');

    if (saved) {
      return {
        ...defaultPaperlessPreferences,
        ...JSON.parse(saved),
      };
    }
  } catch (error) {
    console.error('Failed to parse paperless preferences', error);
  }

  return defaultPaperlessPreferences;
};

const PaperlessPreferences = () => {
  const [paperless, setPaperless] = useState<PaperlessPreferencesState>(
    getInitialPaperlessPreferences,
  );

  useEffect(() => {
    localStorage.setItem('paperlessPreferences', JSON.stringify(paperless));
  }, [paperless]);

  return (
    <PaperlessPreferencesView
      paperless={paperless}
      onPaperlessChange={setPaperless}
    />
  );
};

export default PaperlessPreferences;