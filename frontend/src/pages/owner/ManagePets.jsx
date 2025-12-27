import React ,{useEffect, useState} from 'react'
import { assets, dummyPetData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const ManagePets = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [pets, setPets] = useState([])

  const fetchOwnerPets = async ()=>{
    setPets(dummyPetData)

  }


  useEffect(()=>{
    fetchOwnerPets()

  },[])



  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      {/* Title */}
      <Title
        title="Manage Pets"
        subTitle="View all listed companions, update their details or remove them from booking platforms."
      />
      {/* Table */}
      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-white mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-white">
            <tr className="">
              <th className="p-3 font-medium">Pet</th>
              <th className="p-3 font-medium max-md:hidden">Category</th>
              <th className="p-3 font-medium">Price</th>
              <th className="p-3 font-medium max-md:hidden">Status</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {pets.map((pet, idx) => (
              <tr key={idx} className="border-t border-white">
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={pet.image}
                    alt=""
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />
                  <div className="max-md:hidden">
                    <p className="font-medium text-[#FFD369]">
                      {pet.name} <span className='text-white'>|</span> {pet.species}
                    </p>
                    <p className="text-xs text-gray-500">
                      {pet.breed} ▪ {pet.age} years old
                    </p>
                  </div>
                </td>
                <td className="p-3 max-md:hidden text-[#FFD369]">{pet.category}</td>
                <td className="p-3 text-[#FFD369]">
                  {currency}
                  {pet.pricePerDay}/day
                </td>
                <td className="p-3 max-md:hidden">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      pet.isAvailable
                        ? "bg-green-300 text-black"
                        : "bg-red-300 text-black"
                    }`}>
                    {pet.isAvailable ? "Avilable" : "Unavailable"}
                  </span>
                </td>
                <td className="p-1 flex items-center bg-[#FFD369] rounded-[100px] m-2">
                  <img
                    
                    src={
                      pet.isAvailable ? assets.eye_close_icon : assets.eye_icon
                    }
                    alt="eye-icon"
                    className="cursor-pointer"
                  />
                  <img
                    
                    src={assets.delete_icon}
                    alt="delete-icon"
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ManagePets