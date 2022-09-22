import {
   LOGIN_USER_REQUEST,
   LOGIN_USER_SUCCESS,
   LOGIN_USER_FAIL,
   REGISTER_USER_REQUEST,
   REGISTER_USER_SUCCESS,
   REGISTER_USER_FAIL,
   USER_LOGOUT,
   UPDATE_USER_DETAILS_REQUEST,
   UPDATE_USER_DETAILS_SUCCESS,
   UPDATE_USER_DETAILS_FAIL,
   CHANGE_USER_LOGIN_REQUEST,
   CHANGE_USER_LOGIN_SUCCESS,
   CHANGE_USER_LOGIN_FAIL,
   UPDATE_USER_DETAILS_RESET,
   CHANGE_USER_LOGIN_RESET,
   GET_USERS_REQUEST,
   GET_USERS_SUCCESS,
   GET_USERS_FAIL,
   GET_SELLERS_REQUEST,
   GET_SELLERS_SUCCESS,
   GET_SELLERS_FAIL,
   GET_SELLER_REQUEST,
   GET_SELLER_SUCCESS,
   GET_SELLER_FAIL,
   GET_SELLER_RESET,
} from '../constants/userConstants';

// login user
export const loginReducer = (state = {}, action) => {
   switch (action.type) {
      case LOGIN_USER_REQUEST:
         return { loading: true };
      case LOGIN_USER_SUCCESS:
         return {
            loading: true,
            user: action.payload.user,
            token: action.payload.token,
         };
      case LOGIN_USER_FAIL:
         return { loading: false };
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

// register user
export const registerReducer = (state = {}, action) => {
   switch (action.type) {
      case REGISTER_USER_REQUEST:
         return { loading: true };
      case REGISTER_USER_SUCCESS:
         return {
            loading: true,
            user: action.payload.user,
            token: action.payload.token,
         };
      case REGISTER_USER_FAIL:
         return { loading: false };
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Update user
export const updateReducer = (state = {}, action) => {
   switch (action.type) {
      case UPDATE_USER_DETAILS_REQUEST:
         return { loading: true };
      case UPDATE_USER_DETAILS_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case UPDATE_USER_DETAILS_FAIL:
         return { loading: false };
      case UPDATE_USER_DETAILS_RESET:
         return {};
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Change login details
export const changeLoginReducer = (state = {}, action) => {
   switch (action.type) {
      case CHANGE_USER_LOGIN_REQUEST:
         return { loading: true };
      case CHANGE_USER_LOGIN_SUCCESS:
         return {
            loading: false,
            success: true,
         };
      case CHANGE_USER_LOGIN_FAIL:
         return { loading: false };
      case CHANGE_USER_LOGIN_RESET:
         return {};
      case USER_LOGOUT:
         return {};
      default:
         return state;
   }
};

// Get all users reducer
export const getUsersReducer = (state = { users: [] }, action) => {
   switch (action.type) {
      case GET_USERS_REQUEST:
         return { loading: true };
      case GET_USERS_SUCCESS:
         return { loading: false, users: action.payload };
      case GET_USERS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get all sellers reducer
export const getSellersReducer = (state = { sellers: [] }, action) => {
   switch (action.type) {
      case GET_SELLERS_REQUEST:
         return { loading: true };
      case GET_SELLERS_SUCCESS:
         return { loading: false, sellers: action.payload };
      case GET_SELLERS_FAIL:
         return { loading: false };
      default:
         return state;
   }
};

// Get seller details
export const getSellerReducer = (state = { products: [] }, action) => {
   switch (action.type) {
      case GET_SELLER_REQUEST:
         return { loading: true };
      case GET_SELLER_SUCCESS:
         return {
            loading: false,
            seller: action.payload.seller,
            products: action.payload.products,
         };
      case GET_SELLER_FAIL:
         return { loading: false };
      case GET_SELLER_RESET:
         return {};
      default:
         return state;
   }
};
