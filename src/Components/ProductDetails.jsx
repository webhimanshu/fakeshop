import axios from 'axios';
import React,{useEffect} from 'react'
import { selectedProduct ,removeSelectedProduct} from '../redux/action/productActions';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const ProductDetails = () => {
const {productId}=useParams();
 const dispatch = useDispatch();
 const data = useSelector(state => state.selected)
console.log("data",data)


const fetchProduct=async ()=>
{
const resp=await axios.get(`https://fakestoreapi.com/products/${productId}`);

dispatch(selectedProduct(resp.data))
}
useEffect(() => {
 fetchProduct();
 return ()=>
 {
     dispatch(removeSelectedProduct())
 }
}, [productId])
    return (

  <>


  {
   Object.keys(data).length===0 ? (<div><h1>Loading....</h1></div>):
    (
        <div className='card-sedc1'>
  <div class="card-sel" key={data.id}>
  <div className='image'>
  <img src={data.image} alt="Avatar" />
</div>
  <div class="data-container">
    <h4><b>category :{data.category}</b></h4> 
    <p>Price :{data.price}</p>
    <p>description :{data.description}</p>
     
  </div>
</div>
  </div>
    )  
  }
 
       </>
        
    )
}

export default ProductDetails
