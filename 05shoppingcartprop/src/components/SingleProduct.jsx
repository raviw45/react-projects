import React, { useContext } from 'react'
import { CartPage } from '../context/Context'

const SingleProduct = ({prod}) => {
    const{cart,setCart}=useContext(CartPage);
  return (
        <div className='w-[290px]  pb-4 flex flex-col bg-white rounded-xl gap-3 mt-5'>
            <img className='rounded-t-xl ' src="https://picsum.photos/200/100" alt="" />
            <div className='flex justify-between p-4'>
                <h3>{prod.name}</h3>
                <h5 className='text-slate-600'>Rs {prod.price.substring(0,3)}</h5>
            </div>
            {
                cart.includes(prod) ? (<button
                    onClick={()=>{
                        setCart(cart.filter((c)=>c.id !== prod.id))
                    }} className='py-1 mx-6 bg-red-600 rounded-lg text-white capitalize hover:bg-red-700 duration-300 transition-all ease-linear'>
                        Remove from cart
                    </button>):(<button
                    onClick={()=>{
                        setCart([...cart,prod])
                    }}
                    className='py-1 mx-6 bg-blue-600 rounded-lg text-white capitalize hover:bg-blue-700 duration-300 transition-all ease-linear'>
                    Add to cart
                </button>)
            }
            
            
          </div>
  )
}

export default SingleProduct