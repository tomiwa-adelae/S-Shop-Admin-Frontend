import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/actions/userActions';

const Header = () => {
   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const [userDetails, setUserDetails] = useState(null);

   useEffect(() => {
      setUserDetails(user);
   }, [user]);

   return (
      <header>
         <div className="wrapper">
            <div className="logo">
               <Link href="/">
                  <h3>
                     S-<span className="text-secondary">S</span>H
                     <span className="text-grey">O</span>P{' '}
                     <span className="text-secondary">A</span>DMIN
                  </h3>
               </Link>
            </div>
            <nav>
               {userDetails ? (
                  <span suppressHydrationWarning={true}>
                     <span className="mx-0">{`Welcome, ${userDetails.firstName}`}</span>
                     <Link href="/dashboard">
                        <span>
                           <FaUserAlt className="mx-0" />
                           Dashboard
                        </span>
                     </Link>
                     <Link href="/" className="text-danger">
                        <span onClick={() => dispatch(logout())}>
                           <MdLogout
                              size={20}
                              fontWeight="bolder"
                              className="mx-0"
                           />
                           Logout
                        </span>
                     </Link>
                  </span>
               ) : (
                  <span>
                     <Link href="/">
                        <span>
                           <FaUserAlt className="mx-0" />
                           Login
                        </span>
                     </Link>
                  </span>
               )}
            </nav>
         </div>
      </header>
   );
};

export default Header;
