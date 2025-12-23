import React from 'react'
import { assets } from "../assets/assets";


const Banner = () => {
  return (

    <div
      
      className="flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-gradient-to-r from-[#FBBF24] via-[#B45309] to-[#000000] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden">
      <div className="text-white">
        <h2 className="text-3xl font-medium">Do You Own A Friendly pet?</h2>
        <p className="mt-2">
          Share your companion's joy by listing them on PetOn.
        </p>
        <p className="max-w-130">
          We take care of user verification, safety guidelines and secure payments -
          so that you can offer companionship experiences with confidence and piece of mind.
        </p>
        <button
          
          className="px-6 py-2 bg-white text-blue-700 font-bold hover:bg-slate-100 transition-all text-primary rounded-lg text-sm mt-4 cursor-pointer">
          List your pet
        </button>
      </div>
      <img
        
        src={assets.dog}
        alt="banner"
        className="max-h-45 mt-10"
      />
    </div>
  );
}
  


export default Banner