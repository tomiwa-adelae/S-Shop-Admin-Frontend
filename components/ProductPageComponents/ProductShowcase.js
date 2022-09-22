import Link from 'next/link';
import Rating from '../Rating';

const ProductShowcase = ({ product }) => {
   return (
      <div className="product-showcase section">
         <div className="container">
            <div className="wrapper">
               <div className="box details">
                  <div className="links-tags">
                     <h6 className="py-1">
                        <Link href="/">
                           <span>S-Shop Admin</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/dashboard`}>
                           <span>Dashboard</span>
                        </Link>{' '}
                        &gt;{' '}
                        <Link href={`/product/${product?._id}`}>
                           <span>{product?.name}</span>
                        </Link>{' '}
                     </h6>
                  </div>
                  <h4>{product?.name}</h4>
                  <h5 className="py-1">
                     {product && `Brand: ${product.brand}`}
                  </h5>
                  <Rating rating={product?.rating} />
                  <h3>#{product?.price}</h3>
               </div>
               <div className="box img">
                  <img src={product?.productImage} alt={product?.name} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductShowcase;
