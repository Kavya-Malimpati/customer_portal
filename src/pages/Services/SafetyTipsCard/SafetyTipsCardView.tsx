import './SafetyTipsCard.css';

import { Card, CardContent, Typography } from '../../../common/components';
import { FaShieldAlt } from 'react-icons/fa';
import type { SafetyTipsViewProps } from './interfaces';

const SafetyTipsView = ({ tips }: SafetyTipsViewProps) => {
  return (
    <Card variant='outlined-raised' className='safety-tips-card'>
      <CardContent className='safety-tips-content'>

        <div className='safety-tips-heading'>
          <FaShieldAlt className='shield-icon' />
          <Typography variant='h3' color='primary'>
            Safety Tips
          </Typography>
        </div>

        {tips.map((tip) => (
          <div key={tip.id} className='safety-tip-item'>
            <img
              src={tip.image}
              alt={tip.title}
              className='safety-tip-image'
            />

            <div className='safety-tip-content'>
              <Typography
                variant='body1'
                color='primary'
                className='safety-tip-title'
              >
                {tip.title}
              </Typography>

              <Typography
                variant='body2'
                color='muted'
                className='safety-tip-description'
              >
                {tip.description}
              </Typography>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default SafetyTipsView;