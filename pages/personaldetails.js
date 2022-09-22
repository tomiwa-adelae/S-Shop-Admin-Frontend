import BackBtn from '../components/BackBtn';
import PersonalDetailsForm from '../components/PersonalDetailsComponents/PersonalDetailsForm';

const personaldetails = () => {
   return (
      <div className="personal-details-page">
         <BackBtn to="/dashboard" />
         <PersonalDetailsForm />
      </div>
   );
};

export default personaldetails;
