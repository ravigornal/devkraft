import { PRODUCT_DETAILS } from "./actionTypes";
import {ADD_TO_CART,REMOVE_FROM_CART} from "./actionTypes";

export const productDetails = payload => ({
    type: PRODUCT_DETAILS,
    payload
  });


  export const addToCart = (productId) => ({
    type: ADD_TO_CART,
    payload: {productId}
  });
  
  export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: {id}
  });