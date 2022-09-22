import React from 'react';
import AllSellersIntro from '../components/AllSellersComponents/AllSellersIntro';
import AllSellersList from '../components/AllSellersComponents/AllSellersList';
import BackBtn from '../components/BackBtn';

const allseller = () => {
   return (
      <div className="all-sellers-page">
         <BackBtn to="/dashboard" />
         <AllSellersIntro />
         <AllSellersList />
      </div>
   );
};

export default allseller;
