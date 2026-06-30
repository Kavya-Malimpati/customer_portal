import {
  Card,
  Typography,
  LabelValue,
} from '../../../../common/components';

import type {
  QuoteSummaryViewProps,
} from './Interfaces';

import './QuoteSummary.css';

const QuoteSummaryView = ({
  data,
}: QuoteSummaryViewProps) => {
  const property =
    (data.property as Record<
      string,
      { value: string }
    >) ?? {};

  const coverage =
    (data.coverage as Record<
      string,
      string
    >) ?? {};

  const premium =
    (data.premium as Record<
      string,
      string | number
    >) ?? {};

  return (
    <div className="quote-summary-page">
      <Card
        variant="elevation"
        className="quote-summary-card"
      >
        <div className="quote-summary-section">
          <Typography
            variant="h3"
            color="primary"
            className="quote-summary-title"
          >
            Customer Information
          </Typography>

          <div className="quote-summary-grid">
            <LabelValue
              label="Customer Name"
              value="John Michael Smith"
              orientation="vertical"
            />

            <LabelValue
              label="Email Address"
              value="john.smith@gmail.com"
              orientation="vertical"
            />
          </div>
        </div>

        <div className="quote-summary-section">
          <Typography
            variant="h3"
            color="primary"
            className="quote-summary-title"
          >
            Property Information
          </Typography>

          <div className="quote-summary-grid">
            <LabelValue
              label="Property Address"
              value={
                property?.propertyAddress
                  ?.value ?? ''
              }
              orientation="vertical"
            />

            <LabelValue
              label="Property Type"
              value={
                property?.propertyType
                  ?.value ?? ''
              }
              orientation="vertical"
            />
          </div>
        </div>

        <div className="quote-summary-section">
          <Typography
            variant="h3"
            color="primary"
            className="quote-summary-title"
          >
            Coverage Information
          </Typography>

          <div className="quote-summary-grid">
            <LabelValue
              label="Dwelling Coverage"
              value={
                coverage?.dwellingCoverage ??
                ''
              }
              orientation="vertical"
            />

            <LabelValue
              label="Liability Coverage"
              value={
                coverage?.personalLiabilityCoverage ??
                ''
              }
              orientation="vertical"
            />

            <LabelValue
              label="Flood Coverage"
              value={
                coverage?.floodCoverage ??
                ''
              }
              orientation="vertical"
            />
          </div>
        </div>

        <div className="quote-summary-section">
          <Typography
            variant="h3"
            color="primary"
            className="quote-summary-title"
          >
            Premium Summary
          </Typography>

          <div className="quote-summary-grid">
            <LabelValue
              label="Monthly Premium"
              value={`$${premium?.monthlyPremium ?? 0}`}
              orientation="vertical"
            />

            <LabelValue
              label="Annual Premium"
              value={`$${premium?.annualPremium ?? 0}`}
              orientation="vertical"
            />

            <LabelValue
              label="Quote Valid Until"
              value={
                premium?.validUntil ?? ''
              }
              orientation="vertical"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuoteSummaryView;