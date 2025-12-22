import React, { useState} from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const Navbar = ({setShowLogin}) => {

  const location = useLocation();

  const [Open, setOpen] = useState(false)


  const navigate = useNavigate();
  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === '/' && 'bg-transparent' }`}>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='h-8' />
      </Link>


      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${location.pathname === '/' ? 'bg-[#222831]/90 backdrop-blur-md' : 'bg-transparent'} ${Open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}`}>
        {menuLinks.map((link, id) => (
          <Link key={id} to={link.path} className='text-[#FFD369]'>
            {link.name}
          </Link>
        ))}



        <div className='hidden lg:flex items-center text-sm gap-2 border border-[#FFD369]/20 rounded-full max-w-56 px-3'>
          <input type="text" className='py-1.5 w-full bg-transparent outline-none placeholder-[#FFD369]/50' placeholder='Search Pets' />
          <img src={assets.search} alt="" />
        </div>


        <div className='flex max-sm:flex-col items-start sm:items-center gap-6 '>
          <button onClick={()=>navigate('/owner')} className='cursor-pointer'>Dashboard</button>
          <button onClick={setShowLogin(true)} className='px-8 py-2 rounded-lg text-sm text-black bg-[#31E1F7] hover:opacity-70 transition-all cursor-pointer'>Login</button>
        </div>
            
      </div>
        
    </div>
  )
}
