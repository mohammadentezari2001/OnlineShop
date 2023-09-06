// import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
// import { useContext } from 'react';
// import { ShopContext } from './context/shopcontext';



const Nav = () => {

  // const {cartitems}=useContext(ShopContext)

  // useEffect(()=>{


  // if(cartitems!==undefined && cartitems.length>0){
  //   const itemcount = cartitems?.reduce((previousValue, currentValue) => {
  //       return previousValue + currentValue.count
  //   }, 0);}
  //   else{
  //     const itemcount=0
  //   }

  


  // })
  


  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-primary" data-bs-theme="dark ">
  <div className='container'>
  <a className="navbar-brand p-3" href="/">Mohammad`s Shop</a>
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to={'/'} className="nav-link">Shop</Link>
      </li>
      <li className="nav-item">
      <Link to={'/cart'} className="nav-link" >
        <FontAwesomeIcon icon={faShoppingCart}/>
        <span>{0}</span>
        </Link>      
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Nav;
