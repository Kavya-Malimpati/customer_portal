import { Button, Typography } from '../../../common/components';
import { FiPhone, FiMessageSquare, FiMail } from 'react-icons/fi';

import './DedicatedAgentUi.css';

import type { DedicatedAgentUiProps } from './Interfaces';

const DedicatedAgentView = ({ agent }: DedicatedAgentUiProps) => {
  return (
    <div className='agent-wrapper'>
      <div className='agent-card'>
        <div className='agent-heading'>
          <Typography variant='h3' color='inverse'>
            Your Dedicated Agent
          </Typography>
        </div>

        <div className='agent-profile'>
          <div className='agent-avatar'>{agent.initials}</div>

          <div className='agent-info'>
            <Typography
              variant='body1'
              color='inverse'
              className='agent-name'
            >
              {agent.name}
            </Typography>

            <Typography
              variant='body2'
              color='inverse'
              className='agent-title'
            >
              {agent.title}
            </Typography>
          </div>
        </div>

        <div className='agent-actions'>
          <Button
            variant='contained'
            className='agent-button'
          >
            <span className='agent-button-content'>
              <FiPhone size={18} />
              <span>Call Agent</span>
            </span>
          </Button>

          <Button
            variant='contained'
            className='agent-button'
          >
            <span className='agent-button-content'>
              <FiMessageSquare size={18} />
              <span>Live Chat</span>
            </span>
          </Button>

          <Button
            variant='contained'
            className='agent-button'
          >
            <span className='agent-button-content'>
              <FiMail size={18} />
              <span>Email Inquiry</span>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DedicatedAgentView;