import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pt-16 pb-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-[#222831] border-t border-gray-800/50'>

            {/* Newsletter Section */}
            <div className='flex flex-col items-center text-center mb-20'>
                <h2 className='text-2xl font-bold text-[#FFD369] mb-2'>Never Miss a Deal!</h2>
                <p className='text-gray-400 text-sm mb-8'>Subscribe to get the latest offers, new collections and exclusive discounts.</p>

                <div className='flex w-full max-w-lg border border-gray-600 rounded-lg overflow-hidden p-1'>
                    <input type="email" placeholder='Enter your email address' className='bg-transparent text-white px-4 py-2 flex-grow outline-none placeholder-gray-600' />
                    <button className='bg-[#FF4757] text-white px-8 py-2 rounded font-medium hover:bg-[#ff6b81] transition-colors'>
                        Subscribe Now
                    </button>
                </div>
            </div>

            {/* Footer Links */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-8'>

                {/* Brand */}
                <div>
                    <div className='flex items-center gap-2 mb-4'>
                        <img src={assets.logo} alt="PetOn" className='h-6' />
                    </div>
                    <p className='text-gray-400 text-xs leading-relaxed mb-6 max-w-xs'>
                        A trusted pet companionship platform offering gentle companions for stress relief, happiness, and connection.
                    </p>
                    <div className='flex gap-4 text-[#FFD369]'>
                        <i className='cursor-pointer font-bold'>f</i>
                        <i className='cursor-pointer font-bold'>𝕏</i>
                        <i className='cursor-pointer font-bold'>in</i>
                        <i className='cursor-pointer font-bold'>📸</i>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className='text-[#FFD369] text-xs font-bold uppercase tracking-widest mb-6'>Quick Links</h4>
                    <ul className='flex flex-col gap-3 text-sm text-gray-300'>
                        <li className='hover:text-white cursor-pointer'>Home</li>
                        <li className='hover:text-white cursor-pointer'>Browse Pets</li>
                        <li className='hover:text-white cursor-pointer'>List Your Pet</li>
                        <li className='hover:text-white cursor-pointer'>About Us</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className='text-[#FFD369] text-xs font-bold uppercase tracking-widest mb-6'>Resources</h4>
                    <ul className='flex flex-col gap-3 text-sm text-gray-300'>
                        <li className='hover:text-white cursor-pointer'>Help Center</li>
                        <li className='hover:text-white cursor-pointer'>Terms of Service</li>
                        <li className='hover:text-white cursor-pointer'>Privacy Policy</li>
                        <li className='hover:text-white cursor-pointer'>Inspiration</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className='text-[#FFD369] text-xs font-bold uppercase tracking-widest mb-6'>Contact</h4>
                    <ul className='flex flex-col gap-3 text-sm text-gray-300'>
                        <li className='hover:text-white cursor-pointer'>1234 Love's Drive</li>
                        <li className='hover:text-white cursor-pointer'>San Francisco, CA 94107</li>
                        <li className='hover:text-white cursor-pointer'>+1 (555) 123-4567</li>
                        <li className='hover:text-white cursor-pointer'>contact@peton.com</li>
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className='flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500'>
                <p>© 2025 PetOn. All rights reserved.</p>
                <div className='flex gap-6 mt-2 md:mt-0'>
                    <span className='hover:text-gray-300 cursor-pointer'>Terms</span>
                    <span className='hover:text-gray-300 cursor-pointer'>Privacy</span>
                    <span className='hover:text-gray-300 cursor-pointer'>Cookies</span>
                </div>
            </div>

        </div>
    )
}

export default Footer
