import { createStore, combineReducers } from "redux";
import productReducer from './reducers/productReducer'

const rootReducer = combineReducers({ productReducer: productReducer });


export const store = createStore(
  rootReducer
);