import React from 'react'
import{Link,Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <h1>Product page</h1>

<div className='flex gap-10 justify-center py-4'> 
   <Link className='text-xl font-bold'  to='product/men'>Men</Link>
    <Link className='text-xl font-bold'  to='product/women'>Women</Link></div>
    </div>
  )
}

export default Product