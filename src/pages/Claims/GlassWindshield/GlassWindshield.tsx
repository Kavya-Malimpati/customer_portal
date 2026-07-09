import { useState } from 'react';
import { FaShieldAlt } from 'react-icons/fa';

import { Button, Card, CardContent, Typography } from '../../../common/components';

import GlassClaimModal from './GlassClaimModal';

import './GlassWindshield.css';
import type { GlassWindshieldProps } from './Interface';

const GlassWindshield = ({ repairInfo, onRequestRepair }: GlassWindshieldProps) => {
  const [isRepairModalOpen, setIsRepairModalOpen] = useState(false);

  const handleRequestRepair = () => {
    onRequestRepair();
    setIsRepairModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsRepairModalOpen(false);
  };

  return (
    <>
      <Card variant='outlined-raised' className='glass-card'>
        <CardContent className='glass-card-content'>
          <div className='glass-top'>
            <div className='glass-card-header'>
              <Typography variant='h3' color='primary' className='glass-title'>
                {repairInfo.title}
              </Typography>

              <span className='glass-badge'>{repairInfo.badge}</span>
            </div>

            <Typography variant='body2' className='glass-description'>
              {repairInfo.description}
            </Typography>
          </div>

          <div className='glass-middle'>
            <div className='glass-benefit'>
              <FaShieldAlt size={24} />

              <Typography variant='body1'>{repairInfo.benefit}</Typography>
            </div>
          </div>

          <div className='glass-bottom'>
            <Button
              variant='outlined'
              className='glass-button'
              fullWidth
              onClick={handleRequestRepair}
            >
              Request Repair
            </Button>
          </div>
        </CardContent>
      </Card>

      <GlassClaimModal isOpen={isRepairModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default GlassWindshield;
