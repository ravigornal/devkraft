import { PRODUCT_DETAILS, ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";
import ProductData from '../../Data/products.json'

export const initState = {
  productData: ProductData || [],
  filterCategory: ["all products", ...new Set(ProductData.map(a => a.tag))],
  cartItems: [],
  productDetails: {}
};

export default (state = initState, { type, payload }) => {
  
  switch (type) {
    case PRODUCT_DETAILS:{
        let filterProduct = state.productData.filter(data=> data.id === Number(payload) )[0]
        return {
            ...state,
            productDetails: filterProduct
        }
    }
        
    case ADD_TO_CART:{
        let filterProduct = state.productData.filter(data=> data.id === payload.productId )[0]
        return {
            ...state,
            cartItems: [...state.cartItems, filterProduct]
        }
    }

    case REMOVE_FROM_CART: {
        let filterItems = state.cartItems.filter((item, index) => index !== payload.id )
        return {
          ...state,
          cartItems: filterItems
        }
    }
        
    default:
      return state;
  }
};