import { useState } from 'react';

export const generateClaimNumber = () => {
  const random = Math.floor(
    100000 + Math.random() * 900000,
  );

  return `CLM-${random}`;
};

export const getAssignedAdjuster = () => {
  return 'John Smith';
};

export const getNextSteps = () => [
  'Claim submitted successfully',
  'Adjuster will review your claim',
  'Additional information may be requested',
  'Claim status can be tracked from Claims Dashboard',
];

interface UseReviewAndSubmitProps {
  data: Record<string, unknown>;
}

export const useReviewAndSubmit = ({
  data,
}: UseReviewAndSubmitProps) => {
  const [submitted, setSubmitted] =
    useState(false);

  const [claimNumber, setClaimNumber] =
    useState('');

  const [adjuster, setAdjuster] =
    useState('');

  const handleSubmit = () => {
    const claimNo =
      generateClaimNumber();

    setClaimNumber(claimNo);

    setAdjuster(
      getAssignedAdjuster(),
    );

    setSubmitted(true);

    alert(
      'Claim submitted successfully. Confirmation notification sent.',
    );
  };

  const handleSaveDraft = () => {
    localStorage.setItem(
      'fnolDraft',
      JSON.stringify(data),
    );

    alert(
      'Draft saved successfully.',
    );
  };

  return {
    submitted,
    claimNumber,
    adjuster,
    handleSubmit,
    handleSaveDraft,
  };
};