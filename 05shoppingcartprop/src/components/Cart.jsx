import React, { useContext, useEffect, useState } from 'react'
import { CartPage } from '../context/Context';
import SingleProduct from './SingleProduct';
const Cart = () => {
    const {cart}=useContext(CartPage);
    const [total,setTotal]=useState();
    useEffect(()=>{
      setTotal(cart.reduce((acc,curr)=>(acc+Number(curr.price)),0))
    },[cart]);

  return (
    <div className='mt-4'>
       <h1 className='text-center font-semibold text-5xl text-orange-700 tracking-wide'>MyCart</h1>
       <h3 className='text-center font-semibold text-xl text-lighter mt-2'>Total :<span> Rs {total}</span></h3>
       <div className='flex flex-wrap gap-10 justify-center items-center p-5'>
       {
        cart.map((prod)=>(
          <SingleProduct prod={prod} key={prod.id}/>
        ))
       }
       </div>
    </div>
  )
}

export default Cart;