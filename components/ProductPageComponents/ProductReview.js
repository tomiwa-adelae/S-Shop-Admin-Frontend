import { FaUserAlt } from 'react-icons/fa';
import Rating from '../Rating';
import { SuccessMessageBox } from '../MessageBox';
import dayjs from 'dayjs';
// import { FaTrash } from 'react-icons/fa';

const ProductReview = ({ product }) => {
   return (
      <div className="product-review section">
         <div className="container">
            <div className="wrapper">
               <div className="review-boxes">
                  <div className="head py-1">
                     <h4>Customer feedbacks and reviews</h4>
                     {product?.reviews?.length >= 3 && (
                        <button className="btn btn-white">See all</button>
                     )}
                  </div>
                  {product?.reviews?.length === 0 && (
                     <SuccessMessageBox msg="No customer reviews!" />
                  )}
                  {product?.reviews?.slice(0, 3)?.map((review) => (
                     <div key={review._id} className="box p-1 my-0">
                        <div className="user my-0">
                           <FaUserAlt className="user-icon mx-0" />
                           <h5>{review.name}</h5>
                        </div>
                        <div className="rating">
                           <Rating rating={review.rating} />
                        </div>
                        <div className="comment my-0">
                           <p>{review.comment}</p>
                        </div>
                        <div className="date">
                           <h6>
                              {dayjs(review.createdAt).format('DD-MM-YYYY')}
                           </h6>
                        </div>
                        {/* <div className="btn">
                           // <FaTrash size={20} />
                        </div> */}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductReview;
