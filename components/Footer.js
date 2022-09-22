import React from 'react';
import Link from 'next/link';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { RiMastercardFill } from 'react-icons/ri';
import { RiVisaFill } from 'react-icons/ri';
import { BsCashStack } from 'react-icons/bs';

const Footer = () => {
   return (
      <footer>
         <div className="footer-details section">
            <div className="container">
               <div className="wrapper">
                  <div className="box p-1">
                     <div className="head">
                        <h5 className="py-1">Let us help you</h5>
                     </div>
                     <div className="footer-links">
                        <Link href="/">
                           <strong className="my-0">Help center</strong>
                        </Link>
                        <Link href="/">
                           <strong className="my-0">Help center</strong>
                        </Link>
                        <Link href="/">
                           <strong className="my-0">Help center</strong>
                        </Link>
                        <Link href="/">
                           <strong className="my-0">Help center</strong>
                        </Link>
                        <Link href="/">
                           <strong className="my-0">Help center</strong>
                        </Link>
                     </div>
                  </div>
                  <div className="box p-1">
                     <div className="head">
                        <h5 className="py-1">Make money on S-Shop</h5>
                     </div>
                     <div className="footer-links">
                        <Link href="/sellingdashboard">
                           <strong className="my-0">Sell on S-Shop</strong>
                        </Link>
                     </div>
                  </div>
                  <div className="box p-1 footer-social">
                     <div className="head">
                        <h5 className="py-1">Join us on </h5>
                     </div>
                     <div className="footer-links">
                        <Link href="/">
                           <strong className="my-0">
                              <BsFacebook className="icon" />
                           </strong>
                        </Link>
                        <Link href="/">
                           <strong className="my-0">
                              <BsTwitter className="icon" />
                           </strong>
                        </Link>
                        <Link href="/">
                           <strong className="my-0">
                              <BsInstagram className="icon" />
                           </strong>
                        </Link>
                     </div>
                  </div>
                  <div className="box p-1 footer-payments">
                     <div className="head">
                        <h5 className="py-1">Payment Methods</h5>
                     </div>
                     <div className="footer-links">
                        <Link href="/">
                           <strong className="my-0">
                              <RiMastercardFill className="icon" />
                           </strong>
                        </Link>
                        <Link href="/">
                           <strong className="my-0">
                              <RiVisaFill className="icon" />
                           </strong>
                        </Link>
                        <Link href="/">
                           <strong className="my-0">
                              <BsCashStack className="icon" />
                           </strong>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="footer-copyright section">
            <div className="container">
               <p>Copyright &copy; 2022. S-Shop. All rights reserved</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
