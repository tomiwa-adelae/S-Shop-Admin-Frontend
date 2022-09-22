import Link from 'next/link';
import { useSelector } from 'react-redux';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';

const SellerProducts = ({ products }) => {
   const sellerDetailsState = useSelector((state) => state.getSeller);
   const { seller } = sellerDetailsState;

   return (
      <div className="seller-products section">
         <div className="container">
            <div className="head py-1">
               <h5>
                  All {seller?.firstName} products{' '}
                  <span className="text-secondary">({products?.length})</span>
               </h5>
            </div>

            {products?.length === 0 && (
               <SuccessMessageBox
                  msg={`No products to display! ${seller?.firstName} has no product!`}
               />
            )}
            <div className="wrapper">
               <div className="boxes">
                  {products?.map((product) => (
                     <div key={product?._id} className="box my-0">
                        <div className="img">
                           <img src={product.productImage} alt={product.name} />
                        </div>
                        <div className="details">
                           <div className="col-one p-0">
                              <div className="name">
                                 <Link
                                    href="/product[id]"
                                    as="product/product._id"
                                 >
                                    <h5>
                                       {product.name.length >= 50
                                          ? `${product.name.substring(
                                               0,
                                               51
                                            )}...`
                                          : product.name}
                                    </h5>
                                 </Link>
                                 <h6 className="my-0">
                                    Brand: {product.brand}
                                 </h6>
                                 <h6>Category: {product.category}</h6>
                              </div>
                           </div>
                           <div className="col-two p-0">
                              <h4># {product.price}</h4>
                              <Link
                                 href="/product/[id]"
                                 as={`/product/${product._id}`}
                              >
                                 <button className="btn btn-secondary my-0">
                                    See details
                                 </button>
                              </Link>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default SellerProducts;
