import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Checkbox,
} from '../../../../common/components';

import type { RiskPreventionViewProps } from './interface';

import './RiskPrevention.css';

const RiskPreventionView = ({
  title,
  recommendations,
}: RiskPreventionViewProps) => {
  return (
    <div className="risk-prevention-container">

      <Typography
        variant="h4"
        color="primary"
      >
        {title}
      </Typography>

      <div className="risk-grid">

        {recommendations.map(item => (

          <Card key={item.category}>

            <CardHeader
              title={
                <Typography
                  variant="body1"
                  color="primary"
                >
                  {item.category}
                </Typography>
              }
            />

            <CardContent>

              <Typography
                variant="body2"
                className="risk-card-text"
              >
                {item.text}
              </Typography>

              <Checkbox
                label="Mark as Completed"
              />

            </CardContent>

          </Card>

        ))}

      </div>

    </div>
  );
};

export default RiskPreventionView;