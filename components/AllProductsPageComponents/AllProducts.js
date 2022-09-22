import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import { FaSearch } from 'react-icons/fa';

const AllProducts = () => {
   const router = useRouter();
   const dispatch = useDispatch();

   const [keyword, setKeyword] = useState('');

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   const getProductsState = useSelector((state) => state.getProducts);
   const { loading, products } = getProductsState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   useEffect(() => {
      if (!user) {
         router.push('/?redirect=allproducts');
      }

      dispatch(getProducts());

      if (keyword === '') {
         dispatch(getProducts());
      }
   }, [dispatch, keyword, user, router]);

   const handleSearch = (e) => {
      setKeyword(e.target.value);

      dispatch(getProducts(keyword));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(getProducts({ keyword }));
   };

   return (
      <div className="all-products section">
         <div className="container">
            <div className="search-box">
               <form onSubmit={handleSubmit}>
                  <div>
                     <span className="search-icon">
                        <FaSearch />
                     </span>
                     <input
                        type="text"
                        value={keyword}
                        onChange={handleSearch}
                        placeholder="Search for products, brands, category..."
                     />
                     <button
                        disabled={keyword.length === 0}
                        className={
                           keyword.length === 0
                              ? 'btn btn-grey'
                              : 'btn btn-secondary'
                        }
                     >
                        Search
                     </button>
                  </div>
               </form>
            </div>
            {loading && <PrimarySpinner />}

            {products?.length === 0 && (
               <SuccessMessageBox msg="No products to display! Create one now!" />
            )}
            {msg && <ErrorMessageBox msg={msg} />}
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
                                    href="/product/[id]"
                                    as={`/product/${product._id}`}
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

export default AllProducts;
