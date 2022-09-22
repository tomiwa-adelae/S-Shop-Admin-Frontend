import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';
import {
   changeLoginReducer,
   getSellerReducer,
   getSellersReducer,
   getUsersReducer,
   loginReducer,
   registerReducer,
   updateReducer,
} from './reducers/userReducers';
import errorReducer from './reducers/errorReducers';
import {
   getProductsReducer,
   getProductReducer,
   deleteProductReducer,
} from './reducers/productReducers';
import {
   deliverOrderReducer,
   getOrderReducer,
   getOrdersReducer,
   payOrderReducer,
   sellerDetailsReducer,
} from './reducers/orderReducers';

// All reduers
const reducer = combineReducers({
   error: errorReducer,
   login: loginReducer,
   register: registerReducer,
   update: updateReducer,
   changeLogin: changeLoginReducer,
   getProducts: getProductsReducer,
   getProduct: getProductReducer,
   getUsers: getUsersReducer,
   getSellers: getSellersReducer,
   getSeller: getSellerReducer,
   update: updateReducer,
   changeLogin: changeLoginReducer,
   getOrders: getOrdersReducer,
   getOrder: getOrderReducer,
   deleteProduct: deleteProductReducer,
   payOrder: payOrderReducer,
   deliverOrder: deliverOrderReducer,
   sellerDetails: sellerDetailsReducer,
});

const userData =
   typeof window !== 'undefined' && localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user'))
      : null;

const userToken =
   typeof window !== 'undefined' && localStorage.getItem('token')
      ? JSON.parse(localStorage.getItem('token'))
      : null;

// initial states here
const initialState = {
   login: { user: userData, token: userToken },
   register: { user: userData, token: userToken },
};

// middleware
const middleware = [thunk];

// // creating store
// export const store = createStore(
//    reducer,
//    initialState,
//    composeWithDevTools(applyMiddleware(...middleware))
// );

// For Production
export const store = createStore(
   reducer,
   initialState,
   compose(applyMiddleware(...middleware))
);
// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
