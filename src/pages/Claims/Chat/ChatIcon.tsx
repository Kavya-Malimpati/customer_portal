import { FiMessageSquare } from 'react-icons/fi';
import './Chat.css';

const ChatIcon = () => {
  return (
    <div className='chat-wrapper'>
      <div className='chat-btn'>
        <FiMessageSquare className='chat-icon' />

        <span className='chat-badge'>1</span>
      </div>
    </div>
  );
};

export default ChatIcon;
