import SellerWrapper from '../../../components/SellerPageComponents/SellerWrapper';
import BackBtn from '../../../components/BackBtn';

const seller = () => {
   return (
      <div className="seller-page">
         <BackBtn to="/allsellers" />
         <SellerWrapper />
      </div>
   );
};

export default seller;
