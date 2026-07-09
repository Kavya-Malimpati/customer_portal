import React from 'react';
import { FiHeadphones, FiUser } from 'react-icons/fi';

import { Typography } from '../../../common/components';
import type { Message } from './types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`claim-message ${isUser ? 'user' : 'support'}`}>
      <div className="claim-message-icon">
        {isUser ? <FiUser size={18} /> : <FiHeadphones size={18} />}
      </div>

      <div className="claim-message-content">
        <Typography
          variant="body2"
          color={isUser ? 'inverse' : 'body'}
          className="claim-message-text"
        >
          {message.text}
        </Typography>

        <Typography
          variant="caption"
          color="muted"
          className="claim-message-time"
        >
          {message.time}
        </Typography>
      </div>
    </div>
  );
};

export default ChatMessage;