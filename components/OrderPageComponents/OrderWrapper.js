import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../store/actions/orderActions';
import { ErrorMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import OrderDetailsCarousel from './OrderDetailsCarousel';
import OrderDetailsInfo from './OrderDetailsInfo';
import OrderDetailsIntro from './OrderDetailsIntro';
import OrderDetailsItems from './OrderDetailsItems';

const OrderWrapper = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const getOrderState = useSelector((state) => state.getOrder);
   const { order, orderItems, loading, orderUser } = getOrderState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         router.push(`/?redirect=order/${router.query.id}`);
      }

      if (router.query.id) {
         dispatch(getOrder(router.query.id));
      }
   }, [dispatch, user, router]);

   return (
      <div className="order-wrapper">
         {loading ? (
            <PrimarySpinner />
         ) : msg ? (
            <>
               <div className="container">
                  <ErrorMessageBox msg={msg} />
               </div>
            </>
         ) : (
            order && (
               <>
                  <OrderDetailsCarousel orderItems={orderItems} />
                  <OrderDetailsIntro />
                  <OrderDetailsItems
                     orderDetails={order}
                     orderUser={orderUser}
                  />
                  <OrderDetailsInfo order={order} orderUser={orderUser} />
               </>
            )
         )}
      </div>
   );
};

export default OrderWrapper;
