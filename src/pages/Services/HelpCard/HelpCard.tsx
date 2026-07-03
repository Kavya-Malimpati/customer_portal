import { useState } from 'react';
import { FaBook, FaComments, FaLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import HelpCardView from './HelpCardView';

import type { ChatMessage, HelpCardItem } from './interfaces';

const HelpCard = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isLifeEventsOpen, setIsLifeEventsOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      text: 'Welcome! How can we help you today?',
    },
  ]);

  const helpItems: HelpCardItem[] = [
    {
      id: 'chat',
      title: 'Chat with Us',
      subtitle: 'LIVE NOW',
      icon: <FaComments size={24} color='var(--color-primary)' />,
      onClick: () => {
        setIsChatOpen(true);
      },
    },
    {
      id: 'faqs',
      title: 'FAQs & Guides',
      subtitle: 'SELF-SERVICE',
      icon: <FaBook size={24} color='var(--color-primary)' />,
      onClick: () => {
        setIsFaqOpen(true);
      },
    },
    {
      id: 'events',
      title: 'Policy Life Events',
      subtitle: 'UPDATES',
      icon: <FaLightbulb size={24} color='var(--color-primary)' />,
      onClick: () => {
        setIsLifeEventsOpen(true);
      },
    },
  ];

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setChatInput('');
    setChatMessages([
      {
        id: 1,
        role: 'assistant',
        text: 'Welcome! How can we help you today?',
      },
    ]);
    navigate('/services');
  };

  const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedMessage = chatInput.trim();

    if (!trimmedMessage) {
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: 'user',
      text: trimmedMessage,
    };

    setChatMessages(previousMessages => [...previousMessages, userMessage]);
    setChatInput('');

    window.setTimeout(() => {
      setChatMessages(previousMessages => [
        ...previousMessages,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: 'Thanks for reaching out. A support specialist will follow up shortly.',
        },
      ]);
    }, 250);
  };

  return (
    <HelpCardView
      items={helpItems}
      onSearch={handleSearch}
      isChatOpen={isChatOpen}
      chatMessages={chatMessages}
      chatInput={chatInput}
      onChatInputChange={event => setChatInput(event.target.value)}
      onSendMessage={handleSendMessage}
      onCloseChat={handleCloseChat}
      isFaqOpen={isFaqOpen}
      onToggleFaqs={() => setIsFaqOpen(value => !value)}
      isLifeEventsOpen={isLifeEventsOpen}
      onCloseLifeEvents={() => setIsLifeEventsOpen(false)}
    />
  );
};

export default HelpCard;
