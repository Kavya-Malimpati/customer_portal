
import Card from '../../../common/components/Card';
import CardContent from '../../../common/components/Card/CardContent';
import Typography from '../../../common/components/Typography/Typography';
import Button from '../../../common/components/Button';
import type { AgentContactCardProps } from './Interface';


const AgentContactCard = ({ agent, onMessageClick }: AgentContactCardProps) => {
  return (
    <Card variant="outlined">
      <CardContent className="p-8 flex flex-col gap-4">
        
        <Typography variant="h2">{agent.name}</Typography>

        <Typography variant="body1">
          Agency: {agent.agency}
        </Typography>

        <Typography variant="body1">
          Phone:{' '}
          <a href={`tel:${agent.phone}`} style={{ color: 'var(--color-primary)' }}>
            {agent.phone}
          </a>
        </Typography>

        <Typography variant="body1">
          Email:{' '}
          <a href={`mailto:${agent.email}`} style={{ color: 'var(--color-primary)' }}>
            {agent.email}
          </a>
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
      </CardContent>
    </Card>
  );
};

export default AgentContactCard;