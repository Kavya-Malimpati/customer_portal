import { useState } from 'react';
import { FaBook, FaComments, FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import HelpCardView from './HelpCardView';

import type { HelpCardItem } from './interfaces';

declare global {
  interface Window {
    openClaimSupport?: () => void;
  }
}

const HelpCard = () => {
  const navigate = useNavigate();
  const [isLifeEventsOpen, setIsLifeEventsOpen] = useState(false);

  const handleOpenClaimSupport = () => {
    if (typeof window !== 'undefined' && typeof window.openClaimSupport === 'function') {
      window.openClaimSupport();
      return;
    }

    navigate('/claims');
  };

  const helpItems: HelpCardItem[] = [
    {
      id: 'chat',
      title: 'Chat with Us',
      subtitle: 'LIVE NOW',
      icon: <FaComments size={24} color='var(--color-primary)' />,
      onClick: handleOpenClaimSupport,
    },
    {
      id: 'faqs',
      title: 'FAQs & Guides',
      subtitle: 'SELF-SERVICE',
      icon: <FaBook size={24} color='var(--color-primary)' />,
      onClick: () => navigate('/faqs'),
    },
    {
      id: 'events',
      title: 'Policy Life Events',
      subtitle: 'UPDATES',
      icon: <FaLightbulb size={24} color='var(--color-primary)' />,
      onClick: () => setIsLifeEventsOpen(true),
    },
  ];

  return (
    <HelpCardView
      items={helpItems}
      onSearch={query => console.log('Search query:', query)}
      isLifeEventsOpen={isLifeEventsOpen}
      onCloseLifeEvents={() => setIsLifeEventsOpen(false)}
    />
  );
};

export default HelpCard;
