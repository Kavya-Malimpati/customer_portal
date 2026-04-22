import { useState, useEffect } from 'react';
import type { Agent } from './Interface';
import { fetchAgentDetails } from './AgentApi';
import AgentContactDetailsView from './AgentContactDetailsView';

const AgentContactDetails = () => {
  const [agent, setAgent] = useState<Agent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    fetchAgentDetails().then(setAgent);
  }, []);

  const handleMessageButton = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSendMessage = () => {
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setIsModalOpen(false);
    }, 1500);
    setMessage('');
  };

  return (
    <AgentContactDetailsView
      agent={agent}
      isModalOpen={isModalOpen}
      message={message}
      sent={sent}
      onMessageClick={handleMessageButton}
      onCloseModal={handleCloseModal}
      onSendMessage={handleSendMessage}
      setMessage={setMessage}
    />
  );
};

export default AgentContactDetails;