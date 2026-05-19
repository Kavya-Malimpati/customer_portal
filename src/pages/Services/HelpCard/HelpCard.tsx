import { FaBook, FaComments, FaLightbulb } from 'react-icons/fa';

import HelpCardView from './HelpCardView';

import type { HelpCardItem } from './interfaces';

const HelpCard = () => {
  const helpItems: HelpCardItem[] = [
    {
      id: 'chat',
      title: 'Chat with Us',
      subtitle: 'LIVE NOW',
      icon: <FaComments size={24} color='var(--color-primary)' />,
      onClick: () => {
        console.log('Chat with Us clicked');
      },
    },
    {
      id: 'faqs',
      title: 'FAQs & Guides',
      subtitle: 'SELF-SERVICE',
      icon: <FaBook size={24} color='var(--color-primary)' />,
      onClick: () => {
        console.log('FAQs & Guides clicked');
      },
    },
    {
      id: 'events',
      title: 'Policy Life Events',
      subtitle: 'UPDATES',
      icon: <FaLightbulb size={24} color='var(--color-primary)' />,
      onClick: () => {
        console.log('Policy Life Events clicked');
      },
    },
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return <HelpCardView items={helpItems} onSearch={handleSearch} />;
};

export default HelpCard;
