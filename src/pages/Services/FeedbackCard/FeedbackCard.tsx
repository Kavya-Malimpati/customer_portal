import React, { useEffect, useState } from 'react';
import FeedbackCardView from './/FeedbackCardView';
import type { FeedbackCardProps } from './IFeedbackCard';

const FeedbackCard: React.FC<FeedbackCardProps> = ({ rating }) => {
  const [currentRating, setCurrentRating] = useState(0);

  useEffect(() => {
    if (rating !== undefined) {
      setCurrentRating(rating);
    } else {
      setCurrentRating(4);
    }
  }, [rating]);

  return (
    <FeedbackCardView
      rating={currentRating}
      onRate={setCurrentRating}
    />
  );
};

export default FeedbackCard;