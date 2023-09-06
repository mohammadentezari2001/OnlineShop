import { createContext, useEffect } from "react";
import { useState } from "react";


 export const ShopContext=createContext(null);


export const ShopContextProvider=(props)=>{

    const [cartItems,setcartItems]=useState()



    useEffect(()=>{

    
    const data= localStorage.getItem('cartdata')
       setcartItems(!!JSON.parse(data)?JSON.parse(data):[])

    },[])



    useEffect(()=>{

        if(cartItems!==undefined)
        localStorage.setItem('cartdata',JSON.stringify(cartItems))

    },[cartItems])



    const addToCart=(itemid)=>{

        if(!cartItems?.find((item)=>item.id===itemid))
        setcartItems([...cartItems,{id:itemid , count:1}])
        else
        setcartItems(cartItems.map((item)=>{
            if(item.id===itemid)
             return {...item, count:item.count + 1}
            else return item
        }))
        console.log(cartItems)
    }

    const removeFromCart=(itemid)=>{
        setcartItems(cartItems.map((i)=>{
            if(i.id===itemid && i.count>0)
            return {...i,count:i.count-1}
            else return i
        }))


    }

    const contextvalue={cartItems,setcartItems,addToCart,removeFromCart}

    return <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>



}