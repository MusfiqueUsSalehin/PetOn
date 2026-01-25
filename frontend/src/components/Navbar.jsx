import React, { useState} from 'react'
import { assets, menuLinks } from '../assets/assets'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';



import { useAppContext } from '../context/AppContext'

export const Navbar = () => {

  const {setShowLogin, user, logoutUser, isOwner, setIsOwner, axios} = useAppContext();


  const location = useLocation();

  const [Open, setOpen] = useState(false)


  const changeRole = async () => {
    try {
      const {data} = await axios.post('/api/owner/change-role')
        if(data.success) {
          setIsOwner(true);

          
          toast.success(data.message);
          
        } else {
          toast.error(data.message);
        }
      } 
      catch(err) {
        console.log(err.message);
        toast.error(err.message);
      }
  }


  const navigate = useNavigate();
  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${location.pathname === '/' && 'bg-transparent' }`}>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='h-8' />
      </Link>


      <div className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 bg-[#222831]/90 backdrop-blur-md ${Open ? 'max-sm:translate-x-0' : 'max-sm:translate-x-full'}`}>
        {menuLinks.map((link, id) => (
          <Link key={id} to={link.path} onClick={() => setOpen(false)} className='text-[#FFD369]'>
            {link.name}
          </Link>
        ))}



        <div className='hidden lg:flex items-center text-sm gap-2 border border-[#FFD369]/20 rounded-full max-w-56 px-3'>
          <input type="text" className='py-1.5 w-full bg-transparent outline-none placeholder-[#FFD369]/50' placeholder='Search Pets' />
          <img src={assets.search} alt="" />
        </div>


        <div className='flex max-sm:flex-col items-start sm:items-center gap-6 '>
          <button onClick={()=>{isOwner ? navigate('/owner') : changeRole(); setOpen(false)}} className='cursor-pointer'>{isOwner ? 'Dashboard' : 'List Pets'} </button>
          <button onClick={()=>{user ? logoutUser() : setShowLogin(true); setOpen(false)}} className='px-8 py-2 rounded-lg text-sm text-black bg-[#31E1F7] hover:opacity-70 transition-all cursor-pointer'>{user ? 'Logout' : 'Login'}</button>
        </div>
            
      </div>

      <button
        className="sm:hidden cursor-pointer"
        aria-label={Open ? "Close Menu" : "Open Menu"}
        onClick={() => setOpen(!Open)}>
        <img src={Open ? assets.close_icon : assets.menu_icon} alt="menu" />
      </button>
        
    </div>
  )
}
