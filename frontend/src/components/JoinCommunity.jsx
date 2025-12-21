import React from 'react'
import { assets } from '../assets/assets'

const JoinCommunity = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-16'>

            <div className='rounded-2xl bg-gradient-to-r from-[#F2994A] to-[#F2C94C] relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16'>

                <div className='flex-1 z-10 max-w-xl'>
                    <h2 className='text-3xl font-bold text-white mb-4'>Do You Own a Friendly Pet?</h2>
                    <p className='text-white/90 mb-8 leading-relaxed'>
                        Share your companion's joy by listing them on PetOn.
                        We take care of user verification, safety guidelines, and secure payments
                        — so you can offer companionship experiences with confidence and peace of mind.
                    </p>
                    <button className='bg-white text-[#F2994A] font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-50 transition-colors cursor-pointer'>
                        List your pet
                    </button>
                </div>

                <div className='absolute right-0 bottom-0 max-md:hidden h-full w-1/2'>
                    {/* Mask image gradient could be applied here for smoother blend */}
                    <img src={assets.dog} alt="Friendly pet" className='h-[120%] w-auto object-contain absolute bottom-0 right-10 drop-shadow-2xl' />
                </div>

                {/* Mobile image fallback or adjustment if needed, hiding absolute image on mobile */}
                <div className='mt-8 md:hidden w-full'>
                    <img src={assets.dog} alt="Friendly pet" className='w-full max-w-xs mx-auto object-contain rounded-lg' />
                </div>

            </div>

        </div>
    )
}

export default JoinCommunity
