import React, { useContext} from 'react'
import { ShopContext } from '../../components/context/shopcontext';






const Products = (props) => {

  const {cartItems,addToCart,removeFromCart}=useContext(ShopContext)

  const isincart =cartItems?.some((item)=> item.id===props.data.id)


  return (
    <div className="col-md-3">
    <div className="card  m-3">
  <img className="card-img-top" src={props.data.productImage} alt="."/>
  <div className="card-body">
    <h3 className="card-title">{props.data.productName}</h3>
    <p className="card-text lead">price :{props.data.price}$</p>
    <button className='btn btn-warning m-2' onClick={()=>addToCart(props.data.id)}>Add To Cart</button>
    {isincart &&<button className='btn btn-danger m-2 ' onClick={()=>removeFromCart(props.data.id)}>remove</button>}
    <p className='mt-2'>{cartItems?.filter((row)=> row.id===props.data.id)[0]?.count}</p>
  </div>
</div>
    </div>
  )
}

export default Products;
