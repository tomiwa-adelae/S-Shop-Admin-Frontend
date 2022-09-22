import Link from 'next/link';
import { useRouter } from 'next/router';

const OrderDetailsIntro = () => {
   const router = useRouter();
   return (
      <div className="order-intro section">
         <div className="container">
            <div className="links-tags">
               <h4>
                  <Link href="/">
                     <span>S-Shop Admin</span>
                  </Link>{' '}
                  &gt;{' '}
                  <Link href="/allorders">
                     <span>All orders</span>
                  </Link>{' '}
                  &gt;{' '}
                  <Link href={`/order/${router.query.id}`}>
                     <span>Details</span>
                  </Link>{' '}
               </h4>
            </div>
         </div>
      </div>
   );
};

export default OrderDetailsIntro;
