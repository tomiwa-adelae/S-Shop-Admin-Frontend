import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';
import {
   DELIVER_ORDER_FAIL,
   DELIVER_ORDER_REQUEST,
   DELIVER_ORDER_SUCCESS,
   GET_ORDERS_FAIL,
   GET_ORDERS_REQUEST,
   GET_ORDERS_SUCCESS,
   GET_ORDER_FAIL,
   GET_ORDER_REQUEST,
   GET_ORDER_SUCCESS,
   GET_SELLER_REQUEST,
   GET_SELLER_FAIL,
   GET_SELLER_SUCCESS,
   PAY_ORDER_REQUEST,
   PAY_ORDER_SUCCESS,
   GET_SELLER_RESET,
} from '../constants/orderConstants';
import { GET_SELLERS_REQUEST } from '../constants/userConstants';
import { returnErrors } from './errorActions';
import { tokenConfig } from './userActions';

// Get all orders
export const getOrders =
   (keyword = '') =>
   async (dispatch, getState) => {
      try {
         dispatch({ type: CLEAR_ERRORS });
         dispatch({ type: GET_ORDERS_REQUEST });

         const { data } = await axios.get(
            `${server}/api/orders?keyword=${keyword}`,
            tokenConfig(getState)
         );

         dispatch({ type: GET_ORDERS_SUCCESS, payload: data });
      } catch (err) {
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: GET_ORDERS_FAIL });
      }
   };

// Get all order
export const getOrder = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: GET_ORDER_REQUEST });

      const { data } = await axios.get(
         `${server}/api/orders/${id}`,
         tokenConfig(getState)
      );

      dispatch({ type: GET_ORDER_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_ORDER_FAIL });
   }
};

// Mark order as paid
export const payOrder = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: PAY_ORDER_REQUEST });
      const { data } = await axios.put(
         `${server}/api/orders/${id}/pay`,
         {},
         tokenConfig(getState)
      );

      dispatch({ type: PAY_ORDER_SUCCESS, payload: data });
      dispatch({ type: GET_ORDER_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: PAY_ORDER_FAIL });
   }
};

// Mark order as Delivered
export const deliverOrder = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: DELIVER_ORDER_REQUEST });
      const { data } = await axios.put(
         `${server}/api/orders/${id}/deliver/order`,
         {},
         tokenConfig(getState)
      );

      dispatch({ type: DELIVER_ORDER_SUCCESS, payload: data });
      dispatch({ type: GET_ORDER_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: DELIVER_ORDER_FAIL });
   }
};

export const getSellerDetails = (sellerId) => async (dispatch, getState) => {
   try {
      dispatch({ type: GET_SELLER_RESET });
      dispatch({ type: GET_SELLER_REQUEST });

      const { data } = await axios.get(
         `${server}/api/orders/seller/${sellerId}`,
         tokenConfig(getState)
      );

      dispatch({ type: GET_SELLER_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_SELLER_FAIL });
   }
};
