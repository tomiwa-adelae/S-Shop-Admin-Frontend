import Link from 'next/link';
import { useSelector } from 'react-redux';

const AllProductsIntro = () => {
   const getProductsState = useSelector((state) => state.getProducts);
   const { products } = getProductsState;

   return (
      <div className="all-products-intro section-small">
         <div className="container">
            <div className="wrapper">
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
                     <Link href={`/allproducts`}>
                        <span>
                           All Products{' '}
                           <strong className="text-secondary">
                              ({products?.length || 0})
                           </strong>
                        </span>
                     </Link>{' '}
                  </h6>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AllProductsIntro;
