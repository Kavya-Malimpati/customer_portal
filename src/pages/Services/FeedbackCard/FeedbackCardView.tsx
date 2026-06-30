import './FeedbackCard.css';

import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiArrowRight, FiStar } from 'react-icons/fi';

import { Card, Typography } from '../../../common/components';
import FeedbackForm from './FeedbackForm';

import type { FeedbackCardViewProps } from './interfaces';

const FeedbackCardView: React.FC<FeedbackCardViewProps> = ({ rating, onRate }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Card variant='elevation' className='feedback-card'>
        <div className='feedback-container'>
          <Typography variant='h3' color='inverse' className='feedback-title'>
            How are we doing?
          </Typography>

          <Typography variant='body1' color='inverse' className='feedback-subtext'>
            Your feedback helps us improve your experience.
          </Typography>

          <div className='feedback-stars'>
            {[1, 2, 3, 4, 5].map(star =>
              star <= rating ? (
                <FaStar key={star} className='star filled' onClick={() => onRate(star)} />
              ) : (
                <FiStar key={star} className='star' onClick={() => onRate(star)} />
              ),
            )}
          </div>

          <div className='feedback-link' onClick={() => setIsFormOpen(true)}>
            <Typography variant='body1' color='inverse' className='feedback-link-text'>
              Tell us more
            </Typography>
            <FiArrowRight className='feedback-arrow' />
          </div>
        </div>
      </Card>

      {isFormOpen && (
        <FeedbackForm onClose={() => setIsFormOpen(false)} initialRating={rating} />
      )}
    </>
  );
};

export default FeedbackCardView;
