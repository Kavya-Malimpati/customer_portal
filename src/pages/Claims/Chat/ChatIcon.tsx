import { useState } from 'react';
import { FiMessageSquare, FiSend, FiX } from 'react-icons/fi';
import './Chat.css';
import { Button } from '../../../common/components';

interface Message {
  id: number;
  sender: 'user' | 'assistant';
  text: string;
}

interface ChatIconProps {
  initialOpen?: boolean;
}

const ChatIcon = ({ initialOpen = false }: ChatIconProps) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'assistant',
      text: 'Hello! I can help with your claim questions. What would you like to know?',
    },
  ]);

  const handleSend = (event: React.FormEvent<HTMLFormElement>) => {
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

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setDraft('');

    window.setTimeout(() => {
      const responseText = trimmedDraft.toLowerCase().includes('claim')
        ? 'I can help you review your claim status and next steps.'
        : trimmedDraft.toLowerCase().includes('repair')
          ? 'I can help you with your repair request details.'
          : 'Thanks for your message. A claims specialist will follow up shortly.';

      const assistantMessage: Message = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: responseText,
      };

      setMessages([...nextMessages, assistantMessage]);
    }, 400);
  };

  return (
    <div className='chat-wrapper'>
      {isOpen && (
        <div className='chat-panel' role='dialog' aria-label='Claims support chat'>
          <div className='chat-header'>
            <div>
              <p className='chat-title'>Adjuster Chat</p>
              <p className='chat-subtitle'>We usually reply in a few moments</p>
            </div>
            <Button
              type='button'
              className='chat-close-btn'
              aria-label='Close chat'
              onClick={() => setIsOpen(false)}
            >
              <FiX />
            </Button>
          </div>

          <div className='chat-body'>
            {messages.map(message => (
              <div
                key={message.id}
                className={`chat-message ${message.sender === 'user' ? 'message-user' : 'message-assistant'}`}
              >
                {message.text}
              </div>
            ))}
          </div>

          <form className='chat-form' onSubmit={handleSend}>
            <input
              className='chat-input'
              type='text'
              placeholder='Type your message...'
              value={draft}
              onChange={event => setDraft(event.target.value)}
              aria-label='Message'
            />
            <button type='submit' className='chat-send-btn' aria-label='Send message'>
              <FiSend />
            </button>
          </form>
        </div>
      )}

      <button type='button' className='chat-btn' onClick={() => setIsOpen(!isOpen)}>
        <FiMessageSquare className='chat-icon' />
        <span className='chat-badge'>1</span>
      </button>
    </div>
  );
};

export default ChatIcon;
