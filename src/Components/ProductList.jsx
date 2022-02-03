import axios from 'axios';
import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {setProducts} from '../redux/action/productActions';
import ProductComponent from './ProductComponent';
const ProductList = () => {
 const dispatch = useDispatch();

 const fetchProducts=async ()=>
 {
const resp=await axios.get("https://fakestoreapi.com/products")

dispatch(setProducts(resp.data)) 
}
 useEffect(() => {
   fetchProducts();
 }, [])
    return (
        <div className='card-container'>
          <ProductComponent/>  
      </div>
    )
}

export default ProductList
