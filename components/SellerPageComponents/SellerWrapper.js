import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSeller } from '../../store/actions/userActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import SellerProducts from './SellerProducts';
import SellerShowcase from './SellerShowcase';

const SellerWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const sellerDetailsState = useSelector((state) => state.getSeller);
   const { loading, seller, products } = sellerDetailsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         router.push(`/?redirect=seller/${router.query.id}`);
      }

      if (router.query.id) {
         dispatch(getSeller(router.query.id));
      }
   }, [dispatch, user, router]);

   return (
      <div className="seller-wrapper">
         {loading ? (
            <PrimarySpinner />
         ) : msg ? (
            <>
               <div className="container">
                  <ErrorMessageBox msg={msg} />
               </div>
            </>
         ) : (
            seller && (
               <>
                  <SellerShowcase seller={seller} />
                  <SellerProducts products={products} />
               </>
            )
         )}
      </div>
   );
};

export default SellerWrapper;
