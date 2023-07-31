import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

const Navbar = () => {
  return (

     <nav>

          <Link to='/' className='nav-link'>Home</Link>
          <Link to='/blogs' className='nav-link'>Blogs</Link>
          <Link to='/about' className='nav-link'>About</Link>


     </nav>
    
  )
}

export default Navbar
