import AllProducts from '../components/AllProductsPageComponents/AllProducts';
// import AllProductsIntro from '../components/AllProductspageComponents/AllProductsIntro';
import BackBtn from '../components/BackBtn';

const allproducts = () => {
   return (
      <div className="all-products-page">
         <BackBtn to="/dashboard" />
         {/* <AllProductsIntro /> */}
         <AllProducts />
      </div>
   );
};

export default allproducts;
