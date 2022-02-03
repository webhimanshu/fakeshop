import { Action_Types } from "../constant/action_types" 
export const setProducts=(products)=>
{
return{type:Action_Types.SET_PRODUCTS,payload:products}
}
export const selectedProduct=(product)=>
{
return{type:Action_Types.SELECTED_PRODUCT,payload:product}
}
export const removeSelectedProduct=()=>
{
return{type:Action_Types.REMOVE_SELECTED_PRODUCT}
}

