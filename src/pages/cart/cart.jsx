import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../components/context/shopcontext';
import PRODUCT from '../../data/products';
import Products from '../products/products';




const Cart = () => {
const {cartItems}=useContext(ShopContext)


  return (
    <div>
      <h1>Your Cart</h1>
      <div className="row">
        {PRODUCT.map((p)=>{
          if(cartItems.some((i)=>i.id===p.id && i.count >0))
          return <Products data={p}></Products>
          else 
          return <h1 className='text-light'>.</h1>
        })}
      </div>

    </div>
  )
}

export default Cart
