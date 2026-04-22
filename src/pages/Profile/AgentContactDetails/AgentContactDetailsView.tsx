import {Typography , Button , Modal } from '../../../common/components';
import type { Agent } from './Interface';

interface AgentContactDetailsViewProps {
  agent: Agent | null;
  isModalOpen: boolean;
  message: string;
  sent: boolean;
  onMessageClick: () => void;
  onCloseModal: () => void;
  onSendMessage: () => void;
  setMessage: (msg: string) => void;
}

const AgentContactCard = ({ agent, onMessageClick }: { agent: Agent; onMessageClick: () => void }) => (
  <div className="mb-6">
    <div className="p-8 border rounded shadow-sm flex flex-col gap-4 bg-white">
      <Typography variant="h2">{agent.name}</Typography>
      <Typography variant="body1">Agency: {agent.agency}</Typography>
      <Typography variant="body1">
        Phone:{' '}
        <a href={`tel:${agent.phone}`} style={{ color: 'var(--color-primary)' }}>{agent.phone}</a>
      </Typography>
      <Typography variant="body1">
        Email:{' '}
        <a href={`mailto:${agent.email}`} style={{ color: 'var(--color-primary)' }}>{agent.email}</a>
      </Typography>
      <div className="flex gap-4 mt-4">
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          aria-label="Call agent"
          onClick={() => window.open(`tel:${agent.phone}`)}
        >
          Call
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          aria-label="Email agent"
          onClick={() => window.open(`mailto:${agent.email}`)}
        >
          Email
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="medium"
          aria-label="Message agent"
          onClick={onMessageClick}
        >
          Message
        </Button>
      </div>
    </div>
  </div>
);

const AgentContactDetailsView = ({
  agent,
  isModalOpen,
  message,
  sent,
  onMessageClick,
  onCloseModal,
  onSendMessage,
  setMessage,
}: AgentContactDetailsViewProps) => (
  <main
    className="flex-1 w-full px-6 py-12"
    style={{ backgroundColor: 'var(--bg-page)' }}
  >
    <div className="max-w-xl mx-auto">
      <Typography variant="h1" className="mb-2">
        Agent Contact Details
      </Typography>
      {agent ? (
        <AgentContactCard agent={agent} onMessageClick={onMessageClick} />
      ) : (
        <Typography>Fetching agent details...</Typography>
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={onCloseModal}
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
            onClick={onSendMessage}
            disabled={!message.trim()}
          >
            Send
          </Button>
          {sent && <Typography>Message sent!</Typography>}
        </div>
      </Modal>
    </div>
  </main>
);

export default AgentContactDetailsView;