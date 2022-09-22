import axios from 'axios';
import { server } from '../../config/server';
import { CLEAR_ERRORS } from '../constants/errorConstants';
import {
   DELETE_PRODUCT_FAIL,
   DELETE_PRODUCT_REQUEST,
   DELETE_PRODUCT_SUCCESS,
   GET_PRODUCTS_FAIL,
   GET_PRODUCTS_REQUEST,
   GET_PRODUCTS_SUCCESS,
   GET_PRODUCT_FAIL,
   GET_PRODUCT_REQUEST,
   GET_PRODUCT_SUCCESS,
} from '../constants/productConstants';
import { returnErrors } from './errorActions';
import { tokenConfig } from './userActions';

// Get all products
export const getProducts =
   (keyword = '') =>
   async (dispatch, getState) => {
      try {
         dispatch({ type: CLEAR_ERRORS });
         dispatch({ type: GET_PRODUCTS_REQUEST });

         const { data } = await axios.get(
            `${server}/api/products?keyword=${keyword}`,
            tokenConfig(getState)
         );

         dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
      } catch (err) {
         dispatch(returnErrors(err.response.data.msg));
         dispatch({ type: GET_PRODUCTS_FAIL });
      }
   };

// Get all products
export const getProduct = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: GET_PRODUCT_REQUEST });

      const { data } = await axios.get(
         `${server}/api/products/${id}`,
         tokenConfig(getState)
      );

      dispatch({ type: GET_PRODUCT_SUCCESS, payload: data });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: GET_PRODUCT_FAIL });
   }
};

// Delete product
export const deleteProduct = (id) => async (dispatch, getState) => {
   try {
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: DELETE_PRODUCT_REQUEST });

      await axios.delete(`${server}/api/products/${id}`, tokenConfig(getState));

      dispatch({ type: DELETE_PRODUCT_SUCCESS });
   } catch (err) {
      dispatch(returnErrors(err.response.data.msg));
      dispatch({ type: DELETE_PRODUCT_FAIL });
   }
};
