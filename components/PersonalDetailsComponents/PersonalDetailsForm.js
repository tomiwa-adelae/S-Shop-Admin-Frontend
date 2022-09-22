import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { SmallWhiteSpinner } from '../Spinner';
import { updateUser } from '../../store/actions/userActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { UPDATE_USER_DETAILS_RESET } from '../../store/constants/userConstants';

const PersonalDetailsForm = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const updateState = useSelector((state) => state.update);
   const { success, loading } = updateState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const [firstName, setFirstName] = useState(user ? user.firstName : '');
   const [lastName, setLastName] = useState(user ? user.lastName : '');
   const [email] = useState(user ? user.email : '');
   const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : '');

   useEffect(() => {
      if (!user) {
         router.push('/?redirect=personaldetails');
      }
   }, [user, router]);

   useEffect(() => {
      dispatch({ type: UPDATE_USER_DETAILS_RESET });
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(
         updateUser({
            firstName,
            lastName,
            email,
            phoneNumber,
         })
      );
   };

   return (
      <div className="personal-details-form section">
         <div className="container">
            <div className="wrapper">
               <form onSubmit={handleSubmit}>
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
                        <Link href={`/personaldetails`}>
                           <span>Personal Details</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <section className="box section">
                     <h6>Personal Information</h6>
                     <div>
                        <input
                           type="text"
                           value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}
                           placeholder="First name *"
                        />
                     </div>
                     <div>
                        <input
                           type="text"
                           value={lastName}
                           onChange={(e) => setLastName(e.target.value)}
                           placeholder="Last name *"
                        />
                     </div>
                     <div>
                        <input
                           type="email"
                           disabled
                           value={email}
                           placeholder="Email *"
                        />
                     </div>
                     <div>
                        <input
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}
                           type="number"
                           placeholder="Phone number *"
                        />
                     </div>
                  </section>
                  {success && (
                     <SuccessMessageBox msg="Profile updated successfully! Click on the back button" />
                  )}
                  {msg && <ErrorMessageBox msg={msg} />}
                  <div>
                     <button className="btn btn-primary">
                        {loading ? <SmallWhiteSpinner /> : 'Update'}{' '}
                     </button>
                     {success && (
                        <Link href="/dashboard">
                           <button className="btn btn-secondary mx-1">
                              Go back to dashboard
                           </button>
                        </Link>
                     )}
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default PersonalDetailsForm;
