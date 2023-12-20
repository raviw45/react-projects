import { createContext, useState } from "react";

export const CartPage=createContext();

import React from 'react'

const Context = ({children}) => {
  const [cart,setCart]=useState([]);
  return (
     <CartPage.Provider value={{cart,setCart}}>
      {children}
     </CartPage.Provider>
  )
}

export default Context;