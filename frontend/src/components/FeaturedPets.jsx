import React from 'react'
import { assets } from '../assets/assets'

const FeaturedPets = () => {

    const pets = [
        {
            name: 'Purity',
            type: 'Dog',
            tags: ['Friendly', 'Obedient'],
            price: '$10/hr',
            image: assets.husky,
            available: 'Available Now'
        },
        {
            name: 'Tom',
            type: 'Cat',
            tags: ['Moody', 'Sensitive'],
            price: '$10/hr',
            image: assets.cat,
            available: 'Booked'
        },
        {
            name: 'Kelly',
            type: 'Rabbit',
            tags: ['Active', 'Sociable'],
            price: '$10/hr',
            image: assets.rabbit,
            available: 'Available Now'
        }
    ]

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-12 flex flex-col items-center gap-8'>

            <div className='text-center'>
                <h2 className='text-3xl font-bold text-[#FFD369] mb-2'>Featured Pets</h2>
                <p className='text-[#FFD369] italic font-light'>Explore our selection of companions ready to brighten your day</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6'>
                {pets.map((pet, idx) => (
                    <div key={idx} className='bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300'>
                        <div className='relative h-64 overflow-hidden'>
                            <img src={pet.image} alt={pet.name} className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                            <span className={`absolute top-4 left-4 text-xs font-bold text-white px-3 py-1 rounded-full ${pet.available === 'Available Now' ? 'bg-[#31E1F7]' : 'bg-gray-500'}`}>
                                {pet.available}
                            </span>
                            <div className='absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded'>
                                {pet.price}
                            </div>
                        </div>

                        <div className='p-6'>
                            <div className='flex justify-between items-start mb-2'>
                                <div>
                                    <h3 className='text-xl font-bold text-gray-800'>{pet.name}</h3>
                                    <p className='text-xs text-gray-500 uppercase'>{pet.type}</p>
                                </div>
                            </div>

                            <div className='flex flex-wrap gap-2 mt-3'>
                                {pet.tags.map((tag, tIdx) => (
                                    <div key={tIdx} className='flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full'>
                                        <span className='w-1 h-1 rounded-full bg-gray-400'></span>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className='mt-8 bg-[#FFD369] text-black font-bold uppercase text-xs py-3 px-8 rounded-full hover:bg-[#ffc63b] transition-colors shadow-lg shadow-[#FFD369]/30'>
                Explore Pets ↗
            </button>

        </div>
    )
}

export default FeaturedPets
