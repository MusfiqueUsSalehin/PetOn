import React, { useState } from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Custom links for this specific design if different from assets.js
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Pets', path: '/pets' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className={`w-full flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-transparent relative z-50 ${location.pathname === '/' ? 'bg-transparent' : 'bg-[#222831]'}`}>
      {/* Logo */}
      <Link to='/'>
        <img src={assets.logo} alt="PetOn Logo" className='h-8 object-contain' />
      </Link>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8'>
        {navLinks.map((link, idx) => (
          <Link key={idx} to={link.path} className='text-gray-300 hover:text-[#31E1F7] transition-colors text-sm font-medium'>
            {link.name}
          </Link>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className='hidden md:flex items-center gap-4'>
        <div className='flex items-center bg-[#222831] border border-gray-700/50 rounded-full px-3 py-1.5'>
          <img src={assets.search} alt="search" className="w-4 h-4 opacity-70 mr-2" />
          <input type="text" placeholder="Search pets" className="bg-transparent border-none outline-none text-xs text-white placeholder-gray-500 w-24" />
        </div>
        <button className='text-gray-300 hover:text-white text-sm font-medium cursor-pointer'>
          List Pets
        </button>
        <button className='bg-[#31E1F7] text-black px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow-[0_0_15px_rgba(49,225,247,0.3)] cursor-pointer'>
          Signup
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button onClick={() => setOpen(!open)} className='md:hidden text-white text-2xl'>
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#222831] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        {navLinks.map((link, idx) => (
          <Link key={idx} to={link.path} onClick={() => setOpen(false)} className='text-gray-300 text-xl font-medium'>
            {link.name}
          </Link>
        ))}
        <button className='text-gray-300 text-lg font-medium'>List Pets</button>
        <button className='bg-[#31E1F7] text-black px-8 py-3 rounded-lg text-lg font-semibold'>Signup</button>
      </div>
    </div>
  )
}
