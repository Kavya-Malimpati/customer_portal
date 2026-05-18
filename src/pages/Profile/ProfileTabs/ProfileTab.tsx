import PersonalDetailsPage from '../ViewPersonalDetails/PersonalDetailsPage';
import ContactDetails from '../Contact';
import AccountSecurity from '../AccountSecurity';       
const ProfileTab = () => {
  return (<>
    <div className="mt-6 flex flex-col md:flex-row gap-4 items-stretch ">
      
      <div className="w-full md:w-1/2 flex">
        <PersonalDetailsPage />
      </div>

      <div className="w-full md:w-1/2 flex">
        <ContactDetails />
      </div>

    </div>
     <AccountSecurity/>
    </>
  );
};

export default ProfileTab;