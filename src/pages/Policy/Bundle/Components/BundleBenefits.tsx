import {
  Card,
  CardContent,
  Typography,
} from '../../../../common/components';

import {
  FiDollarSign,
  FiCalendar,
  FiCreditCard,
  FiLayers,
} from 'react-icons/fi';

const benefits = [
  {
    title: 'Save on Premium',
    description:
      'Receive discounts by combining your Auto and Home policies.',
    icon: <FiDollarSign />,
  },
  {
    title: 'One Renewal Date',
    description:
      'Renew all your bundled policies on a single date.',
    icon: <FiCalendar />,
  },
  {
    title: 'One Payment',
    description:
      'Make a single payment for all bundled policies.',
    icon: <FiCreditCard />,
  },
  {
    title: 'Easy Management',
    description:
      'Manage all your policies from one convenient place.',
    icon: <FiLayers />,
  },
];

const BundleBenefits = () => {
  return (
    <div className="bundle-benefits-grid">
      {benefits.map(benefit => (
        <Card
          key={benefit.title}
          variant="outlined-raised"
          className="bundle-benefit-card"
        >
          <CardContent>
            <div className="bundle-benefit-header">
              <div className="bundle-benefit-icon">
                {benefit.icon}
              </div>

              <Typography
                variant="body1"
                color="primary"
              >
                {benefit.title}
              </Typography>
            </div>

            <Typography variant="body2">
              {benefit.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BundleBenefits;