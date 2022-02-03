import {setProducts} from '../action/productActions';
import { Action_Types } from '../constant/action_types';
const initialState=
{
    products:[]
}
export const setReducer=(state=initialState,{type,payload})=>
{
switch(type)
{
case Action_Types.SET_PRODUCTS:
    return {...state,products:payload};
  default:
      return state;  
}
}
export const selectedProduct=(state={},{type,payload})=>
{
switch(type)
{
case Action_Types.SELECTED_PRODUCT:
    return {...state,...payload}
case Action_Types.REMOVE_SELECTED_PRODUCT:
    return{}
    default:
        return state;
}
}