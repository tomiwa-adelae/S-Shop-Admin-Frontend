import OrderWrapper from '../../../components/OrderPageComponents/OrderWrapper';
import BackBtn from '../../../components/BackBtn';

const order = () => {
   return (
      <div className="order-page">
         <BackBtn to="/allorders" />
         <OrderWrapper />
      </div>
   );
};

export default order;
