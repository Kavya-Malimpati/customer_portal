import React, { useState } from 'react';

import FeedbackCardView from './FeedbackCardView';

import type { FeedbackCardProps } from './interfaces';

const FeedbackCard: React.FC<FeedbackCardProps> = ({ rating }) => {
  const [currentRating, setCurrentRating] = useState(rating !== undefined ? rating : 4);

  return <FeedbackCardView rating={currentRating} onRate={setCurrentRating} />;
};

export default FeedbackCard;
