import React from 'react'
import Header from './Components/Header'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import ProductList from './Components/ProductList'
import ProductDetails from './Components/ProductDetails'
const App = () => {
    return (
        <div>
          
           <Router>
           <Header/>
               <Routes>
                   <Route path="/" element={<ProductList></ProductList>}/>
                   <Route path="/product/:productId" element={<ProductDetails></ProductDetails>}/>
               </Routes>
           </Router>
        </div>
    )
}

export default App
