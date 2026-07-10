import React from 'react';
import { FiHeadphones, FiX } from 'react-icons/fi';

import { Button, Typography } from '../../../common/components';

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <div className="claim-chat-header">
      <div className="claim-chat-profile">
        <div className="claim-chat-avatar">
          <FiHeadphones size={22} />
        </div>

        <div className="claim-chat-profile-content">
          <Typography variant="subtitle1" color="inverse">
            Claim Support
          </Typography>

          <div className="claim-chat-status">
            <span className="claim-chat-status-dot" />

            <Typography variant="caption" color="inverse">
              Online • Usually replies instantly
            </Typography>
          </div>
        </div>
      </div>

      <Button
        type="button"
        variant="text"
        color="inherit"
        ariaLabel="Close chat"
        className="claim-chat-close"
        onClick={onClose}
      >
        <FiX size={20} />
      </Button>
    </div>
  );
};

export default ChatHeader;