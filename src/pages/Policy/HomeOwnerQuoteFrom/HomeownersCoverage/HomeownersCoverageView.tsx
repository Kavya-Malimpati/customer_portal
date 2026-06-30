import {
  Card,
  Typography,
  Select,
} from '../../../../common/components';

import type {
  HomeownersCoverageViewProps,
} from './Interfaces';

import { homeownersCoverageConfig } from '../../../../config/homeownersCoverageConfig';

import './HomeownersCoverage.css';

const HomeownersCoverageView = ({
  formData,
  onChange,
}: HomeownersCoverageViewProps) => {
  return (
    <div className="coverage-page">
      <Card
        variant="elevation"
        className="coverage-card"
      >
        <form id="coverage-form">
          {homeownersCoverageConfig.map(
            section => (
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
                  {section.fields.map(
                    field => (
                      <Select
                        key={field.name}
                        name={field.name}
                        label={field.label}
                        value={
                          formData[
                            field.name
                          ]
                        }
                        onChange={
                          onChange
                        }
                        options={
                          field.options
                        }
                      />
                    ),
                  )}
                </div>
              </div>
            ),
          )}
        </form>
      </Card>
    </div>
  );
};

export default HomeownersCoverageView;