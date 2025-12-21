import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='pt-10 pb-20 px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center gap-12'>

            {/* Title */}
            <h1 className='text-3xl md:text-5xl font-semibold text-white text-center leading-tight'>
                Your Moment of Calm, Powered by Pets
            </h1>

            {/* Search Widget */}
            <div className='bg-white rounded-full p-2 pl-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-lg max-w-4xl w-full'>
                <div className='flex-1 flex flex-col gap-0.5 w-full md:w-auto text-left'>
                    <label className='text-xs font-bold text-gray-500 uppercase'>Interaction Location</label>
                    <input type="text" placeholder="Seattle" className='outline-none text-gray-800 font-medium placeholder-gray-400 w-full' />
                </div>

                <div className='hidden md:block w-px h-8 bg-gray-200'></div>

                <div className='flex-1 flex flex-col gap-0.5 w-full md:w-auto text-left'>
                    <label className='text-xs font-bold text-gray-500 uppercase'>Session Start Time</label>
                    <input type="text" placeholder="26 Mar 2025" className='outline-none text-gray-800 font-medium placeholder-gray-400 w-full' />
                </div>

                <div className='hidden md:block w-px h-8 bg-gray-200'></div>

                <div className='flex-1 flex flex-col gap-0.5 w-full md:w-auto text-left'>
                    <label className='text-xs font-bold text-gray-500 uppercase'>Session End Time</label>
                    <input type="text" placeholder="26 Mar 2025" className='outline-none text-gray-800 font-medium placeholder-gray-400 w-full' />
                </div>

                <button className='bg-[#00D2A0] hover:bg-[#00b894] transition-colors text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 shadow-lg w-full md:w-auto justify-center cursor-pointer'>
                    <img src={assets.search} alt="" className="w-4 h-4 brightness-0 invert" />
                    Search
                </button>
            </div>

            {/* Hero Image */}
            <div className='w-full max-w-3xl mt-4 relative'>
                {/* Simple background glow/blur effect could go here */}
                <img src={assets.group} alt="Group of colorful pets" className='w-full h-auto object-contain drop-shadow-2xl' />
            </div>

        </div>
    )
}

export default Hero
