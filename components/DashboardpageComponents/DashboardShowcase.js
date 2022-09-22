import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

const DashboardShowcase = () => {
   const router = useRouter();
   const [brandLogo] = useState(
      'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
   );

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      if (!user) {
         router.push(`/?redirect=dashboard`);
      }
   }, [router, user]);

   return (
      <div className="dashboard-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box details">
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop Admin</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/dashboard`}>
                           <span>Dashboard</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <h3
                     suppressHydrationWarning={true}
                  >{`${user?.firstName} ${user?.lastName}`}</h3>
                  <h4 suppressHydrationWarning={true} className="my-0">
                     {user?.email}
                  </h4>
                  <h5 suppressHydrationWarning={true}>{user?.phoneNumber}</h5>
               </div>
               <div className="img">
                  <img src={brandLogo} alt="S-SHOP" />
                  <h5 suppressHydrationWarning={true} className="my-0">
                     S-SHOP
                  </h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DashboardShowcase;
