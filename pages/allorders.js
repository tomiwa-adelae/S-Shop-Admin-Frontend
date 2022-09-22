import React from 'react';
import AllOrdersIntro from '../components/AllOrdersComponents/AllOrdersIntro';
import AllOrdersList from '../components/AllOrdersComponents/AllOrdersList';
import BackBtn from '../components/BackBtn';

const allorders = () => {
   return (
      <div className="all-orders-page">
         <BackBtn to="/dashboard" />
         <AllOrdersIntro />
         <AllOrdersList />
      </div>
   );
};

export default allorders;
