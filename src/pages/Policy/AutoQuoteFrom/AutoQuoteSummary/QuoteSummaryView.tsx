import {
  Card,
  Typography,
  LabelValue,
} from '../../../../common/components';

import type { QuoteSummaryViewProps } from './Interfaces';

import './QuoteSummary.css';

const QuoteSummaryView = ({
  data,
}: QuoteSummaryViewProps) => {
  const vehicle = data.vehicle as any;
  const coverage = data.coverage as any;
  const premium = data.premium as any;

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
            Vehicle Information
          </Typography>

          <div className="quote-summary-grid">
            <LabelValue
              label="VIN"
              value={vehicle?.vin?.value}
              orientation="vertical"
            />

            <LabelValue
              label="Vehicle"
              value={`${vehicle?.year?.value} ${vehicle?.make?.value} ${vehicle?.model?.value}`}
              orientation="vertical"
            />

            <LabelValue
              label="Usage"
              value={vehicle?.usageType?.value}
              orientation="vertical"
            />

            <LabelValue
              label="Annual Mileage"
              value={vehicle?.annualMileage?.value}
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
            Driver Information
          </Typography>

          <div className="quote-summary-grid">
            <LabelValue
              label="Driver"
              value={`${vehicle?.driverFirstName?.value} ${vehicle?.driverLastName?.value}`}
              orientation="vertical"
            />

            <LabelValue
              label="License Number"
              value={vehicle?.licenseNumber?.value}
              orientation="vertical"
            />

            <LabelValue
              label="Years Licensed"
              value={vehicle?.yearsLicensed?.value}
              orientation="vertical"
            />

            <LabelValue
              label="Marital Status"
              value={vehicle?.maritalStatus?.value}
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
              label="Liability"
              value={coverage?.liabilityLimit}
              orientation="vertical"
            />

            <LabelValue
              label="Collision"
              value={coverage?.collisionDeductible}
              orientation="vertical"
            />

            <LabelValue
              label="Comprehensive"
              value={coverage?.comprehensiveDeductible}
              orientation="vertical"
            />

            <LabelValue
              label="Medical"
              value={coverage?.medicalCoverage}
              orientation="vertical"
            />

            <LabelValue
              label="Roadside"
              value={coverage?.roadsideAssistance}
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
              value={`$${premium?.monthlyPremium}`}
              orientation="vertical"
            />

            <LabelValue
              label="Annual Premium"
              value={`$${premium?.annualPremium}`}
              orientation="vertical"
            />

            <LabelValue
              label="Quote Valid Until"
              value={premium?.validUntil}
              orientation="vertical"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default QuoteSummaryView;