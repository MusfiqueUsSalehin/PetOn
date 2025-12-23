import React from 'react'
import Title from './Title'
import { dummyPetData } from '../assets/assets'
import PetCard from './PetCard'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
        <div>
            <Title title="Featured Pets" subTitle="Explore our selecton of companions ready to brighten your day"  />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18'>
            {
                dummyPetData.slice(0,6).map((pet)=> (
                    <div key={pet._id} >
                      <PetCard pet={pet} />  
                    </div>
                ))
            }

        </div>

        <button 
        onClick={() => {
            navigate('/pets');
            scrollTo(0,0);
          }}
        className='flex items-center justify-center gap-2 px-6 py-2 bg-[#FFD369] text-[black] font-bold hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
            Explore all Pets <img src={assets.arrow_right} alt="arrow-right" />

        </button>
    </div>
  )
}

export default FeaturedSection