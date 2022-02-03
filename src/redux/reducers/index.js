import { combineReducers } from "redux";
import { setReducer,selectedProduct } from "./productsReducers";
export const reducers=(combineReducers({
    allProducts:setReducer,
    selected:selectedProduct,

}))