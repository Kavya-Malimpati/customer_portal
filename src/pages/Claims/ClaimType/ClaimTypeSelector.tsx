import { useNavigate } from 'react-router-dom';

import { Button, Card, CardContent, Typography } from '../../../common/components';

import './ClaimTypeSelector.css';

interface ClaimTypeSelectorProps {
  onClose?: () => void;
}

const ClaimTypeSelector = ({ onClose }: ClaimTypeSelectorProps) => {
  const navigate = useNavigate();

  return (
    <Card variant='outlined' className='claim-type-selector'>
      <CardContent>
        <div className='claim-type-header'>
          <Typography variant='body2'>Select the type of claim you want to report.</Typography>
        </div>

        <div className='claim-type-buttons'>
          <Button
            variant='contained'
            onClick={() => {
              onClose?.();
              navigate('/claims/fnol/auto');
            }}
          >
            Auto Insurance
          </Button>

          <Button
            variant='contained'
            onClick={() => {
              onClose?.();
              navigate('/claims/fnol/home');
            }}
          >
            Home Insurance
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClaimTypeSelector;
