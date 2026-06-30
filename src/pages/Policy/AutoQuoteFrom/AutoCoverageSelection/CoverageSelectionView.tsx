import {
  Typography,
  Select,
  Card,
} from '../../../../common/components';

import type {
  CoverageSelectionViewProps,
  CoverageSection,
} from './Interfaces';

import { autoCoverageConfig } from './autoCoverageConfig';

import './CoverageSelection.css';

const CoverageSelectionView = ({
  formData,
  onChange,
}: CoverageSelectionViewProps) => {
  return (
    <Card className="coverage-page">
      <form id="coverage-selection-form">
        <div className="recommended-package">
          <Typography
            variant="h3"
            color="primary"
            className="section-title"
          >
            Recommended Coverage Package
          </Typography>

          <Typography variant="body2">
            Liability 100/300/100 • Collision $500 • Comprehensive $500 •
            UM/UIM 100/300 • Medical $10,000 • Roadside Included
          </Typography>
        </div>

        {autoCoverageConfig.map(
          (section: CoverageSection) => (
            <div
              key={section.title}
              className="section"
            >
              <Typography
                variant="h3"
                color="primary"
                className="section-title"
              >
                {section.title}
              </Typography>

              <div className="form-grid">
                {section.fields.map(field => (
                  <Select
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    value={
                      formData[
                        field.name as keyof typeof formData
                      ]
                    }
                    onChange={onChange}
                    options={field.options}
                  />
                ))}
              </div>
            </div>
          ),
        )}
      </form>
    </Card>
  );
};

export default CoverageSelectionView;