import React from 'react'
import { assets } from "../assets/assets";
import Title from './Title';

const Testimonial = () => {
    const testimonials = [
  {
    name: "Nusrat Jahan",
    location: "Dhaka, Bangladesh",
    image: assets.testimonial1,
    testimonial:
      "petOn made it so easy to spend time with a friendly pet. The booking process was smooth and the pet was well cared for.",
  },
  {
    name: "Rakib Hasan",
    location: "Chattogram, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200",
    testimonial:
      "I was nervous renting a pet for the first time, but petOn exceeded my expectations. Everything felt safe and professional.",
  },
  {
    name: "Farzana Akter",
    location: "Sylhet, Bangladesh",
    image: assets.testimonial2,
    testimonial:
      "petOn is a wonderful concept! Spending time with a calm and friendly pet really helped reduce my stress.",
  },
];
  return (
    <div
      className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
      <Title
        title="What Our Customers Say"
        subTitle="Discover why discerning car-fanatics from around the globe choose CarRental for meeting their expectations."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
        {testimonials.map((testimonial, idx) => (
          <div
            
            key={idx}
            className="bg-yellow-300 p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="text-xl">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.location}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <>
                    <img src={assets.star_icon} alt="star-icon" key={index} />
                    {/* <Star key={index} filled={testimonial.rating > index} /> */}
                  </>
                ))}
            </div>
            <p className="text-gray-500 max-w-90 mt-4 font-light">
              "{testimonial.testimonial}"
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial