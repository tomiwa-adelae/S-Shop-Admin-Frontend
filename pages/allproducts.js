import BackBtn from '../components/BackBtn';
// import AllProducts from '../components/AllProductspageComponents/AllProducts';
// import AllProductsIntro from '../components/AllProductspageComponents/AllProductsIntro';

const allproducts = () => {
   return (
      <div className="all-products-page">
         <BackBtn to="/dashboard" />
         {/* <AllProductsIntro />
         <AllProducts /> */}
      </div>
   );
};

export default allproducts;
