import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../store/actions/userActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import { FaSearch } from 'react-icons/fa';

const AllUsersList = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const [keyword, setKeyword] = useState('');

   const getUsersState = useSelector((state) => state.getUsers);
   const { loading, users } = getUsersState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      if (!user) {
         router.push('/?redirect=allusers');
      }

      dispatch(getUsers());

      if (keyword === '') {
         dispatch(getUsers());
      }
   }, [dispatch, user, keyword, router]);

   const handleSearch = (e) => {
      setKeyword(e.target.value);

      dispatch(getUsers(keyword));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(getUsers({ keyword }));
   };

   return (
      <div className="all-users-list section-small">
         <div className="container">
            <div className="search-box">
               <form onSubmit={handleSubmit}>
                  <div>
                     <span className="search-icon">
                        <FaSearch />
                     </span>
                     <input
                        type="text"
                        value={keyword}
                        onChange={handleSearch}
                        placeholder="Search for users, firstName, lastName, email..."
                     />
                     <button
                        disabled={keyword.length === 0}
                        className={
                           keyword.length === 0
                              ? 'btn btn-grey'
                              : 'btn btn-secondary'
                        }
                     >
                        Search
                     </button>
                  </div>
               </form>
            </div>
            {msg && <ErrorMessageBox msg={msg} />}
            <div className="wrapper">
               {loading && <PrimarySpinner />}
               {users?.length === 0 && (
                  <SuccessMessageBox msg="No users to display!" />
               )}

               <div className="boxes">
                  {users?.map((user) => (
                     <div key={user._id} className="box my-0 p-0">
                        <div className="name">
                           <h5>
                              {user.firstName} {user.lastName}
                           </h5>
                        </div>
                        <div className="email my-1">
                           <h5>{user.email}</h5>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default AllUsersList;
