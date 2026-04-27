import {
  Card,
  CardContent,
  Typography
} from '../../../common/components';

import { useTranslation } from 'react-i18next';
import type { PersonalDetailsData,PersonalDetailsDisplayProps } from './Interfaces';

import {
  FiEdit2,
  FiUser
} from 'react-icons/fi';

import './PersonalDetailsDisplay.css';


const PersonalDetailsDisplay = ({ data, onEditClick }: PersonalDetailsDisplayProps) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <Card variant="outlined-raised" className="card">
        <CardContent className="card-content">

          <div className="header">
            <Typography
              variant="h3"
              color='primary'
              className='text-primary'
              startDecorator={<FiUser className='mainicon' size={28}  />}
            >
              {t('personalDetails.title')}
            </Typography>

            <span className='pencilicon'
              onClick={onEditClick}
            >
              <FiEdit2 size={16} />
            </span>
          </div>

          <div className="grid">

            <div>
              <Typography variant="body1">
                Full Name
              </Typography>

              <Typography variant="body1">
                {data.firstName} {data.middleName} {data.lastName}
              </Typography>
            </div>

            <div>
              <Typography variant="body1">
                Date of Birth
              </Typography>

              <Typography variant="body1">
                {data.dateOfBirth}
              </Typography>
            </div>

            <div>
              <Typography variant="body1">
                Gender
              </Typography>

              <Typography variant="body1">
                {data.gender}
              </Typography>
            </div>

            <div>
              <Typography variant="body1">
                Marital Status
              </Typography>

              <Typography variant="body1">
                {data.maritalStatus}
              </Typography>
            </div>

          </div>

        </CardContent>
      </Card>

      
    </div>
  );
};

export default PersonalDetailsDisplay;