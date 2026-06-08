import React from 'react';
import './FeedbackCard.css';
import {Card,Typography} from '../../../common/components';
import { FiStar, FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import type { FeedbackCardViewProps } from './IFeedbackCard';


const FeedbackCardView: React.FC<FeedbackCardViewProps> = ({ rating, onRate }) => {
  return (
    <Card variant="elevation" className="feedback-card">
      <div className="feedback-container">

        <Typography variant="h3" color="inverse" className="feedback-title">
          How are we doing?
        </Typography>

        <Typography variant="body2" color="inverse" className="feedback-subtext">
          Your feedback helps us improve your experience.
        </Typography>

              <div className="feedback-stars">
        {[1, 2, 3, 4, 5].map((star) =>
          star <= rating ? (
            <FaStar
              key={star}
              className="star filled"
              onClick={() => onRate(star)}
            />
          ) : (
            <FiStar
              key={star}
              className="star"
              onClick={() => onRate(star)}
            />
          )
        )}
      </div>

        <div className="feedback-link">
          <Typography variant="body2" color="inverse" className="feedback-link-text">
            Tell us more
          </Typography>
          <FiArrowRight className="feedback-arrow" />
        </div>

      </div>
    </Card>
  );
};

export default FeedbackCardView;