import React from 'react';

export interface HomeownersCoverageFormData {
  dwellingCoverage: string;
  otherStructuresCoverage: string;
  personalPropertyCoverage: string;
  lossOfUseCoverage: string;
  personalLiabilityCoverage: string;
  medicalPaymentsCoverage: string;
  floodCoverage: string;
  earthquakeCoverage: string;
  theftProtection: string;
}

export interface HomeownersCoverageProps {
  data?: Record<string, unknown>;
  onDataChange?: (
    data: HomeownersCoverageFormData,
  ) => void;
}

export interface HomeownersCoverageViewProps {
  formData: HomeownersCoverageFormData;

  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => void;
}

export interface CoverageField {
  name: keyof HomeownersCoverageFormData;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

export interface CoverageSection {
  title: string;
  fields: CoverageField[];
}