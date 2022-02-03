import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css';
const ProductComponent = () => 
{
  const dispatch = useDispatch();
  const state=useSelector(state=>state.allProducts.products);

    return (
     <>
   
         {
           state.length==0? (<div><h1>Loading...</h1></div>): ( state.map((data)=>
             (
                 <Link to={`product/${data.id}`}>
                <div class="card" key={data.id}>
  <img src={data.image} alt="Avatar" />
  <div class="container">
    <h4><b>category :{data.category}</b></h4> 
    <p>Price :{data.price}</p> 
  </div>
</div>
 </Link>
             ))
             )
         }
           
     </>
      
    )
}

export default ProductComponent
