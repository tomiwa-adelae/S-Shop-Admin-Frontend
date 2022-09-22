import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellerDetails } from '../../store/actions/orderActions';
import DetailsModal from './DetailsModal';
import LoadingModal from './LoadingModal';

const OrderDetailsItems = ({ orderDetails }) => {
   const dispatch = useDispatch();

   const [openModal, setOpenModal] = useState(false);

   const sellerDetailsState = useSelector((state) => state.sellerDetails);
   const { loading, seller } = sellerDetailsState;

   useEffect(() => {
      if (seller) {
         setOpenModal(true);
      }
   }, [seller]);

   return (
      <div className="order-items section">
         <div className="container">
            <div className="wrapper">
               {orderDetails.orderItems.map((order) => (
                  <div key={order._id} className="order my-0">
                     <div className="img">
                        <img src={order.productImage} alt={order.name} />
                     </div>
                     <div className="details">
                        <div className="col-one p-0">
                           <Link
                              href="/product/[id]"
                              as={`/product/${order.id}`}
                           >
                              <h5 className="name">
                                 {order.name.length >= 40
                                    ? `${order.name.substring(0, 40)}...`
                                    : order.name}
                              </h5>
                           </Link>
                           <h6 className="my-0">Brand: {order.brand}</h6>
                           <h6>
                              {order.qty} x {order.price} = #{' '}
                              {order.qty * order.price}
                           </h6>
                           <button
                              onClick={() =>
                                 dispatch(getSellerDetails(order?.sellerId))
                              }
                              className="btn btn-grey my-0"
                           >
                              See seller's details
                           </button>
                        </div>
                        <div className="col-two p-0">
                           {orderDetails?.isPaid ? (
                              <span className="badge badge-secondary my-0">
                                 Paid
                              </span>
                           ) : (
                              <span className="badge badge-danger my-0">
                                 Not Paid
                              </span>
                           )}
                           {orderDetails?.isDelivered ? (
                              <span className="badge badge-secondary my-0">
                                 Delivered
                              </span>
                           ) : (
                              <span className="badge badge-danger my-0">
                                 Not Delivered
                              </span>
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
         {loading && <LoadingModal />}
         {openModal && (
            <DetailsModal
               closeModal={() => setOpenModal(false)}
               seller={seller}
            />
         )}
      </div>
   );
};

export default OrderDetailsItems;
