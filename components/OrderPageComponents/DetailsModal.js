import React from 'react';
import { FaTimes } from 'react-icons/fa';

const DetailsModal = ({ seller, closeModal }) => {
   return (
      <div className="details-modal">
         <div className="content p-2">
            <div className="head">
               <h4>Seller details</h4>
               <FaTimes
                  onClick={() => closeModal()}
                  cursor={'pointer'}
                  size={30}
               />
            </div>
            <section className="my-1">
               <div className="img">
                  <img
                     src={
                        seller.brandLogo ||
                        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
                     }
                     alt={seller.brandName}
                  />
               </div>
               <h5>
                  Name: {seller.firstName} {seller.lastName}
               </h5>
               <h5>Email: {seller.email}</h5>
               <h5>Phone number: {seller.phoneNumber}</h5>
               <h5>Brand name: {seller.brandName}</h5>
            </section>
            <div className="btns">
               <button onClick={() => closeModal()} className="btn btn-primary">
                  Close modal
               </button>
            </div>
         </div>
      </div>
   );
};

export default DetailsModal;
