import {
   DELIVER_ORDER_FAIL,
   DELIVER_ORDER_REQUEST,
   DELIVER_ORDER_RESET,
   DELIVER_ORDER_SUCCESS,
   GET_ORDERS_FAIL,
   GET_ORDERS_REQUEST,
   GET_ORDERS_SUCCESS,
   GET_ORDER_FAIL,
   GET_ORDER_REQUEST,
   GET_ORDER_SUCCESS,
   GET_SELLER_FAIL,
   GET_SELLER_REQUEST,
   GET_SELLER_RESET,
   GET_SELLER_SUCCESS,
   PAY_ORDER_FAIL,
   PAY_ORDER_REQUEST,
   PAY_ORDER_RESET,
   PAY_ORDER_SUCCESS,
} from '../constants/orderConstants';

// Get all orders reducer
export const getOrdersReducer = (state = { orders: [] }, action) => {
   switch (action.type) {
      case GET_ORDERS_REQUEST:
         return { loading: true };
      case GET_ORDERS_SUCCESS:
         return { loading: false, orders: action.payload };
      case GET_ORDERS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get all order reducer
export const getOrderReducer = (state = { orderItems: [] }, action) => {
   switch (action.type) {
      case GET_ORDER_REQUEST:
         return { loading: true };
      case GET_ORDER_SUCCESS:
         return {
            loading: false,
            order: action.payload.order,
            orderUser: action.payload.orderUser,
            orderItems: action.payload.order.orderItems,
         };
      case GET_ORDER_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Mark order as paid
export const payOrderReducer = (state = {}, action) => {
   switch (action.type) {
      case PAY_ORDER_REQUEST:
         return { loading: true };
      case PAY_ORDER_SUCCESS:
         return {
            loading: false,
         };
      case PAY_ORDER_FAIL:
         return { loading: false };
      case PAY_ORDER_RESET:
         return {};
      default:
         return state;
   }
};

// Mark order as delivered
export const deliverOrderReducer = (state = {}, action) => {
   switch (action.type) {
      case DELIVER_ORDER_REQUEST:
         return { loadingDeliver: true };
      case DELIVER_ORDER_SUCCESS:
         return {
            loadingDeliver: false,
         };
      case DELIVER_ORDER_FAIL:
         return { loadingDeliver: false };
      case DELIVER_ORDER_RESET:
         return {};
      default:
         return state;
   }
};

// Get seller details
export const sellerDetailsReducer = (state = {}, action) => {
   switch (action.type) {
      case GET_SELLER_REQUEST:
         return { loading: true };
      case GET_SELLER_SUCCESS:
         return {
            loading: false,
            seller: action.payload
         };
      case GET_SELLER_FAIL:
         return { loading: false };
      case GET_SELLER_RESET:
         return {};
      default:
         return state;
   }
};
