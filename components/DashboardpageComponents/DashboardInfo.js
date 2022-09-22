import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/userActions';

const DashboardInfo = () => {
   const dispatch = useDispatch();

   return (
      <div className="dashboard-info section">
         <div className="container">
            <div className="wrapper">
               <Link href="/allproducts">
                  <div className="box p-1">
                     <h4>All Products</h4>
                     <small>Check out all products</small>
                  </div>
               </Link>
               <Link href="/allorders">
                  <div className="box p-1">
                     <h4>All Orders</h4>
                     <small>Check out all orders</small>
                  </div>
               </Link>
               <Link href="/allusers">
                  <div className="box p-1">
                     <h4>All Users</h4>
                     <small>Check out all users</small>
                  </div>
               </Link>
               <Link href="/allsellers">
                  <div className="box p-1">
                     <h4>All Sellers</h4>
                     <small>Check out all sellers</small>
                  </div>
               </Link>
               <Link href="/personaldetails">
                  <div className="box p-1">
                     <h4>Personal details</h4>
                     <small>Edit name, phone number</small>
                  </div>
               </Link>
               <Link href="/changelogin">
                  <div className="box p-1">
                     <h4>Login details</h4>
                     <small>Change your password</small>
                  </div>
               </Link>
               <div
                  onClick={() => dispatch(logout())}
                  className="box logout p-1"
               >
                  <h4>Logout</h4>
                  <small className="p-0"></small>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DashboardInfo;
