import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { changeLogin } from '../../store/actions/userActions';
import { CHANGE_USER_LOGIN_RESET } from '../../store/constants/userConstants';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { SmallWhiteSpinner } from '../Spinner';

const ChangeLoginForm = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const [currentPassword, setCurrentPassword] = useState('');
   const [newPassword, setNewPassword] = useState('');
   const [retypePassword, setRetypePassword] = useState('');
   const [showPassword1, setShowPassword1] = useState(false);
   const [showPassword2, setShowPassword2] = useState(false);
   const [showPassword3, setShowPassword3] = useState(false);

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const changeLoginState = useSelector((state) => state.changeLogin);
   const { success, loading } = changeLoginState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         router.push('/?redirect=changelogin');
      }
   }, [user, router]);

   useEffect(() => {
      dispatch({ type: CHANGE_USER_LOGIN_RESET });
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(changeLogin({ currentPassword, newPassword, retypePassword }));
   };

   return (
      <div className="change-login-form section">
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
                        <Link href={`/changelogin`}>
                           <span>login details</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <div className="password">
                     <input
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        type={showPassword1 ? 'text' : 'password'}
                        placeholder="Password *"
                     />
                     <span onClick={() => setShowPassword1(!showPassword1)}>
                        {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
                  <div className="password">
                     <input
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type={showPassword2 ? 'text' : 'password'}
                        placeholder="Confirm password *"
                     />
                     <span onClick={() => setShowPassword2(!showPassword2)}>
                        {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
                  <div className="password">
                     <input
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                        type={showPassword3 ? 'text' : 'password'}
                        placeholder="Confirm password *"
                     />
                     <span onClick={() => setShowPassword3(!showPassword3)}>
                        {showPassword3 ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
                  {success && (
                     <SuccessMessageBox msg="Login details updated successfully! Click on the back button" />
                  )}
                  {msg && <ErrorMessageBox msg={msg} />}
                  <div>
                     <button className="btn btn-primary">
                        {loading ? <SmallWhiteSpinner /> : 'Update'}
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

export default ChangeLoginForm;
