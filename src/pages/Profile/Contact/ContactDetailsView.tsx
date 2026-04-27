import {
  Card,
  CardContent,
  Typography
} from '../../../common/components';

import { HiIdentification } from 'react-icons/hi';
import { FiEdit2 } from 'react-icons/fi';

import type { ViewContactDetailsProps } from './interfaces';

import './ContactDetailsView.css';

function ContactDetailsView({ contactData, onEditClick }: ViewContactDetailsProps) {
  return (
    <div className="container">
      <Card className="card" variant="outlined-raised">
        <CardContent className="card-content">

          <div className="header">
            <Typography
              variant="h3"
              className="text-primary"
              startDecorator={<HiIdentification size={30} className='mainicon'/>}
            >
              Contact Details
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
                Email
              </Typography>

              <Typography variant="body1">
                { contactData.email}
              </Typography>
            </div>

            <div>
              <Typography variant="body1">
                Primary Phone
              </Typography>

              <Typography variant="body1">
                {contactData.primaryPhone}
              </Typography>
            </div>

            <div>
              <Typography variant="body1">
                Address
              </Typography>

              <Typography variant="body1">
                {contactData.street}, {contactData.city}, {contactData.state}, {contactData.zipCode}
              </Typography>
            </div>

            <div>
              <Typography variant="body1">
                Preferred Communication
              </Typography>

              <Typography variant="body1">
                {contactData.preferredCommunication}
              </Typography>
            </div>

          </div>

        </CardContent>
      </Card>
    </div>
  );
}

export default ContactDetailsView;