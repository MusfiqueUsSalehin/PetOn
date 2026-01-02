import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import Loader from '../components/Loader';
import { useAppContext } from '../context/appContext';
import toast from 'react-hot-toast';


const PetDetails = () => {

  const {id} = useParams();

  const {pets, axios, pickupDate,setPickupDate, returnDate,setReturnDate} = useAppContext();


  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  
  const currency = import.meta.env.VITE_CURRENCY;

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {data} = await axios.post('/api/bookings/create-booking',{ pet : id, pickupDate, returnDate });
      if(data.success){
        toast.success(data.message);
        navigate('/user-bookings');
      }
      else{
        toast.error(data.message);
      } 
    } 
    catch (error) {
      toast.error(error.message);

    }
    
  }


  useEffect(() => {
    setPet(pets.find((pet) => pet._id === id));
  }, [pets,id]);




  return pet ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer">
        <img
          src={assets.arrow_right}
          alt="arrow-icon"
          className="rotate-180 opacity-100"
        />
        <p className='text-[#FFD369]'>Back to all pets</p>
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Left: Car Image & Details */}
        <div className="lg:col-span-2">
          <img src={pet.image}
            alt="pet"
            className="w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md"/>
          <div
            className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-white">
                {pet.name} | {pet.species}
              </h1>
              <p className="text-gray-500 text-lg">
                {pet.breed} | {pet.age} years old
              </p>
            </div>
            <hr className="border-gray-400 my-6" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {icon: assets.users_icon, text: `${pet.behaviour}`},
                { icon: assets.smile, text: pet.active },
                { icon: assets.paw, text: pet.trained },
                { icon: assets.location_icon, text: pet.location },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex flex-col items-center bg-white p-4 rounded-lg">
                  <img src={icon} alt="" className="h-5 mb-2" />
                  {text}
                </div>
              ))}
            </div>
            {/* Description */}
            <div>
              <h1 className="text-xl font-medium mb-3 text-[#FFD369]">Description</h1>
              <p className="text-gray-200">{pet.description}</p>
            </div>
            {/* Features */}
            <div>
              <h1 className="text-xl font-medium mb-3 text-[#FFD369]">Features</h1>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Friendly and Social",
                  "Supervised Sessions",
                  "Calm Temperament",
                  "Photo-Friendly",
                  
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-200">
                    <img src={assets.check_icon} className="h-4 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Right: form */}
        <form
          onSubmit={handleSubmit}
          className="shadow-lg h-max sticky top-18 rounded-xl p-6 space-y-6 text-black bg-[#FFD369] border border-[#FFD369]/20">
          <p className="flex items-center justify-between text-2xl text-gray-800 font-semibold">
            {currency}
            {pet.pricePerDay}
            <span className="text-base text-black font-normal">
              {" "}
              per hour
            </span>
          </p>
          <hr className="border-black my-6" />
          <div className="flex flex-col gap-2">
            <label htmlFor="pickup-date">Pickup Date</label>
            <input
              value={pickupDate}
              onChange={(evt) => setPickupDate(evt.target.value)}
              type="date"
              className="border border-borderColor px-3 py-2 rounded-lg"
              required
              id="pickup-date"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="return-date">Return Date</label>
            <input
              value={returnDate}
              onChange={(evt) => setReturnDate(evt.target.value)}
              type="date"
              className="border border-borderColor px-3 py-2 rounded-lg"
              required
              id="return-date"
            />
          </div>
          <button className="w-full bg-black hover:bg-gray-700 transition-all py-3 font-medium text-white rounded-xl cursor-pointer">
            Book Now
          </button>
          <p className="text-center text-sm">
            No credit card required to reserve.
          </p>
        </form>
      </div>
    </div>
  ) : <Loader />
}

export default PetDetails