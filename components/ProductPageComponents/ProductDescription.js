import { SuccessMessageBox } from '../MessageBox';

const ProductDescription = ({ product }) => {
   return (
      <div className="product-description section">
         <div className="container">
            <div className="wrapper">
               <h4>Product Details</h4>
               <p className="py-1">{product?.description}</p>
               {!product?.description && (
                  <SuccessMessageBox msg="There is no description for this product!" />
               )}
            </div>
         </div>
      </div>
   );
};

export default ProductDescription;
