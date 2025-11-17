import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex justify-between py-4 px-8 bg-gray-800'>
       <h2 className='text-xl font-bold'>Swabhiman Gang</h2>
       <div className='flex gap-8'>
          <Link className='text-xl font-bold' to="/">🏠 Home</Link>
          <Link className='text-xl font-bold'to="/about">🧑‍🎓 About</Link>
          <Link className='text-xl font-bold' to="/product">☎️ Product</Link>
          <Link className='text-xl font-bold' to="/courses">📜 Courses</Link>
       </div>
    </div>
  )
}

export default Navbar