import { useState, useEffect } from 'react';
import Typography from '../../../common/components/Typography/Typography';
import Button from '../../../common/components/Button';
import AgentContactCard from './AgentContactCard';
import { fetchAgentDetails } from './agentApi';
import type { Agent } from './Interface';
import Modal from '../../../common/components/Modal';

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
    <main
      className="flex-1 w-full px-6 py-12"
      style={{ backgroundColor: 'var(--bg-page)' }}
    >
      <div className="max-w-xl mx-auto">

        <Typography variant="h1" className="mb-2">
          Agent Contact Details
        </Typography>

        {agent ? (
          <AgentContactCard
            agent={agent}
            onMessageClick={handleMessageButton}
          />
        ) : (
          <Typography>Fetching agent details...</Typography>
        )}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Send Message to Agent"
          aria-label="Send message modal"
        >
          <div className="flex flex-col gap-4">

            <textarea
              autoFocus
              className="w-full border border-gray-300 rounded p-2"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              aria-label="Message input"
            />

            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleSendMessage}
              disabled={!message.trim()}
            >
              Send
            </Button>

            {sent && (
              <Typography >
                Message sent!
              </Typography>
            )}

          </div>
        </Modal>

      </div>
    </main>
  );
};

export default AgentContactDetails;