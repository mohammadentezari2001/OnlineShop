import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router ,Route,Routes } from 'react-router-dom'

import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Nav from './components/nav';
import { useState,createContext } from 'react';


import { ShopContextProvider } from './components/context/shopcontext';
import { Welcome } from './components/welcome';


function App() {
const UserContext = createContext()
const [cartlist,setcartlist]=useState([])
const [count,setcount]=useState(0)
const contextValue={count,cartlist,setcartlist,setcount}


  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <UserContext.Provider value={contextValue}>
        <Nav />
        <Welcome />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
         </Routes>
         </UserContext.Provider>
      </Router>
      </ShopContextProvider>



    </div>
  );
}

export default App;



// function addtocart(){

//   ///if(id in cart)=>count++
//   ///else => add cartitem with count 1 
//   cartlist.find((a)=>{if(a.id===myid){
//       setcount(a.count+1)
//       return (cartlist)
//       else{
//           setcartlist([...cartlist,])
//           return(cartlist)
//       }
//   }})
// }


