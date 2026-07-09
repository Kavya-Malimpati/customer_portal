import { useState } from 'react';
import { FiSend, FiX } from 'react-icons/fi';

import './Chat.css';

import {
  Button,
  FormInput,
  Typography,
} from '../../../common/components';

interface Message {
  id: number;
  sender: 'user' | 'assistant';
  text: string;
}

interface AdjusterChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdjusterChat = ({
  isOpen,
  onClose,
}: AdjusterChatProps) => {
  const [draft, setDraft] = useState('');

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'assistant',
      text:
        'Hello! I can help with your claim questions. What would you like to know?',
    },
  ]);

  const handleSend = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const trimmedDraft = draft.trim();

    if (!trimmedDraft) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: trimmedDraft,
    };

    const nextMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(nextMessages);
    setDraft('');

    window.setTimeout(() => {
      const response =
        trimmedDraft
          .toLowerCase()
          .includes('claim')
          ? 'I can help you review your claim status and next steps.'
          : trimmedDraft
              .toLowerCase()
              .includes('repair')
          ? 'I can help you with your repair request details.'
          : 'Thanks for your message. A claims specialist will follow up shortly.';

      setMessages([
        ...nextMessages,
        {
          id: Date.now() + 1,
          sender: 'assistant',
          text: response,
        },
      ]);
    }, 400);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="adjuster-chat-panel"
      role="dialog"
      aria-label="Adjuster Chat"
    >
      <div className="adjuster-chat-header">

        <div>

          <Typography variant='h3' color='primary' className="adjuster-chat-title">
            Adjuster Chat
          </Typography>

          <Typography variant="body1" className="adjuster-chat-subtitle">
            We usually reply in a few moments
          </Typography>

        </div>

        <Button
          type="button"
          variant="text"
          className="adjuster-chat-close"
          onClick={onClose}
        >
          <FiX />
        </Button>

      </div>

      <div className="adjuster-chat-body">

        {messages.map(message => (
          <div
            key={message.id}
            className={`adjuster-message ${
              message.sender === 'user'
                ? 'adjuster-user'
                : 'adjuster-assistant'
            }`}
          >
            {message.text}
          </div>
        ))}

      </div>

      <form
        className="adjuster-chat-footer"
        onSubmit={handleSend}
      >

        <div className="adjuster-input">

          <FormInput
            id="adjuster-chat"
            name="adjusterChat"
            placeholder="Type your message..."
            value={draft}
            onChange={event =>
              setDraft(event.target.value)
            }
          />

        </div>

        <Button
          type="submit"
          className="adjuster-send-btn"
        >
          <FiSend />
        </Button>

      </form>

    </div>
  );
};

export default AdjusterChat;