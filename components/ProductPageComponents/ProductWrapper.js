import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../store/actions/productActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import ProductDescription from './ProductDescription';
import ProductReview from './ProductReview';
import ProductShowcase from './ProductShowcase';

const ProductWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const getProductState = useSelector((state) => state.getProduct);
   const { loading, product } = getProductState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         router.push(`/?redirect=product/${router.query.id}`);
      }

      if (router.query.id) {
         dispatch(getProduct(router.query.id));
      }
   }, [dispatch, user, router]);

   return (
      <div className="product-wrapper">
         {loading ? (
            <PrimarySpinner />
         ) : msg ? (
            <>
               <div className="container">
                  <ErrorMessageBox msg={msg} />
               </div>
            </>
         ) : (
            product && (
               <>
                  <ProductShowcase product={product} />
                  <ProductDescription product={product} />
                  <ProductReview product={product} />
               </>
            )
         )}
      </div>
   );
};

export default ProductWrapper;
