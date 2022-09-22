import React from 'react';
import AdminNotification from '../components/AdminNotification';
import BackBtn from '../components/BackBtn';
import DashboardInfo from '../components/DashboardpageComponents/DashboardInfo';
import DashboardShowcase from '../components/DashboardpageComponents/DashboardShowcase';

const dashboard = () => {
   return (
      <div className="dashboard-page">
         <BackBtn to="/" />
         <AdminNotification />
         <DashboardShowcase />
         <DashboardInfo />
         <AdminNotification />
      </div>
   );
};

export default dashboard;
