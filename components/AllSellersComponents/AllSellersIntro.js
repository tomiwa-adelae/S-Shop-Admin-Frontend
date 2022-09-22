import Link from 'next/link';
import { useSelector } from 'react-redux';

const AllSellersIntro = () => {
   const getSellersState = useSelector((state) => state.getSellers);
   const { sellers } = getSellersState;

   return (
      <div className="all-sellers-intro section-small">
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
                     <Link href={`/allsellers`}>
                        <span>
                           All Sellers{' '}
                           <strong className="text-secondary">
                              ({sellers?.length || 0})
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

export default AllSellersIntro;
