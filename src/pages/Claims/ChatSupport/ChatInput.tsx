import React from 'react';
import { FiSend } from 'react-icons/fi';

import {
  Button,
  FormInput,
} from '../../../common/components';

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  value,
  onChange,
  onSend,
}) => {
  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!value.trim()) {
      return;
    }

    onSend();
  };

  return (
    <form
      className="claim-chat-footer"
      onSubmit={handleSubmit}
    >
      <div className="claim-chat-input-wrapper">
        <FormInput
          id="claim-chat-message"
          name="claim-chat-message"
          value={value}
          placeholder="Type your message..."
          variant="outlined"
          size="md"
          autoComplete="off"
          onChange={event => onChange(event.target.value)}
        />
      </div>

      <Button
        type="submit"
        color="primary"
        size="medium"
        ariaLabel="Send Message"
        className="claim-send-btn"
      >
        <FiSend size={18} />
      </Button>
    </form>
  );
};

export default ChatInput;