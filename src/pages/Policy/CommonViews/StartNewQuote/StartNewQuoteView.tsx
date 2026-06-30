import {
  Card,
  LabelValue,
  Typography,
} from '../../../../common/components';

import type { StartNewQuoteViewProps } from './interfaces';

import './StartNewQuote.css';

const StartNewQuoteView = ({
  quoteData,
}: StartNewQuoteViewProps) => {
  if (!quoteData) return null;

  return (
    <div className="quote-page">
      <Card
        variant="elevation"
        className="quote-card"
      >
        <div className="quote-section">
          <Typography
            variant="h3"
            color="primary"
            className="quote-section-title"
          >
            Customer Information
          </Typography>

          <div className="quote-details-grid">
            <LabelValue
              label="Customer Name"
              value={quoteData.customerName}
              orientation="vertical"
              labelVariant="body1"
              valueVariant="body2"
            />

            <LabelValue
              label="Email Address"
              value={quoteData.email}
              orientation="vertical"
              labelVariant="body1"
              valueVariant="body2"
            />

            <LabelValue
              label="Primary Phone"
              value={quoteData.primaryPhone}
              orientation="vertical"
              labelVariant="body1"
              valueVariant="body2"
            />

            <LabelValue
              label="Secondary Phone"
              value={quoteData.secondaryPhone}
              orientation="vertical"
              labelVariant="body1"
              valueVariant="body2"
            />
          </div>
        </div>

        <div className="quote-section">
          <Typography
            variant="h3"
            color="primary"
            className="quote-section-title"
          >
            Address Information
          </Typography>

          <div className="quote-details-grid">
            <LabelValue
              label="Street Address"
              value={quoteData.street}
              orientation="vertical"
              labelVariant="body1"
              valueVariant="body2"
            />

            <LabelValue
              label="City"
              value={quoteData.city}
              orientation="vertical"
              labelVariant="body1"
              valueVariant="body2"
            />

            <LabelValue
              label="State"
              value={quoteData.state}
              orientation="vertical"
              labelVariant="body1"
              valueVariant="body2"
            />

            <LabelValue
              label="Zip Code"
              value={quoteData.zipCode}
              orientation="vertical"
              labelVariant="body1"
              valueVariant="body2"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StartNewQuoteView;