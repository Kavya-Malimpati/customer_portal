import { FiShield, FiHome } from 'react-icons/fi';

import {
  Card,
  CardContent,
  Typography,
  Button,
} from '../../../common/components';

import './SafetySavingsUi.css';

import type { SafetySavingsUiProps } from './Interfaces';

const SafetySavingsView = ({ tips, onNavigateSafetyTips }: SafetySavingsUiProps) => {
  return (
    <div className='safety-wrapper'>
      <Card className='safety-card'>
        <CardContent className='safety-content'>
          <button
            type='button'
            className='safety-heading-button'
            onClick={onNavigateSafetyTips}
            aria-label='Navigate to Safety Tips in Services'
          >
            <Typography
              variant='h3'
              className='safety-heading'
            >
              Safety & Savings
            </Typography>
          </button>

          <div className='safety-list'>
            {tips.map(tip => (
              <div
                key={tip.id}
                className='safety-tip'
              >
                <div className='safety-icon'>
                  {tip.type === 'driving' ? (
                    <FiShield size={22} />
                  ) : (
                    <FiHome size={22} />
                  )}
                </div>

                <div className='safety-details'>
                  <Typography
                    variant='body1'
                    className={`safety-title ${
                      tip.type === 'home'
                        ? 'home-title'
                        : 'driving-title'
                    }`}
                  >
                    {tip.title}
                  </Typography>

                  <Typography
                    variant='body2'
                    className='safety-description'
                  >
                    {tip.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant='outlined'
            className='explore-button'
            onClick={onNavigateSafetyTips}
          >
            Explore All Tips
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetySavingsView;