import React, { useEffect, useRef, useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { Button } from '../../../common/components';

import ChatHeader from './ChatHeader';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import type { Message, ChatSupportProps } from './types';

import './ChatSupport.css';

const ChatSupport: React.FC<ChatSupportProps> = ({
  unreadCount = 1,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
  (window as Window & {
    openClaimSupport?: () => void;
  }).openClaimSupport = () => {
    setIsOpen(true);
  };

  return () => {
    delete (window as Window & {
      openClaimSupport?: () => void;
    }).openClaimSupport;
  };
}, []);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'support',
      text: 'Hello! Welcome to Claim Support.',
      time: '10:15 AM',
    },
    {
      id: 2,
      sender: 'support',
      text: 'How can we assist you with your claim today?',
      time: '10:15 AM',
    },
  ]);

  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop =
        messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const sendMessage = () => {
    if (!message.trim()) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: message.trim(),
      time: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    setTimeout(() => {
      const supportReply: Message = {
        id: Date.now() + 1,
        sender: 'support',
        text:
          'Thank you for contacting Claim Support. One of our representatives will assist you shortly.',
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      setMessages(prev => [...prev, supportReply]);
    }, 700);
  };

  return (
    <div className="claim-chat">
      {isOpen && (
        <div className="claim-chat-window">
          <ChatHeader onClose={closeChat} />

          <div
            ref={messagesRef}
            className="claim-chat-body"
          >
            {messages.map(message => (
              <ChatMessage
                key={message.id}
                message={message}
              />
            ))}
          </div>

          <ChatInput
            value={message}
            onChange={setMessage}
            onSend={sendMessage}
          />
        </div>
      )}

      <Button
        type="button"
        className="claim-chat-button"
        onClick={toggleChat}
        aria-label="Open Claim Support Chat"
      >
        <FiMessageSquare className="claim-chat-icon" />

        {unreadCount > 0 && (
          <span className="claim-chat-badge">
            {unreadCount}
          </span>
        )}
      </Button>
    </div>
  );
};

export default ChatSupport;