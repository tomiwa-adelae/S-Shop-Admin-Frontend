import {
   DELETE_PRODUCT_FAIL,
   DELETE_PRODUCT_REQUEST,
   DELETE_PRODUCT_RESET,
   DELETE_PRODUCT_SUCCESS,
   GET_PRODUCTS_FAIL,
   GET_PRODUCTS_REQUEST,
   GET_PRODUCTS_SUCCESS,
   GET_PRODUCT_FAIL,
   GET_PRODUCT_REQUEST,
   GET_PRODUCT_SUCCESS,
} from '../constants/productConstants';

// Get all product reducer
export const getProductsReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case GET_PRODUCTS_REQUEST:
         return { loading: true };
      case GET_PRODUCTS_SUCCESS:
         return { loading: false, products: action.payload };
      case GET_PRODUCTS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get all product reducer
export const getProductReducer = (state = { product: {} }, action) => {
   switch (action.type) {
      case GET_PRODUCT_REQUEST:
         return { loading: true };
      case GET_PRODUCT_SUCCESS:
         return { loading: false, product: action.payload };
      case GET_PRODUCT_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get seller products reducer
export const deleteProductReducer = (state = {}, action) => {
   switch (action.type) {
      case DELETE_PRODUCT_REQUEST:
         return { loading: true };
      case DELETE_PRODUCT_SUCCESS:
         return { loading: false, success: true };
      case DELETE_PRODUCT_FAIL:
         return { loading: false };
      case DELETE_PRODUCT_RESET:
         return {};
      default:
         return state;
   }
};
