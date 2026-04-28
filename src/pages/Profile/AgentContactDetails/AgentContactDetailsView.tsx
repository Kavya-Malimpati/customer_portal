import {
  Typography,
  Button,
  Modal,
  Card,
  CardContent,
  CardFooter,
} from '../../../common/components';

import type { Agent, AgentOfficeDetails } from './Interface';
import './AgentContactView.css';
import { MdLocationOn } from "react-icons/md";
import { FiTruck, FiGlobe } from "react-icons/fi";
import { FiMail, FiPhone } from "react-icons/fi";
interface Props {
  agent: Agent | null;
  office: AgentOfficeDetails | null;
  loading: boolean;

  isModalOpen: boolean;

  onOpenModal: () => void;
  onCloseModal: () => void;

  onDirections: () => void;
  onCallClaim: () => void;
}

const AgentContactView = ({
  agent,
  office,
  loading,
  isModalOpen,
  onOpenModal,
  onCloseModal,
  onDirections,
  onCallClaim,
}: Props) => {
  if (loading) return <Typography>Loading...</Typography>;

  return (
    <main className="main-container">

      <div className="grid-layout">
        {agent && (
          <Card variant="outlined-raised" className="agent-card">
            <CardContent className="flex flex-col items-center w-full">

              <div className="agent-avatar">
                {agent.name.charAt(0)}
              </div>

              <Typography variant="h3" className="text-center" color="primary" >
                {agent.name}
              </Typography>

              <Typography variant="body2" className="mt-1 text-center text-gray-600">
                Senior Principal Agent
              </Typography>
              <div className="flex gap-2 mt-3 mb-4">
                <span className="px-4 py-2 rounded bg-green-100 text-green-800 text-xs font-semibold">
                  5.0 ★
                </span>
                <span className="px-4 py-2 rounded bg-gray-100 text-gray-700 text-xs font-semibold">
                  Top Rated
                </span>
              </div>
              <div className="flex flex-col gap-3 py-6 w-full max-w-xs">
                <div className="contact-box">
                  <FiMail />
                  <Typography variant="body1" className="text-sm truncate">
                    {agent.email}
                  </Typography>
                </div>

                <div className="contact-box">
                  <FiPhone />
                  <Typography variant="body1" className="text-sm truncate">
                    {agent.phone}
                  </Typography>
                </div>
              </div>

            </CardContent>

            <CardFooter className="w-full">
              <Button
                variant="contained"
                fullWidth
                onClick={() => window.open(`tel:${agent.phone}`)}
              >
                Book a Call
              </Button>
            </CardFooter>
          </Card>
        )}
        {office && (
          <div className="office-section flex flex-col gap-4">
            <Card variant="outlined-raised">
              <CardContent>
                <div className="office-header">

                  <div>
                    <Typography variant="h2" color="primary">
                      {office.officeName}
                    </Typography>
                    <Typography variant="body2">
                      Headquarters & Client Success Center
                    </Typography>
                  </div>
                 

                </div>
              </CardContent>
            <div className="address-strip address-flex">
  <div className="address-left">
    <MdLocationOn className="location-icon" />

    <div>
 <Typography variant="body2" className="address-line2">
       {office.addressLine1}, {office.addressLine2}, {office.city}, {office.state} {office.zip}
      </Typography>
    </div>
  </div>

 
  <Button variant="outlined" onClick={onDirections}>
    Get Directions
  </Button>

</div>
             

              
            </Card>
            <div className="grid md:grid-cols-2 gap-4">

              <Card variant="outlined-raised" className="p-4">
                <CardContent>
                  <div className="feature-card">
                    <div className="feature-icon icon-info">
  <FiTruck size={20} />
</div>

                    <div>
                      <Typography variant="h2" className="feature-title" color="primary"> 
                        On-Site Inspections
                      </Typography>

                      <Typography variant="body2" className="feature-desc">
                        Walk-in vehicle inspections available every Tuesday and Thursday.
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="outlined-raised" className="p-4">
                <CardContent>
                  <div className="feature-card">
                    <div className="feature-icon icon-success">
                        <FiGlobe size={20} />
                        </div>

                    <div>
                      <Typography variant="h2" className="feature-title" color="primary">
                        Multilingual Support
                      </Typography>

                      <Typography variant="body2" className="feature-desc">
                        English, Spanish, and Mandarin speaking staff on-site daily.
                      </Typography>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
            <div className="claim-box">
              <Typography variant='h2'color="inverse"> Claim Support Center</Typography>

              <Typography variant="body1" className="feature-desc" style={{ color: 'var(--text-invers)' }}>
                Need immediate assistance with an existing claim? Our agency team is dedicated to fast-tracking your resolution.
              </Typography>

              <div className="claim-actions">

<Button
  variant="contained"
  onClick={onCallClaim}
  className="claim-primary-btn"
>
  Direct Claim Line
</Button>

<Button
  variant="contained"
  onClick={onOpenModal}
  className="claim-secondary-btn"
>
  Emergency Procedures
</Button>
              </div>
            </div>

          </div>
        )}
        {office && (
          <Card variant="outlined-raised">
            <CardContent>
              <Typography variant="h3"  style={{ color: 'var(--text-primary)' }}>Office Hours</Typography>

              <div className="mt-4 space-y-1">

                <div className="hours-row">
                  <Typography>Monday - Friday</Typography>
                  <Typography>{office.officeHours.mondayToFriday}</Typography>
                </div>

                <div className="hours-row">
                  <Typography>Saturday</Typography>
                  <Typography>{office.officeHours.saturday}</Typography>
                </div>

                <div className="hours-row">
                  <Typography>Sunday</Typography>
                  <Typography
                     variant="body2" style={{color:office.officeHours.sunday.toLowerCase() === 'closed'? 'var(--color-error)': 'var(--text-primary)',}} >
                    {office.officeHours.sunday}
                  </Typography>
                </div>

              </div>
            </CardContent>
          </Card>
        )}

      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        title="Emergency Procedures"
        slots={{
          actions: (
            <div className="flex justify-end gap-2">
              <Button variant="outlined" onClick={onCloseModal}>
                Close
              </Button>
            </div>
          ),
        }}
      >
        <Typography>
          {office?.claimSupport.emergencyInfo}
        </Typography>
      </Modal>

    </main>
  );
};

export default AgentContactView;