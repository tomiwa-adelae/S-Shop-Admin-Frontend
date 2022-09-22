import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSellers } from '../../store/actions/userActions';
import { ErrorMessageBox, SuccessMessageBox } from '../MessageBox';
import { PrimarySpinner } from '../Spinner';
import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const AllSellersList = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const [keyword, setKeyword] = useState('');

   const getSellersState = useSelector((state) => state.getSellers);
   const { loading, sellers } = getSellersState;

   const errorState = useSelector((state) => state.error);
   const { msg } = errorState;

   const userState = useSelector((state) => state.login);
   const { user } = userState;

   useEffect(() => {
      if (!user) {
         router.push('/?redirect=allsellers');
      }

      dispatch(getSellers());

      if (keyword === '') {
         dispatch(getSellers());
      }
   }, [dispatch, user, router]);

   const handleSearch = (e) => {
      setKeyword(e.target.value);

      dispatch(getSellers(keyword));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(getSellers({ keyword }));
   };

   return (
      <>
         <div className="container">{msg && <ErrorMessageBox msg={msg} />}</div>
         <div className="all-sellers-list section-small">
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
                           placeholder="Search for sellers, firstName, lastName, email, brandName..."
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
               <div className="wrapper">
                  {loading && <PrimarySpinner />}
                  {sellers?.length === 0 && (
                     <SuccessMessageBox msg="No sellers to display!" />
                  )}

                  <div className="boxes">
                     {sellers?.map((seller) => (
                        <div key={seller._id} className="box my-0 p-0">
                           <div className="name">
                              <h5>
                                 {seller.firstName} {seller.lastName}
                              </h5>
                           </div>
                           <div className="email my-1">
                              <h5>{seller.email}</h5>
                           </div>
                           <div className="brandName my-1">
                              <h5>{seller.brandName}</h5>
                           </div>
                           <Link
                              href="/seller/[id]"
                              as={`/seller/${seller._id}`}
                           >
                              <button className="btn btn-secondary">
                                 View shop
                              </button>
                           </Link>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AllSellersList;
