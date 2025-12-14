import React from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='h-8' />
      </Link>


      <div className='flex gap-4'>
        {menuLinks.map((link, id) => (
          <Link key={id} to={link.path} >
            {link.name}
          </Link>
        ))}
            
      </div>
        
    </div>
  )
}
