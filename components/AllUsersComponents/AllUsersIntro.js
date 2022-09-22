import Link from 'next/link';
import { useSelector } from 'react-redux';

const AllUsersIntro = () => {
   const getUsersState = useSelector((state) => state.getUsers);
   const { users } = getUsersState;

   return (
      <div className="all-users-intro section-small">
         <div className="container">
            <div className="wrapper">
               <div className="links-tags">
                  <h6 className="py-1">
                     <Link href="/">
                        <span>S-Shop Admin</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/dashboard`}>
                        <span>Dashboard</span>
                     </Link>{' '}
                     &gt;{' '}
                     <Link href={`/allusers`}>
                        <span>
                           All users{' '}
                           <strong className="text-secondary">
                              ({users?.length || 0})
                           </strong>
                        </span>
                     </Link>{' '}
                  </h6>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AllUsersIntro;
