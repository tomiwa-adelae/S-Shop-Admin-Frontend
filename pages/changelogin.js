import React from 'react';
import BackBtn from '../components/BackBtn';
import ChangeLoginForm from '../components/ChangeLoginComponents/ChangeLoginForm';

const changelogin = () => {
   return (
      <div className="change-login-page">
         <BackBtn to="/dashboard" />
         <ChangeLoginForm />
      </div>
   );
};

export default changelogin;
