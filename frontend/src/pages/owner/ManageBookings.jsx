import React, {useEffect, useState} from 'react'

import Title from '../../components/owner/Title'
import { useAppContext } from '../../context/appContext'
import toast from 'react-hot-toast'

const ManageBookings = () => {

  const {axios, currency} = useAppContext()

  

  const [bookings, setBookings] = useState([])

  const fetchOwnerBookings= async ()=>{

    try {
      const {data} = await axios.get('/api/bookings/owner-bookings')
      if(data.success){
        setBookings(data.bookings)
      }
      else{
        toast.error(data.message)
      }
    }
    catch (error) {
      toast.error(error.message)
    }

  }

  const changeBookingStatus = async (bookingId, status) => {

    try {
      const {data} = await axios.post('/api/bookings/change-booking-status', {bookingId, status})
      if(data.success){
        toast.success(data.message)
        fetchOwnerBookings()
      }
      else{
        toast.error(data.message)
      }
    }
    catch (error) {
      toast.error(error.message)
    }

  }



  useEffect(() => {
    fetchOwnerBookings()
    
  }, [])
  
  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      {/* Title */}
      <Title
        title="Manage Bookings"
        subTitle="Track all customer bookings, approve or cancel requests and manage booking status."
      />
      {/* Table */}
      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-white mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-white">
            <tr className="">
              <th className="p-3 font-medium">Pet</th>
              <th className="p-3 font-medium max-md:hidden">Time Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium max-md:hidden">Payment</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {bookings.map((booking, idx) => (
              <tr
                key={idx}
                className="border-t border-white text-gray-500">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={booking.pet.image}
                    alt="booking-car-image"
                    className="w-12 h-12 aspect-square rounded-md object-cover"
                  />
                  <p className="font-medium max-md:hidden text-[#FFD369]">
                    {booking.pet.name}<span className='text-white'> | </span>{booking.pet.species}
                  </p>
                </td>
                <td className="p-3 max:md:hidden">
                  {booking.pickupDate.split("T")[0]} to{" "}
                  {booking.returnDate.split("T")[0]}
                </td>
                <td className="p-3 text-blue-700">
                  {currency}
                  {booking.price}
                </td>
                <td className="p-3 max:md:hidden">
                  <span className="bg-[#FFD369] px-3 py-1 rounded-full text-xs text-black">
                    offline
                  </span>
                </td>
                <td className="p-3">
                  {booking.status === "pending" ? (
                    <select
                      onChange={(e) =>changeBookingStatus(booking._id, e.target.value)}
                      value={booking.status}
                      className="px-2 py-1.5 mt-1 text-white border border-borderColor rounded-md outline-none">
                      <option value="pending">Pending</option>
                      <option value="cancelled">Cancelled</option>
                      <option value="confirmed">Confirmed</option>
                    </select>
                  ) : (
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        booking.status === "confirmed"
                          ? "bg-green-300 text-black"
                          : "bg-red-300 text-black"
                      }`}>
                      {booking.status}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManageBookings