import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import { registerUser } from '../../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { SmallWhiteSpinner } from '../Spinner';
import { ErrorMessageBox } from '../MessageBox';

const RegisterForm = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [phoneNumber, setPhoneNumber] = useState('');
   const [password, setPassword] = useState('');
   const [retypePassword, setRetypePassword] = useState('');
   const [showPassword1, setShowPassword1] = useState(false);
   const [showPassword2, setShowPassword2] = useState(false);

   const userState = useSelector((state) => state.register);
   const { loading, user } = userState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      const redirect = router.query.redirect
         ? router.query.redirect
         : '/dashboard';

      if (user) {
         router.push(redirect);
      }
   }, [user, router, dispatch]);

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(
         registerUser({
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
            retypePassword,
         })
      );
   };

   return (
      <div className="register-form section">
         <div className="container">
            <div className="head py-1">
               <h4>S-SHOP Admin</h4>
            </div>
            <div className="intro">
               <p className="lead">
                  Create a S-Shop Admin account. |{' '}
                  <Link href="/">
                     <span className="text-secondary">
                        Login to your Admin account
                     </span>
                  </Link>
               </p>
            </div>
            <form onSubmit={handleSubmit}>
               <section className="box section">
                  <h6>Personal information</h6>

                  <div>
                     <input
                        type="text"
                        placeholder="First name *"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type="text"
                        placeholder="Last name *"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                     />
                  </div>
                  <div>
                     <input
                        type="email"
                        placeholder="Email address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
               <section className="box section-small">
                  <h6>Login details</h6>
                  <div className="password">
                     <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword1 ? 'text' : 'password'}
                        placeholder="Password *"
                     />
                     <span onClick={() => setShowPassword1(!showPassword1)}>
                        {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
                  <div className="password">
                     <input
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                        type={showPassword2 ? 'text' : 'password'}
                        placeholder="Confirm password *"
                     />
                     <span onClick={() => setShowPassword2(!showPassword2)}>
                        {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                     </span>
                  </div>
               </section>
               {msg && <ErrorMessageBox msg={msg} />}
               <div>
                  <button className="btn btn-primary">
                     {' '}
                     {loading ? <SmallWhiteSpinner /> : 'Register'}{' '}
                  </button>
               </div>
               <p>
                  Already have a Admin account?{' '}
                  <Link href="/">
                     <span className="text-secondary">
                        Login to your admin account
                     </span>
                  </Link>
               </p>
            </form>
         </div>
      </div>
   );
};

export default RegisterForm;
