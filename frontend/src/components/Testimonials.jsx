import React from 'react'

const Testimonials = () => {

    const reviews = [
        {
            name: 'Irene Rodriguez',
            role: 'Key Account Manager',
            image: 'https://randomuser.me/api/portraits/women/44.jpg',
            stars: 5,
            text: '"I\'ve used many booking platforms before, but none compare to the personalized experience and attention to detail that PetOn\'s hosts provide."'
        },
        {
            name: 'James Wright',
            role: 'Software Engineer',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
            stars: 5,
            text: '"I\'ve used many booking platforms before, but none compare to the personalized experience and attention to detail that PetOn\'s hosts provide."'
        },
        {
            name: 'Sarah Chen',
            role: 'Product Designer',
            image: 'https://randomuser.me/api/portraits/women/68.jpg',
            stars: 5,
            text: '"I\'ve used many booking platforms before, but none compare to the personalized experience and attention to detail that PetOn\'s hosts provide."'
        }
    ]

    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-16 flex flex-col items-center mb-20'>

            <h2 className='text-3xl font-bold text-white mb-2 text-center'>What Our Customers Say</h2>
            <p className='text-gray-400 text-center mb-12 max-w-2xl'>
                Discover why discerning travelers choose our hosts for their luxury needs around the world.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
                {reviews.map((review, idx) => (
                    <div key={idx} className='bg-[#FFD369] rounded-2xl p-8 relative'>
                        <div className='flex items-center gap-4 mb-4'>
                            <img src={review.image} alt={review.name} className='w-12 h-12 rounded-full border-2 border-white object-cover' />
                            <div>
                                <h4 className='font-bold text-gray-900 leading-tight'>{review.name}</h4>
                                <p className='text-[10px] text-gray-700 uppercase tracking-wide'>{review.role}</p>
                            </div>
                        </div>

                        <div className='flex gap-1 mb-4 text-[#31E1F7]'>
                            {[...Array(review.stars)].map((_, i) => (
                                <span key={i}>★</span>
                            ))}
                        </div>

                        <p className='text-sm text-gray-800 leading-relaxed font-medium'>
                            {review.text}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Testimonials
