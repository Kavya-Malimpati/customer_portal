import RegisterFNOL from '../../Claims/RegisterFNOL';

const AgencyTab = () => {
  return (
    <div>
      <RegisterFNOL
        selectedClaim={{ claimNumber: 'MC-8821', vehicle: 'N/A' }}
        onChangeClaim={() => {}}
      />
    </div>
  );
};

export default AgencyTab;
