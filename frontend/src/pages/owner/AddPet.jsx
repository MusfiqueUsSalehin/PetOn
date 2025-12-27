import React, {useState} from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'


const AddPet = () => {

  const currency = import.meta.env.VITE_CURRENCY

  const [image, setImage] = useState(null)
  const [pet, setPet] = useState({
            "name": "",
            "species": "Enter",
            "breed": "Enter",
            "age": 0,
            "behaviour": "Select",
            "pricePerDay": 0,
            "location": "Select a location",
            "description": "Write here",
            "trained": "",
            "active": "Select",
            
  })

  const handleSubmit = async (e)=>{
    e.preventDefault()
  }

 
  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New Pet"
        subTitle="Fill in details to list a new pet for booking, including pricing , availability and pet details."
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl">
        {/* CAR IMAGE */}
        <div className="flex items-center gap-2 w-full">
          <label htmlFor="pet-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload}
              alt="car-image"
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              id="pet-image"
              accept="image/*"
              hidden
              onChange={(evt) => setImage(evt.target.files[0])}
            />
          </label>
          <p className="text-sm text-white">Upload a picture of your pet.</p>
        </div>
        {/* Pet name and Species */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label className='text-white'>Name</label>
            <input
              className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
              value={pet.name}
              type="text"
              placeholder="e.g. Tommy, Johnny..."
              onChange={(evt) => setPet({ ...pet, name: evt.target.value })} // update name
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className='text-white'>Species</label>
            <input
              className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
              value={pet.species}
              type="text"
              placeholder="e.g. Dog, Cat, Rabbit..."
              onChange={(evt) => setPet({ ...pet, species: evt.target.value })} // update species
              required
            />
          </div>
        </div>
        {/* Pet age, Price, breed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col w-full">
            <label className='text-white'>Age</label>
            <input
              className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
              value={pet.age}
              type="number"
              placeholder="2025"
              onChange={(evt) => setPet({ ...pet, age: evt.target.value })} // update age
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className='text-white'>Daily Price ({currency})</label>
            <input
              className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
              value={pet.pricePerDay}
              type="number"
              placeholder="000"
              onChange={(evt) =>
                setPet({ ...pet, pricePerDay: evt.target.value })
              } // update price/day
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label>Breed</label>
            <input
              className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
              value={pet.breed}
              type="text"
              placeholder="e.g. Dog, Cat, Rabbit..."
              onChange={(evt) => setPet({ ...pet, breed: evt.target.value })} // update breed
              required
            />
          </div>
        </div>
        {/* Car Behaviour, Energy, training */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col w-full">
            <label className='text-white'>Behaviour</label>
            <select
              className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
              value={pet.behaviour}
              onChange={
                (evt) => setPet({ ...pet, behaviour: evt.target.value }) // update transmission
              }>
              <option value="">Select a behaviour</option>
              <option value="Automatic">Friendly</option>
              <option value="Manual">Calm</option>
              <option value="Semi-Automatic">Protective</option>
              <option value="Semi-Automatic">Gentle</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label className='text-white'>Energy</label>
            <select
              className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
              value={pet.active}
              onChange={
                (evt) => setPet({ ...pet, active: evt.target.value }) // update Energy
              }>
              <option value="">Select</option>
              <option value="Gas">Highly active</option>
              <option value="Diesel">Active</option>
              <option value="Petrol">Lazy</option>
              <option value="Electric">Very lazy</option>
              
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label className='text-white'>Training Status</label>
            <input
              className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
              value={pet.trained}
              type="text"
              placeholder="enter"
              onChange={(evt) =>
                setPet({ ...pet, trained: evt.target.value })
              } // update seating_capacity
              required
            />
          </div>
        </div>
        {/* Pet Location */}
        <div className="flex flex-col w-full">
          <label className='text-white'>Location</label>
          <select
            className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
            value={pet.location}
            onChange={
              (evt) => setPet({ ...pet, location: evt.target.value }) // update location
            }>
            <option value="">Select a location</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
        {/* Pet Description */}
        <div className="flex flex-col w-full">
          <label className='text-white'>Description</label>
          <textarea
            rows={5}
            className="px-3 py-2 mt-1 border border-[#FFD369] rounded-md outline-none"
            value={pet.description}
            placeholder="e.g. A luxurious SUV with a spacious interior and a powerful engine..."
            onChange={(evt) =>
              setPet({ ...pet, description: evt.target.value })
            } // update description
            required></textarea>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 mt-4 hover:bg-primary-dull bg-[#39FF14] text-black rounded-md font-medium w-max cursor-pointer">
          <img src={assets.tick_icon} alt="tick-icon" />
          List your pet
        </button>
      </form>
    </div>
  )
}

export default AddPet