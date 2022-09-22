import React from 'react';
import AllUsersIntro from '../components/AllUsersComponents/AllUsersIntro';
import AllUsersList from '../components/AllUsersComponents/AllUsersList';
import BackBtn from '../components/BackBtn';

const allusers = () => {
   return (
      <div className="all-users-page">
         <BackBtn to="/dashboard" />
         <AllUsersIntro />
         <AllUsersList />
      </div>
   );
};

export default allusers;
