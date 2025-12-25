import React from 'react'
import { assets , cityList } from '../assets/assets'
import { useState } from 'react'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState("");
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 text-center'> 
      <h1 className='text-4xl text-white md:text-5xl font-semibold'>Your Moment of Calm, Powered by Pets</h1>
      <form className='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8">


          <div className="flex flex-col items-start gap-2">
            <select
              required
              value={pickupLocation}
              onChange={(evt) => setPickupLocation(evt.target.value)}>
              <option value="">Interaction Location</option>
              {cityList.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </select>
            <p className="px-1 text-sm text-gray-500">
              {pickupLocation ? pickupLocation : "Please select location"}{" "}
            </p>

          </div>


          <div className="flex flex-col items-start gap-2">
            <label htmlFor="pickup-date">Session Start Time</label>
            <input
              type="date"
              name=""
              id="pickup-date"
              
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>


          <div className="flex flex-col items-start gap-2">
            <label htmlFor="return-date">Session End Time</label>
            <input
              type="date"
              name=""
              id="return-date"
              min={new Date().toISOString().split("T")[0]}
              className="text-sm text-gray-500"
              required
            />
          </div>

          
        </div>

        <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-[#00756d] hover:bg-[#26CCC2] text-white rounded-full cursor-pointer'>
            <img src={assets.search} alt="search" />

            Search 
        </button>

        

        
      </form>

      <img src={assets.group} alt="pets" className='max-h-90'/>
    
    
    
    </div>

    
  )
}

export default Hero