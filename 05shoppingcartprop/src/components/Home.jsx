import React, { useState } from 'react'
import faker from 'faker'
import SingleProduct from './SingleProduct';

const Home = () => {
    const productsArray=[...Array(30)].map((prod)=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(),
        image:'https://picsum.photos/200/300',
    }))
    // console.log(productsArray);
    const [products]=useState(productsArray);
  return (
    <div className='bg-slate-300 w-full'>
        <div className='flex flex-wrap gap-10 justify-center items-center p-5'>
            {/* cart */}
          {
            products.map((prod)=>(
             <SingleProduct prod={prod} key={prod.id}/>
            ))
          }
        </div>
    </div>
  )
}

export default Home;