import Link from 'next/link';

const SellerShowcase = ({ seller }) => {
   return (
      <div className="seller-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box details">
                  <h3>{`${seller?.firstName} ${seller?.lastName}`}</h3>
                  <h4 className="my-0">{seller?.email}</h4>
                  <h5>{seller?.phoneNumber}</h5>
                  <h5 className="my-0">Bank name: {seller?.bankName}</h5>
                  <h5 className="my-0">
                     Account number: {seller?.accountNumber}
                  </h5>
                  <h5>Name of account holder: {seller?.nameOfAccountHolder}</h5>
               </div>
               <div className="img">
                  <img
                     src={
                        seller?.brandLogo ||
                        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg'
                     }
                     alt={seller?.brandName}
                  />
                  <h5 className="my-0">{seller?.brandName}</h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SellerShowcase;
