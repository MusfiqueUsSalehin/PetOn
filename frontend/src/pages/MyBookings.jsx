import React, { useEffect } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useAppContext } from '../context/appContext'
import toast from 'react-hot-toast'

const MyBookings = () => {

  const {axios, user, currency} = useAppContext
  const [bookings, setBookings] = useState([]);


  

  const fetchMyBookings = async () => {
    try {
      const {data} = await axios.get('/api/bookings/user-bookings');
      if(data.success){
        setBookings(data.bookings);
      }
      else{
        toast.error(data.message);
      }
    } 
    catch (error) {
      toast.error(error.message);
    }
    
  };


  useEffect(() => {
    user && fetchMyBookings();
  }, [user]);
  
  return (
    <div
      className="px-6 md:px-16 lg:px-24 xl:px-32 2xl:px-48 mt-16 text-sm max-w-7xl">
      <Title
        title="My Bookings"
        subTitle="View and manage all of your bookings."
        align="left"
      />
      <div>
        {bookings.map((booking, idx) => (
          <div
            key={booking._id}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 border border-[#FFD369] rounded-lg mt-5 first:mt-12">
            {/* Car Image + Info. */}
            <div className="md:col-span-1">
              <div className="rounded-md overflow-hidden mb-3">
                <img
                  src={booking.pet.image}
                  alt="booking-pet-image"
                  className="w-full h-auto aspect-video object-cover"
                />
              </div>
              <p className="text-lg font-medium mt-2 text-[#FFD369]">
                {booking.pet.name} | {booking.pet.species}
              </p>
              <p className="text-gray-400">
                {booking.pet.breed} ▪️ {booking.pet.age} ▪️{" "}
                {booking.pet.location}
              </p>
            </div>

            {/* Booking Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <p className="px-3 py-1.5 bg-white rounded">
                  Booking #{idx + 1}
                </p>
                <p
                  className={`px-3 py-1 text-xs rounded-full ${
                    booking.status === "confirmed"
                      ? "bg-green-400/15 text-green-600"
                      : "bg-red-400/15 text-red-600"
                  }`}>
                  {booking.status}
                </p>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <img
                  src={assets.calender_icon_colored}
                  alt="calendar-icon"
                  className="w-4 h-4 mt-1"
                />
                <div>
                  <p className="text-gray-500">Rental Period</p>
                  <p className='text-[#FFD369]'>
                    {booking.pickupDate.split("T")[0]} To{" "}
                    {booking.returnDate.split("T")[0]}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2 mt-3">
                <img
                  src={assets.location_icon_colored}
                  alt="location-icon"
                  className="w-4 h-4 mt-1"
                />
                <div>
                  <p className="text-gray-500">Pick-up Location</p>
                  <p className='text-[#FFD369]'>{booking.pet.location}</p>
                </div>
              </div>
            </div>
            {/* PRICE */}
            <div className="md:col-span-1 flex flex-col justify-between gap-6">
              <div className="text-sm text-gray-500 text-right">
                <p>Total Price</p>
                <h1 className="text-2xl font-semibold text-blue-700">
                  {currency}
                  {booking.price}
                </h1>
                <p>Booked On: {booking.createdAt.split("T")[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyBookings