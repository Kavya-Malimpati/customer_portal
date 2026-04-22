import Button from '../../../common/components/Button/Button';
import Card from '../../../common/components/Card/Card';
import CardContent from '../../../common/components/Card/CardContent';
import CardFooter from '../../../common/components/Card/CardFooter';
import CardHeader from '../../../common/components/Card/CardHeader';
import Typography from '../../../common/components/Typography/Typography';

import type { ViewContactDetailsProps } from './interfaces';

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value?: string;
}) => (
  <div className="grid grid-cols-2 gap-6 py-1">
    <Typography
      variant="body2"
      color="primary"
    >
      {label}
    </Typography>

    <Typography variant="body2">
      {value || '-'}
    </Typography>
  </div>
);

function ViewContactDetailsView({
  contactData,
  navigate,
}: ViewContactDetailsProps) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <Card className="w-[600px] bg-white shadow-xl">
        <CardHeader
          title={
            <Typography variant="subtitle1">
              Contact Details
            </Typography>
          }
        />
        <CardContent className="flex flex-col gap-3 p-6">
          <InfoRow
            label="Primary Phone Number"
            value={contactData.primaryPhone}
          />
          <InfoRow
            label="Secondary Phone Number"
            value={contactData.secondaryPhone}
          />
          <InfoRow
            label="Email"
            value={contactData.email}
          />
          <InfoRow
            label="Street"
            value={contactData.street}
          />
          <InfoRow
            label="City"
            value={contactData.city}
          />
          <InfoRow
            label="State"
            value={contactData.state}
          />
          <InfoRow
            label="ZIP Code"
            value={contactData.zipCode}
          />
          <InfoRow
            label="Preferred Communication"
            value={contactData.preferredCommunication}
          />
        </CardContent>

        <CardFooter className="flex justify-end p-6 border-t">
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => navigate('/edit-contact')}
          >
            Edit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ViewContactDetailsView;